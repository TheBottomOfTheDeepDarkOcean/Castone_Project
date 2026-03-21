import { ProductsRepository } from './products.repository';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: ProductsRepository);
    findAll(query?: any): Promise<{
        products: (import("./schemas/product.schema").Product & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        pagination: {
            total: number;
            page: number;
            pages: number;
        };
    }>;
    findOne(id: string): Promise<{
        availableItems: (import("./schemas/product-item.schema").ProductItem & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        totalInStock: number;
        name: string;
        brand: string;
        price: number;
        specifications: any;
        category: import("mongoose").Types.ObjectId;
        totalStock: number;
        _id: import("mongoose").Types.ObjectId;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        isNew: boolean;
        schema: import("mongoose").Schema;
        __v: number;
    }>;
}
