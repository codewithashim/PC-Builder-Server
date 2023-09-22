import { Schema, model } from 'mongoose';
import { ICategory } from './category.interface';

const CategorySchema = new Schema<ICategory>(
  {
    category: { type: String, required: true },
    imageSrc: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Category = model<ICategory>('Category', CategorySchema);
