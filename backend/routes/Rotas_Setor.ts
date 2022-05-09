import { Router, Request, Response } from "express";
import { ControllerCadastroSetor } from "../controllers/Setor/Controler_Cadastrar_Setor";
import { verificarToken } from "../middlewares/verificarToken";


const RotasSetor = Router()
const controllerCadastroSetor = new ControllerCadastroSetor()

RotasSetor.post('/', verificarToken, controllerCadastroSetor.handle)

export { RotasSetor }