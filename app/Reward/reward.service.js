import { AUTH_RESPONSES } from "../../common/constants/auth.responses.js";
import {
  ERROR_CODES,
  SUCCESS_CODES,
} from "../../common/constants/statusCode.constants.js";
import { SUCCESS_MESSAGE } from "../../common/constants/statusMessages.constants.js";
import { MessageHandler } from "../../common/utils/handlers.js";
import rewardDb from "./reward.db.js";

const { INTERNAL_SERVER_ERROR, USER_UPDATED } = AUTH_RESPONSES;
const { BAD_REQUEST } = ERROR_CODES;
const { CREATED } = SUCCESS_CODES;
const { CREATED_MESSAGE } = SUCCESS_MESSAGE;

const createReward = async (rewardDetails) => {
  try {
    const { points, givenTo } = rewardDetails;
    if (points > 100)
      throw new MessageHandler(
        BAD_REQUEST,
        "Points cannot be greater than 100"
      );
    const userExists = await rewardDb.findUser(givenTo);
    console.log(userExists);
    if (userExists) {
      await rewardDb.findAndUpdate(givenTo, points);
    } else {
      await rewardDb.createReward(rewardDetails);
    }
    return new MessageHandler(CREATED, CREATED_MESSAGE);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllRewards = async () => {
  try {
    const response = await rewardDb.getAllRewards();
    return response;
  } catch (error) {
    throw INTERNAL_SERVER_ERROR;
  }
};

const editReward = async (userId, points) => {
  try {
    if (points > 100)
      throw new MessageHandler(
        BAD_REQUEST,
        "Points cannot be greater than 100"
      );
    await rewardDb.findAndUpdate(userId, points);
    return USER_UPDATED;
  } catch (error) {
    console.log(error);
    throw INTERNAL_SERVER_ERROR;
  }
};

const sendReward = async (givenBy, givenTo, givenPoints) => {
  try {
    const getPoints = await rewardDb.findUser(givenBy);
    if (getPoints) {
      const { points } = getPoints;
      if (givenPoints >= points) {
        throw new MessageHandler(
          BAD_REQUEST,
          "You dont have sufficient points to send"
        );
      } else if (givenPoints <= points) {
        await rewardDb.addPoints(givenTo, givenPoints);
        const latestPoints = points - givenPoints;
        await rewardDb.findAndUpdate(givenBy, latestPoints);
      }
    }
    return new MessageHandler(200, "Points added");
  } catch (error) {
    throw error;
  }
};

export default { createReward, getAllRewards, editReward, sendReward };
