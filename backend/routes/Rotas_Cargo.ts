import { Router } from "express";
import { ControllerAlterarPermissoesCargo } from "../controllers/Cargo/Controller_Alterar_Permissoes_Cargo";
import { ControllerResgatarCargo } from "../controllers/Cargo/Controller_Resgatar_Cargo";

const RotasCargo = Router()
const controllerAlterarPermissoesCargo = new ControllerAlterarPermissoesCargo()
const controllerResgatarCargo = new ControllerResgatarCargo()


RotasCargo.patch('/:id', controllerAlterarPermissoesCargo.handle)
RotasCargo.get('/:id', controllerResgatarCargo.handle)

export { RotasCargo };

