import { PrismaClient } from '@prisma/client'
import express from 'express'
import { RotasChamado } from '../routes/Rotas_Chamado'
import { RotasFuncionario } from '../routes/Rotas_Funcionario'
import { RotasSetor } from '../routes/Rotas_Setor'
import { RotaLogin } from '../routes/Rota_login'

const prisma = new PrismaClient()
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
  const setores = await prisma.setor.findMany()
  const funcionarios = await prisma.funcionario.findMany({ include: { setores: true } })
  res.status(201).json({ setores, funcionarios })
})

app.use('/', RotaLogin)
app.use('/chamado', RotasChamado)
app.use('/funcionario', RotasFuncionario)
app.use('/setor', RotasSetor)

app.listen(3000, () =>
  console.log('REST API rodando: http://localhost:3000'),
)