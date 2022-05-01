import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

async function main() {
  await prisma.setor.create({
    data: {
      nome: 'prisma2',
      ramal: 'teste2',
      descricao: 'teste2',
    },
  })

  const todosSetores = await prisma.setor.findMany()
  todosSetores.map(setor => {
    console.log(setor.id)
  })
  const funcionarioCriado = await prisma.funcionario.create({
    data: {
      nome: 'Rodrigo',
      nivel_acesso: 'funcionario',
      campus: 'Jequié',
      login: 'bau123',
      senha: 'bau123',
      primeiro_acesso: true,
      setores: {
        create: todosSetores.map(setorAux => ({
          setor: {
            connect: {
              id: setorAux.id
            }
          }
        }))
      }
    },
  })

  const funcionario = await prisma.funcionario.findMany({ include: { setores: true } })
  console.log(await prisma.setor.count())
  console.dir(todosSetores, { depth: null })
  console.log(await prisma.funcionario.count())
  console.dir(funcionario, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

app.listen(3000, () =>
  console.log('REST API rodando: http://localhost:3000'),
)