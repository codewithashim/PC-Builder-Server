import ApiError from "../../../errors/ApiError";
import { IPC } from "./pc.interface";
import { PC } from "./pc.model";

const createPCServices = async (PCData: IPC): Promise<IPC | null> => {
  const createdPC = await PC.create(PCData);
  if (!createdPC) {
    throw new ApiError(400, "Failed to create new PC");
  }
  return createdPC;
};

const getSinglePC = async (id: string): Promise<IPC | null> => {
  const result = await PC.findById(id);
  return result;
};

const getByCategory = async (
  category: string | undefined
): Promise<IPC[] | null> => {
  const result = await PC.find({ category: category });
  return result;
};

const deletePC = async (id: string): Promise<IPC | null> => {
  const result = await PC.findByIdAndDelete(id);
  return result;
};

export const PCService = {
  createPCServices,
  getSinglePC,
  deletePC,
  getByCategory,
};
