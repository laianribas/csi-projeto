import { prisma } from '../../utils/db.server'
class ServiceResgatarFuncionario {
  async execute(id: string): Promise<any> {
    if (id) {
      const funcionario = await prisma.funcionario.findUnique({
        where: {
          id: id
        },
        include: {
          chamados: {
            select: {
              area: true,
              descricao: true,
              destinatario: true,
              setor: true,
              tombo: true,
              status: {
                select: {
                  createdAt: true,
                  status: true
                }
              }
            }
          },
          setores: {
            select: {
              setor: true
            }
          },
          cargo: {
            select: {
              nome: true,
              permissoes: {
                select: {
                  permissao: {
                    select: {
                      id: true,
                      descricao: true
                    }
                  }
                }
              }
            }
          }
        }
      })
      return funcionario
    }
    return null
  }
}

export { ServiceResgatarFuncionario };
