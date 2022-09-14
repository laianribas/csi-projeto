import {
  Badge,
  Flex,
  IconButton,
  Td,
  Text,
  Tr,
  useColorModeValue
} from '@chakra-ui/react'

import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'

function FuncionarioTableRow(props) {
  const { nome, cargo, setor, campus, status } = props
  const textColor = useColorModeValue('gray.700', 'white')
  return (
    <Tr>
      <Td minWidth={{ sm: '150px' }} pl="10px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {nome}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {cargo}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {setor}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {campus}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {status ? (
            <Badge variant="solid" colorScheme="green" fontSize=".8em">
              ATIVO
            </Badge>
          ) : (
            <Badge variant="solid" colorScheme="red" fontSize=".8em">
              INATIVO
            </Badge>
          )}
        </Text>
      </Td>
      <Td>
        <Flex direction={'row'}>
          <Text fontSize="md" color={textColor} fontWeight="bold" pr=".5rem">
            <IconButton
              variant="outline"
              colorScheme="blue"
              fontSize="20px"
              icon={<ViewIcon />}
            />
          </Text>
          <Text fontSize="md" color={textColor} fontWeight="bold" pr=".5rem">
            <IconButton
              variant="outline"
              colorScheme="yellow"
              fontSize="20px"
              icon={<EditIcon />}
            />
          </Text>
          <Text fontSize="md" color={textColor} fontWeight="bold" pr=".5rem">
            <IconButton
              variant="outline"
              colorScheme="red"
              fontSize="20px"
              icon={<DeleteIcon />}
            />
          </Text>
        </Flex>
      </Td>
    </Tr>
  )
}

export default FuncionarioTableRow
