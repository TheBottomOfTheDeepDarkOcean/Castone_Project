import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { ProductItem } from './schemas/product-item.schema';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('ProductItem')
    private readonly productItemModel: Model<ProductItem>,
  ) {}

  async findAll(
    filter: any = {},
    sort: any = {},
    skip: number = 0,
    limit: number = 10,
  ) {
    return await this.productModel
      .find(filter)
      .populate('category')
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .lean();
  }

  async count(filter: any = {}) {
    return await this.productModel.countDocuments(filter);
  }

  async findById(id: string) {
    return await this.productModel.findById(id).lean();
  }

  async findItemsByProductId(productId: string) {
    return await this.productItemModel.find({ product: productId }).lean();
  }

  async updateStock(productId: string, quantity: number) {
    return await this.productModel.findByIdAndUpdate(
      productId,
      { $inc: { totalStock: quantity } },
      { new: true },
    );
  }
}
