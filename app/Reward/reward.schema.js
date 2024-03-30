import { model } from "mongoose";
import { BaseSchema } from "../../common/utils/baseSchema.js";
import { ObjectId } from "mongodb";

const rewardsSchema = new BaseSchema({
  points: {
    type: Number,
    required: true,
  },
  givenBy: {
    type:String,
    required: false
  },
  givenTo: {
    type:String, 
    required: false
  },
  rewardBalace : {
    type : Number,
    default : 0
  }
});

export const rewardModel = model("rewards", rewardsSchema);
