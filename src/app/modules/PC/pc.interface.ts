import { Model } from "mongoose";

export type IKeyFeatures = {
  Brand: string;
  Model: string;
  Specification: string;
  Port: string;
  Voltage: string;
};

export type IPC = {
  image: string;
  productName: string;
  category: string;
  status: "In Stock" | "Out of Stock";
  price: number;
  description: string;
  keyFeatures: IKeyFeatures;
  individualRating: number;
  averageRating: number;
  reviews: string[];
};

export type PcModel = Model<IPC>;
