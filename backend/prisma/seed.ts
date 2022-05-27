import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
async function main() {
  // const setor = await prisma.setor.create({
  //   data: {
  //     nome: 'DCE',
  //     ativo: true,
  //     descricao: 'Departamento de Ciências Exatas',
  //     ramal: '156165789'
  //   }
  // })
  // const status = await prisma.status.create({
  //   data: {
  //     descricao: 'Em aberto'
  //   }
  // })
  // console.log(setor, status)
  const cargos = ['Coordenador', 'Suporte', 'Secretario', 'Redes', 'Manutenção']
  const cargos_criados = await Promise.all(cargos.map(async cargo => {
    return await prisma.cargo.create({
      data: {
        nome: cargo
      }
    })
  }))
  console.log(cargos_criados)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })