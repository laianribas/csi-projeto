import { response, Router } from "express";
import { CheckLogin } from "../controllers/login/checkLogin";
import { ControllerLogin } from "../controllers/login/Controller_Login";

const RotaLogin = Router()
const controllerLogin = new ControllerLogin()
const checkLogin = new CheckLogin()

RotaLogin.post('/', controllerLogin.handle)
RotaLogin.get('/checkLogin', checkLogin.handle)

RotaLogin.get('/', (req, res) => {
  return res.status(200).json({ message: 'funciona!' })
})
export { RotaLogin };
