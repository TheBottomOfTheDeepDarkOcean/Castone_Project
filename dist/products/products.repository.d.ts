import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { ProductItem } from './schemas/product-item.schema';
export declare class ProductsRepository {
    private readonly productModel;
    private readonly productItemModel;
    constructor(productModel: Model<Product>, productItemModel: Model<ProductItem>);
    findAll(filter?: any, sort?: any, skip?: number, limit?: number): Promise<(Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    count(filter?: any): Promise<number>;
    findById(id: string): Promise<(Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    findItemsByProductId(productId: string): Promise<(ProductItem & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    updateStock(productId: string, quantity: number): Promise<(import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
