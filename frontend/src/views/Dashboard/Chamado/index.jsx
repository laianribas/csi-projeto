// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react'
import { dashboardTableData2 } from 'variables/general'
import TodosChamados from './components/TodosChamados'
// assets
// Custom icons

export default function Dashboard() {
  // Chakra Color Mode

  const iconBoxInside = useColorModeValue('white', 'white')

  return (
    <Flex flexDirection="column" pt={{ base: '120px', md: '75px' }}>
      <TodosChamados
        title={'Chamados Recentes'}
        amount={30}
        captions={['Id', 'Área', 'Setor', 'Status', 'Ações']}
        data={dashboardTableData2}
      />
    </Flex>
  )
}
