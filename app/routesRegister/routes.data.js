import { RouteHandler } from "../../common/utils/handlers.js";
import { ROUTE_CONSTANTS } from "../../common/constants/routeConstants.js";
import { userRouter } from "../User/user.routes.js";
import { rewardRouter } from "../Reward/reward.routes.js";

const { USERS, REWARDS } = ROUTE_CONSTANTS;

export const routes = [
  new RouteHandler(USERS, userRouter),
  new RouteHandler(REWARDS, rewardRouter),
];
