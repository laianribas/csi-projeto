// Chakra imports
import { Flex } from '@chakra-ui/react'
import { funconarioData } from 'variables/general'
import TabelaFuncionarios from './components/TabelaFuncionarios'
// Assets

function Funcionario() {
  return (
    <Flex direction="column" pt={{ base: '120px', md: '75px' }}>
      <TabelaFuncionarios
        title={'Funcionarios'}
        captions={['Nome', 'Cargo', 'Setor', 'Campus', 'Status', 'Ações']}
        data={funconarioData}
      />
    </Flex>
  )
}

export default Funcionario
