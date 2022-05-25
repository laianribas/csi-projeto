import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  const setor = await prisma.setor.create({
    data: {
      nome: 'DCE',
      ativo: true,
      descricao: 'Departamento de Ciências Exatas',
      ramal: '156165789'
    }
  })
  const status = await prisma.status.create({
    data: {
      descricao: 'Em aberto'
    }
  })
  console.log(setor, status)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })