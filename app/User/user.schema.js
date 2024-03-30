import { model } from "mongoose";
import { BaseSchema } from "../../common/utils/baseSchema.js";
import { v4 as uuidv4 } from 'uuid';

const userDetailsSchema = new BaseSchema({
    id: {
        type: String,
        required: true,
        default:uuidv4
    },
    name: {
        type: String,
        required: true
    },
})

export const userModel = model("userDetails", userDetailsSchema);