import { Router, Request, Response } from "express";
import { ControllerCadastroSetor } from "../controllers/Setor/Controler_Cadastrar_Setor";


const RotasSetor = Router()
const controllerCadastroSetor = new ControllerCadastroSetor()

RotasSetor.post('/', controllerCadastroSetor.handle)

export { RotasSetor }