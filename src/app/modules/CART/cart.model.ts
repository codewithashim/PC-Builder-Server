import { Schema, model } from "mongoose";
import { CartModel, ICart } from "./cart.interface";

const CartSchema :Schema<ICart> = new Schema<ICart>({
    user:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    productName:{
        type:Schema.Types.ObjectId,ref:"pc-builder",
        required:true
    }
},{
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  })


  export const Cart = model<ICart,CartModel> ('cart',CartSchema)