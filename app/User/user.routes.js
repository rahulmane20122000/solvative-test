import express from "express";
import { SUCCESS_CODES } from "../../common/constants/statusCode.constants.js";
import { ResponseHandler } from "../../common/utils/handlers.js";
import userService from "./user.service.js";

export const userRouter = express();
const { CREATED, OK } = SUCCESS_CODES;

userRouter.post("/create-user", async (req, res, next) => {
  try {
    const { body } = req;
    const response = await userService.createUser(body);
    res.status(CREATED).send(new ResponseHandler(response));
  } catch (error) {
    next(error);
    s;
  }
});

userRouter.put("/edit-user/:userId", async (req, res, next) => {
  try {
    const { userName } = req.body;
    const { userId } = req.params;
    const response = await userService.updateUser(userId, userName);
    res.status(OK).send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});
