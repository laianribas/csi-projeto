import { Router } from "express";
import { ControllerCadastrarFuncionario } from "../controllers/Funcionario/Controller_Cadastrar_Funcionario";
import { ControllerEditarFuncionario } from "../controllers/Funcionario/Controller_Editar_Funcionario";
import { ControllerInativarFuncionario } from "../controllers/Funcionario/Controller_Inativar_Funcionario";
import { ControllerResgatarFuncionario } from "../controllers/Funcionario/Controller_Resgatar_Funcionario";
import { ControllerResgatarTodosFuncionarios } from "../controllers/Funcionario/Controller_Resgatar_Todos_Funcionarios";
import { verificarNivelAcesso } from "../middlewares/verificarNivelAcesso";
import { verificarToken } from "../middlewares/verificarToken";

const RotasFuncionario = Router()
const controllerCadastrarFuncionario = new ControllerCadastrarFuncionario()
const controllerEditarFuncionario = new ControllerEditarFuncionario()
const controllerInativarFuncionario = new ControllerInativarFuncionario()
const controllerResgatarFuncionario = new ControllerResgatarFuncionario()
const controllerResgatarTodosFuncionarios = new ControllerResgatarTodosFuncionarios()

RotasFuncionario.post('/', verificarToken, verificarNivelAcesso, controllerCadastrarFuncionario.handle)
RotasFuncionario.patch('/:id', verificarToken, controllerEditarFuncionario.handle)
RotasFuncionario.delete('/:id', verificarToken, verificarNivelAcesso, controllerInativarFuncionario.handle)
RotasFuncionario.get('/:id', verificarToken, verificarNivelAcesso, controllerResgatarFuncionario.handle)
RotasFuncionario.get('/', verificarToken, verificarNivelAcesso, controllerResgatarTodosFuncionarios.handle)

export { RotasFuncionario };

