import { Router } from "express";
const route = Router();

import AuthenticationController from "../controller/AuthenticationController";
import HomeController from "../controller/HomeController";
import { validate } from "../middleware/validate";
import { userRequest } from "../request/UserRequest";
import AuthToken from "../middleware/AuthToken";

const authToken = new AuthToken();
const homeController = new HomeController();
const authenticationController = new AuthenticationController();

route.get("/", homeController.redirect);
route.get("/api", homeController.api);
route.post("/api/register", validate(userRequest), authenticationController.register);
route.post("/api/login", authenticationController.login);
route.get('/api/verify-token', authToken.verifyPageAuth);


export {route};