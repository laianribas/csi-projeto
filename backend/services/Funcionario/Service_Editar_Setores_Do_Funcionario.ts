import { prisma } from '../../utils/db.server'
interface ISetor {
  setores: { id: number }[]
}

class ServiceEditarSetoresFuncionario {
  async execute(id: string, { setores }: ISetor): Promise<any> {
    console.log(id, setores)
    if (id && setores) {
      const funcionario = await prisma.funcionario.update({
        where: { id: id },
        data: {
          setores: {
            deleteMany: {},
            create: setores.map(setorId => ({
              setor: {
                connect: {
                  id: setorId.id
                }
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