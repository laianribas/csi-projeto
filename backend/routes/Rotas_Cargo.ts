import { Router } from "express";
import { ControllerAlterarPermissoesCargo } from "../controllers/Cargo/Controller_Alterar_Permissoes_Cargo";
import { ControllerResgatarCargo } from "../controllers/Cargo/Controller_Resgatar_Cargo";
import { ControllerResgatarTodosCargos } from "../controllers/Cargo/Controller_Resgatar_Todos_Cargos";

const RotasCargo = Router()
const controllerAlterarPermissoesCargo = new ControllerAlterarPermissoesCargo()
const controllerResgatarCargo = new ControllerResgatarCargo()
const controllerResgatarTodosCargos = new ControllerResgatarTodosCargos()


RotasCargo.patch('/:id', controllerAlterarPermissoesCargo.handle)
RotasCargo.get('/:id', controllerResgatarCargo.handle)
RotasCargo.get('/', controllerResgatarTodosCargos.handle)

export { RotasCargo };

