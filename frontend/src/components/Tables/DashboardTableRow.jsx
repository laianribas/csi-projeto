import {
  Flex,
  IconButton,
  Td,
  Text,
  Tr,
  useColorModeValue
} from '@chakra-ui/react'

import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

function DashboardTableRow(props) {
  const { id, area, setor, status } = props
  const textColor = useColorModeValue('gray.700', 'white')
  return (
    <Tr>
      <Td minWidth={{ sm: '150px' }} pl="0px">
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
            marginRight={'5px'}
            variant="outline"
            colorScheme="yellow"
            fontSize="20px"
            icon={<EditIcon />}
          />
          <IconButton
            variant="outline"
            colorScheme="red"
            fontSize="20px"
            icon={<DeleteIcon />}
          />
        </Text>
      </Td>
    </Tr>
  )
}

export default DashboardTableRow
