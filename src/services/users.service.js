import UserModel from "../models/users.models.js";

export const getUsersServices = async () => {
  try {
    const result = await UserModel.find({});
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
