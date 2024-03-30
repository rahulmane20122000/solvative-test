import { AUTH_RESPONSES } from "../../common/constants/auth.responses.js"
import userDb from "./user.db.js";

const {INTERNAL_SERVER_ERROR,USER_CREATED,USER_UPDATED} = AUTH_RESPONSES;


const createUser = async(userDetails)=>{
    try {
         await userDb.createUser(userDetails);
         return USER_CREATED
    } catch (error) {
        throw INTERNAL_SERVER_ERROR
    }
}
const updateUser = async(userId,userName)=>{
    try {
         await userDb.updateUser(userId,userName);
         return USER_UPDATED
    } catch (error) {
        throw INTERNAL_SERVER_ERROR
    }
}

export default  {
    updateUser,
    createUser
}