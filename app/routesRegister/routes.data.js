import { RouteHandler } from "../../common/utils/handlers.js";
import { ROUTE_CONSTANTS } from "../../common/constants/routeConstants.js";
import { userRouter } from "../User/user.routes.js";

const { USERS } = ROUTE_CONSTANTS;

export const routes = [new RouteHandler(USERS, userRouter)];
