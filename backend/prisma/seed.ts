import { PrismaClient } from "@prisma/client";
import 'dotenv/config';
import { SHA512 } from "../helpers/sha512";

const prisma = new PrismaClient()
async function main() {
  const cargos = ['Coordenador', 'Suporte', 'Secretario', 'Redes', 'Manutenção']
  const cargos_criados = await Promise.all(cargos.map(async cargo => {
    return await prisma.cargo.create({
      data: {
        nome: cargo
      }
    })
  }))
  const senha = SHA512('admin', process.env.SECRET_KEY as string).hash2
  const admin = await prisma.funcionario.create({
    data: {
      campus: 'jequié',
      login: 'admin',
      nome: 'admin',
      senha: senha,
      ativo: true,
      cargoId: 3,
      primeiro_acesso: true,
    }
  })
  const status = await prisma.status.create({
    data: {
      descricao: 'Em Aberto'
    }
  })
  console.log(cargos_criados, admin)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })