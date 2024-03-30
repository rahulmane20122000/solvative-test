import { ObjectId } from "mongodb";
import { rewardModel } from "./reward.schema.js";

const createReward = (rewardDetails) =>
  rewardModel.create({ ...rewardDetails });

const findUser = (userId) => rewardModel.findOne({ givenTo: userId });


const findAndUpdate = (userId, points) =>
  rewardModel.updateOne({ givenTo: userId }, { points: points });

const addPoints = (givenTo, points) =>
  rewardModel.updateOne({ givenTo }, { $inc: { rewardBalace: points } });

const getAllRewards = async () => rewardModel.find();

export default {
  createReward,
  findUser,
  findAndUpdate,
  getAllRewards,
  addPoints,
};
