import { Router, Request, Response } from "express";
import { ControllerCadastroFuncionario } from "../controllers/Funcionario/Controler_Cadastro_Funcionario";


const RotasFuncionario = Router()
const controllerCadastroFuncionario = new ControllerCadastroFuncionario()

RotasFuncionario.post('/', controllerCadastroFuncionario.handle)

export { RotasFuncionario }