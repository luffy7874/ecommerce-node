import { Router } from "express";
const route = Router();

import AuthenticationController from "../controller/AuthenticationController";
import HomeController from "../controller/HomeController";
import { validate } from "../middleware/validate";
import { userRequest } from "../request/UserRequest";

route.get("/", HomeController.redirect);
route.get("/api", HomeController.api);
route.post("/api/register", validate(userRequest), AuthenticationController.register);
route.post("/api/login", AuthenticationController.login);

export {route};