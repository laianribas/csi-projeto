import { PrismaClient } from "@prisma/client";

interface ISetor {
  setores: { id: number }[]
}

class ServiceEditarSetoresFuncionario {
  async execute(id: string, { setores }: ISetor): Promise<any> {
    if (id && setores.length > 0) {
      const prisma = new PrismaClient()
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