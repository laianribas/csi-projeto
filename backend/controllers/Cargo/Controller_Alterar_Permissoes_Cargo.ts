import { Request, Response } from "express";
import { ServiceAlterarPermissoesCargo } from "../../services/Cargo/service_Alterar_Permissoes_Cargo";


class ControllerAlterarPermissoesCargo {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { permissoes } = request.body
    if (!permissoes) {
      return response.status(400).json({
        message: 'As permissões devem ser informadas!'
      })
    }
    try {
      const serviceAlterarPermissoesCargo = new ServiceAlterarPermissoesCargo()
      const Cargo = await serviceAlterarPermissoesCargo.execute(parseInt(id), permissoes)
      if (Cargo) {
        return response.status(200).json({ Cargo: Cargo })
      } else {
        return response.status(400).json({ error: 'Sintaxe inválida!' })
      }
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }
}

export { ControllerAlterarPermissoesCargo }