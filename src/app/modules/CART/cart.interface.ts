import { Model, Types } from "mongoose"
import { IPC } from "../PC/pc.interface"



export type ICart = {
    user:string,
    category:string,
    productName:Types.ObjectId | IPC
}


export type CartModel =Model<ICart,Record<string,unknown>>