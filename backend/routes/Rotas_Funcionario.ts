import { Router } from "express";
import { ControllerCadastrarFuncionario } from "../controllers/Funcionario/Controller_Cadastrar_Funcionario";
import { ControllerResgatarTodosFuncionarios } from "../controllers/Funcionario/Controller_Resgatar_Todos_Funcionarios";
import { verificarNivelAcesso } from "../middlewares/verificarNivelAcesso";
import { verificarToken } from "../middlewares/verificarToken";


const RotasFuncionario = Router()
const controllerCadastrarFuncionario = new ControllerCadastrarFuncionario()
const controllerResgatarTodosFuncionarios = new ControllerResgatarTodosFuncionarios()

RotasFuncionario.get('/', verificarToken, verificarNivelAcesso, controllerResgatarTodosFuncionarios.handle)
RotasFuncionario.post('/', verificarToken, verificarNivelAcesso, controllerCadastrarFuncionario.handle)

export { RotasFuncionario };
