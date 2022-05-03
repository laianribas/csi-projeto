import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world@!!')
})
app.listen(3000, () =>
  console.log('REST API rodando: http://localhost:3000'),
)