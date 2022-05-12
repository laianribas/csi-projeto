import { Router } from "express";
import { ControllerCadastroSetor } from "../controllers/Setor/Controller_Cadastrar_Setor";
import { ControllerResgatarTodosSetores } from "../controllers/Setor/Controller_Resgatar_Todos_Setores";
import { verificarToken } from "../middlewares/verificarToken";


const RotasSetor = Router()
const controllerCadastroSetor = new ControllerCadastroSetor()
const controllerResgatarTodosSetores = new ControllerResgatarTodosSetores()

RotasSetor.get('/', verificarToken, controllerResgatarTodosSetores.handle)
RotasSetor.post('/', verificarToken, controllerCadastroSetor.handle)

export { RotasSetor };
