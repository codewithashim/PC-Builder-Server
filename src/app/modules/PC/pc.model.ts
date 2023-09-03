import { Schema, model } from "mongoose";
import { IKeyFeatures, IPC } from "./pc.interface";

const KeyFeaturesSchema = new Schema<IKeyFeatures>({
  Brand: { type: String, required: true },
  Model: { type: String, required: true },
  Specification: { type: String, required: true },
  Port: { type: String, required: true },
  Voltage: { type: String, required: true },
});

const PCSchema = new Schema<IPC>(
  {
    image: { type: String, required: true },
    productName: { type: String, required: true },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: ["In Stock", "Out of Stock"],
      required: true,
    },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    keyFeatures: { type: KeyFeaturesSchema, required: true },
    individualRating: { type: Number, required: true },
    averageRating: { type: Number, required: true },
    reviews: { type: [String], required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const PC = model<IPC>("pc-builder", PCSchema);
