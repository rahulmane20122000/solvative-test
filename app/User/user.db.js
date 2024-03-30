import { userModel } from "./user.schema.js";

const createUser = (userdetails) => userModel.create({ ...userdetails });
const updateUser = (userId,userName) => userModel.findOneAndUpdate({id:userId},{name:userName});

export default { createUser,updateUser };
