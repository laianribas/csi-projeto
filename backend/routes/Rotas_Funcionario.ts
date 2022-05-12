import { Router } from "express";
import { ControllerCadastroFuncionario } from "../controllers/Funcionario/Controller_Cadastro_Funcionario";
import { ControllerResgatarTodosFuncionarios } from "../controllers/Funcionario/Controller_Resgatar_Todos_Funcionarios";
import { verificarToken } from "../middlewares/verificarToken";


const RotasFuncionario = Router()
const controllerCadastroFuncionario = new ControllerCadastroFuncionario()
const controllerResgatarTodosFuncionarios = new ControllerResgatarTodosFuncionarios()

RotasFuncionario.get('/', verificarToken, controllerResgatarTodosFuncionarios.handle)
RotasFuncionario.post('/', controllerCadastroFuncionario.handle)

export { RotasFuncionario };
