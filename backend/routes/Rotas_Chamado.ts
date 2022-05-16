import { Router } from "express";
import { ControllerCadastrarChamado } from "../controllers/Chamado/Controller_Cadastrar_Chamado";
import { ControllerChamadoPorFuncionario } from "../controllers/Chamado/Controller_Chamado_Por_Funcionario";
import { ControllerEditarChamado } from "../controllers/Chamado/Controller_Editar_Chamado";
import { ControllerEditarStatusChamado } from "../controllers/Chamado/Controller_Editar_Status_Chamado";
import { ControllerResgatarChamado } from "../controllers/Chamado/Controller_Resgatar_Chamado";
import { ControllerResgatarTodosChamados } from "../controllers/Chamado/Controller_Resgatar_Todos_Chamados";
import { verificarToken } from "../middlewares/verificarToken";

//Fazer rota de chamados pelo funcionário logado
const RotasChamado = Router()
const controllerCadastrarChamado = new ControllerCadastrarChamado()
const controllerChamadoPorFuncionario = new ControllerChamadoPorFuncionario()
const controllerEditarChamado = new ControllerEditarChamado()
const controllerEditarStatusChamado = new ControllerEditarStatusChamado()
const controllerResgatarTodosChamados = new ControllerResgatarTodosChamados()
const controllerResgatarChamado = new ControllerResgatarChamado()

RotasChamado.post('/', verificarToken, controllerCadastrarChamado.handle)
RotasChamado.get('/meuschamados', verificarToken, controllerChamadoPorFuncionario.handle)
RotasChamado.patch('/:id', verificarToken, controllerEditarChamado.handle)
RotasChamado.patch('/status/:id', verificarToken, controllerEditarStatusChamado.handle)
RotasChamado.get('/:id', verificarToken, controllerResgatarChamado.handle)
RotasChamado.get('/', verificarToken, controllerResgatarTodosChamados.handle)

export { RotasChamado };

