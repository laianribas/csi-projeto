import express from 'express'
import { RotasChamado } from '../routes/Rotas_Chamado'
import { RotasFuncionario } from '../routes/Rotas_Funcionario'
import { RotasSetor } from '../routes/Rotas_Setor'
import { RotaLogin } from '../routes/Rota_login'
import { RotasCargo } from '../routes/Rotas_Cargo'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', RotaLogin)
app.use('/chamado', RotasChamado)
app.use('/funcionario', RotasFuncionario)
app.use('/setor', RotasSetor)
app.use('/cargo', RotasCargo)

app.listen(3000, () =>
  console.log('REST API rodando: http://localhost:3000'),
)