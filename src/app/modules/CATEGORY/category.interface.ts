import { Model } from 'mongoose';

export type ICategory = {
  category: string;
  imageSrc: string;
};

export type CategoryModel = Model<ICategory>;
