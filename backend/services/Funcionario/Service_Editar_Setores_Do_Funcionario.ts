import { prisma } from '../../utils/db.server'
interface ISetor {
  setores: { id: number }[]
}

class ServiceEditarSetoresFuncionario {
  async execute(id: string, { setores }: ISetor): Promise<any> {
    if (id && setores.length > 0) {
      await prisma.funcionario.update({
        where: { id: id },
        data: {
          setores: {
            set: []
          }
        }
      })
      const funcionario = await prisma.funcionario.update({
        where: { id: id },
        data: {
          setores: {
            set: setores.map(setor => ({
              setorId_funcionarioId: {
                funcionarioId: id,
                setorId: setor.id
              }
            }))
          }
        }
      })
      return funcionario
    }
    return null
  }
}

export { ServiceEditarSetoresFuncionario }