import 'dotenv/config';
import { SHA512 } from "../helpers/sha512";
import { prisma } from '../utils/db.server';

async function main() {
  const cargos = [
    { id: 1, nome: 'Coordenador' },
    { id: 2, nome: 'Suporte' },
    { id: 3, nome: 'Secretario' },
    { id: 4, nome: 'Redes' },
    { id: 5, nome: 'Manutenção' }
  ]
  const permissoes = [
    { id: 1, descricao: 'Cadastrar chamado' },
    { id: 2, descricao: 'Chamado por campus' },
    { id: 3, descricao: 'Chamado por funcionário' },
    { id: 4, descricao: 'Chamado por setor' },
    { id: 5, descricao: 'Editar chamado' },
    { id: 6, descricao: 'Editar status chamado' },
    { id: 7, descricao: 'Resgatar chamado' },
    { id: 8, descricao: 'Resgatar todos chamados' },
    { id: 9, descricao: 'Cadastrar funcionário' },
    { id: 10, descricao: 'Editar funcionário' },
    { id: 11, descricao: 'Inativar funcionário' },
    { id: 12, descricao: 'Resgatar funcionário' },
    { id: 13, descricao: 'Resgatar todos funcionários' },
    { id: 14, descricao: 'Cadastrar setor' },
    { id: 15, descricao: 'Editar setor' },
    { id: 16, descricao: 'Resgatar setor' },
    { id: 17, descricao: 'Inativar setor' },
    { id: 18, descricao: 'Resgatar todos setores' },
  ]
  // const cargos_criados = await Promise.all(cargos.map(async (cargo) => {
  //   return await prisma.cargo.create({
  //     data: cargo
  //   })
  // }))
  const senha = SHA512('admin', process.env.SECRET_KEY as string).hash2
  const admin = await prisma.funcionario.create({
    data: {
      campus: 'jequié',
      login: 'admin',
      nome: 'admin',
      senha: senha,
      ativo: true,
      cargoId: 1,
      primeiro_acesso: true,
    }
  })
  const status = await prisma.status.create({
    data: {
      descricao: 'Em Aberto'
    }
  })
  const permissoes_criadas = await Promise.all(permissoes.map(async permissao => {
    return await prisma.permissao.create({
      data: {
        id: permissao.id,
        descricao: permissao.descricao
      }
    })
  }))
  const permissoes_coordenador = await prisma.cargo.update({
    where: {
      id: 1
    },
    data: {
      permissao: {
        create: permissoes_criadas.map(permissao => ({
          permissao: {
            connect: {
              id: permissao.id
            }
          }
        }))
      }
    },
    include: {
      permissao: true
    }
  })
  console.log(admin, permissoes_criadas, permissoes_coordenador)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })