import { Router } from "express";
import { ControllerCadastroSetor } from "../controllers/Setor/Controller_Cadastrar_Setor";
import { ControllerEditarSetor } from "../controllers/Setor/Controller_Editar_Setor";
import { ControllerInativarSetor } from "../controllers/Setor/Controller_Inativar_Setor";
import { ControllerResgatarSetor } from "../controllers/Setor/Controller_Resgatar_Setor";
import { ControllerResgatarTodosSetores } from "../controllers/Setor/Controller_Resgatar_Todos_Setores";
import { verificarNivelAcesso } from "../middlewares/verificarNivelAcesso";
import { verificarToken } from "../middlewares/verificarToken";

const RotasSetor = Router()
const controllerCadastroSetor = new ControllerCadastroSetor()
const controllerEditarSetor = new ControllerEditarSetor()
const controllerInativarSetor = new ControllerInativarSetor()
const controllerResgatarSetor = new ControllerResgatarSetor()
const controllerResgatarTodosSetores = new ControllerResgatarTodosSetores()

RotasSetor.post('/', verificarToken, verificarNivelAcesso, controllerCadastroSetor.handle)
RotasSetor.patch('/:id', verificarToken, verificarNivelAcesso, controllerEditarSetor.handle)
RotasSetor.delete('/:id', verificarToken, verificarNivelAcesso, controllerInativarSetor.handle)
RotasSetor.get('/:id', verificarToken, verificarNivelAcesso, controllerResgatarSetor.handle)
RotasSetor.get('/', verificarToken, verificarNivelAcesso, controllerResgatarTodosSetores.handle)

export { RotasSetor };

