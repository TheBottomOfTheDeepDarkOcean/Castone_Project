/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductsRepository) {}

  async findAll(query: any = {}) {
    const { page = 1, limit = 10, sort, cpu, vga, minPrice, maxPrice } = query;
    const filter: any = {};

    // Thay vì dùng filter['...'] trực tiếp, ta dùng ép kiểu (filter as any)
    if (cpu) filter['specifications.cpu'] = new RegExp(cpu, 'i');
    if (vga) filter['specifications.vga'] = new RegExp(vga, 'i');

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const skip = (Number(page) - 1) * Number(limit);

    const products = await this.productRepository.findAll(
      filter,
      sort,
      skip,
      Number(limit),
    );
    const total = await this.productRepository.count(filter);

    return {
      products,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / Number(limit)),
      },
    };
  }

  async findOne(id: string) {
    const product = await this.productRepository.findById(id);
    if (!product) throw new NotFoundException('Không tìm thấy sản phẩm!');

    const items = await this.productRepository.findItemsByProductId(id);

    return {
      ...product,
      availableItems: items.filter((item: any) => item.status === 'AVAILABLE'),
      totalInStock: items.length,
    };
  }
}
