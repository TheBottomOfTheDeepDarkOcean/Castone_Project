import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true }) // Tự động tạo createdAt và updatedAt
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  brand: string;

  @Prop({ required: true, type: Number })
  price: number;

  @Prop({ type: Object })
  specifications: any; // Chứa CPU, VGA

  @Prop({ type: Types.ObjectId, ref: 'Category' }) // Kết nối với bảng Category
  category: Types.ObjectId;

  @Prop({ default: 0 })
  totalStock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
