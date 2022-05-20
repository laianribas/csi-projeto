import { Router } from "express";
import { CheckLogin } from "../controllers/login/checkLogin";
import { ControllerLogin } from "../controllers/login/Controller_Login";

const RotaLogin = Router()
const controllerLogin = new ControllerLogin()
const checkLogin = new CheckLogin()

RotaLogin.post('/', controllerLogin.handle)
RotaLogin.get('/checkLogin', checkLogin.handle)

export { RotaLogin };