import express, { response } from "express";
import rewardService from "./reward.service.js";
import { ResponseHandler } from "../../common/utils/handlers.js";
import { SUCCESS_CODES } from "../../common/constants/statusCode.constants.js";

export const rewardRouter = express();
const { OK } = SUCCESS_CODES;

rewardRouter.post("/create-reward", async (req, res, next) => {
  try {
    const { body } = req;
    const response = await rewardService.createReward(body);
    res.status(response.statusCode).send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});
rewardRouter.get("/get-all-reward", async (req, res, next) => {
  try {
    const response = await rewardService.getAllRewards();
    res.status(OK).send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});
rewardRouter.put("/edit-reward/:userId", async (req, res, next) => {
  try {
    const {
      params: { userId },
      body: { points },
    } = req;
    const response = await rewardService.editReward(userId, points);
    res.status(response.statusCode).send(new ResponseHandler(response));
  } catch (error) {
    console.log(error);
    next(error);
  }
});

rewardRouter.post("/send-rewards", async (req, res, next) => {
  try {
    const {
      body: { givenBy, givenPoints, givenTo },
    } = req;
    const response = await rewardService.sendReward(
      givenBy,
      givenTo,
      givenPoints
    );
    res.status(response.statusCode).send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});
