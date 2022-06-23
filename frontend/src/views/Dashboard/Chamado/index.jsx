// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react'
// assets
// Custom icons

export default function Dashboard() {
  // Chakra Color Mode

  const iconBoxInside = useColorModeValue('white', 'white')

  return (
    <Flex flexDirection="column" pt={{ base: '120px', md: '75px' }}>
      Criar view Chamados
    </Flex>
  )
}
