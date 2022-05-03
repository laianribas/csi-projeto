import { PrismaClient } from '@prisma/client'
import express from 'express'
import { RotasFuncionario } from '../routes/Rotas_Funcionario'

const prisma = new PrismaClient()
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
  const setores = await prisma.setor.findMany()
  res.status(201).json({ message: 'setores:', setores })
})
app.use('/funcionario', RotasFuncionario)

app.listen(3000, () =>
  console.log('REST API rodando: http://localhost:3000'),
)