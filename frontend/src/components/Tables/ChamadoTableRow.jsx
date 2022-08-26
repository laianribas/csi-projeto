import {
  Flex,
  IconButton,
  Td,
  Text,
  Tr,
  useColorModeValue
} from '@chakra-ui/react'

import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

function ChamadoTableRow(props) {
  const { id, area, setor, status } = props
  const textColor = useColorModeValue('gray.700', 'white')
  return (
    <Tr>
      <Td minWidth={{ sm: '150px' }} pl="10px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {id}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {area}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {setor}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {status}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          <IconButton
            variant="outline"
            colorScheme="yellow"
            fontSize="20px"
            icon={<EditIcon />}
          />
        </Text>
      </Td>
    </Tr>
  )
}

export default ChamadoTableRow
