import { Router } from "express";
import { ControllerCadastrarChamado } from "../controllers/Chamado/Controller_Cadastrar_Chamado";
import { ControllerResgatarTodosChamados } from "../controllers/Chamado/Controller_Resgatar_Todos_Chamados";
import { verificarToken } from "../middlewares/verificarToken";


const RotasChamado = Router()
const controllerCadastrarChamado = new ControllerCadastrarChamado()
const controllerResgatarTodosChamados = new ControllerResgatarTodosChamados()

RotasChamado.get('/', verificarToken, controllerResgatarTodosChamados.handle)
RotasChamado.post('/', verificarToken, controllerCadastrarChamado.handle)

export { RotasChamado };
