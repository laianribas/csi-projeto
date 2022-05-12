import { Router } from "express";
// import { ControllerCadastroChamado } from "../controllers/Chamado/Controller_Cadastro_Chamado";
import { ControllerResgatarTodosChamados } from "../controllers/Chamado/Controller_Resgatar_Todos_Chamados";
import { verificarToken } from "../middlewares/verificarToken";


const RotasChamado = Router()
// const controllerCadastroChamado = new ControllerCadastroChamado()
const controllerResgatarTodosChamados = new ControllerResgatarTodosChamados()

RotasChamado.get('/', verificarToken, controllerResgatarTodosChamados.handle)
// RotasChamado.post('/', controllerCadastroChamado.handle)

export { RotasChamado };
