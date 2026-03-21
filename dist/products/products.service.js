"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
let ProductsService = class ProductsService {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async findAll(query = {}) {
        const { page = 1, limit = 10, sort, cpu, vga, minPrice, maxPrice } = query;
        const filter = {};
        if (cpu)
            filter['specifications.cpu'] = new RegExp(cpu, 'i');
        if (vga)
            filter['specifications.vga'] = new RegExp(vga, 'i');
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice)
                filter.price.$gte = Number(minPrice);
            if (maxPrice)
                filter.price.$lte = Number(maxPrice);
        }
        const skip = (Number(page) - 1) * Number(limit);
        const products = await this.productRepository.findAll(filter, sort, skip, Number(limit));
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
    async findOne(id) {
        const product = await this.productRepository.findById(id);
        if (!product)
            throw new common_1.NotFoundException('Không tìm thấy sản phẩm!');
        const items = await this.productRepository.findItemsByProductId(id);
        return {
            ...product,
            availableItems: items.filter((item) => item.status === 'AVAILABLE'),
            totalInStock: items.length,
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map