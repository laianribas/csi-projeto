import { Router, Request, Response } from "express";
import { ControllerLogin } from "../controllers/login/Controller_Login";


const RotaLogin = Router()
const controllerLogin = new ControllerLogin()

RotaLogin.post('/', controllerLogin.handle)

export { RotaLogin }