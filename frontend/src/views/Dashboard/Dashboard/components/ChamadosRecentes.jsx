// Chakra imports
import {
  Flex,
  Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from '@chakra-ui/react'
// Custom components
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import { SearchBar } from 'components/Navbars/SearchBar/SearchBar'
import ChamadoTableRow from 'components/Tables/ChamadoTableRow'
import React from 'react'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'

const ChamadosRecentes = ({ title, amount, captions, data }) => {
  const textColor = useColorModeValue('gray.700', 'white')

  return (
    <>
      <Card p="16px" overflowX={{ sm: 'scroll', xl: 'hidden' }}>
        <CardHeader p="12px 0px 28px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              {title}
            </Text>
            <Flex align="center">
              <Icon
                as={IoCheckmarkDoneCircleSharp}
                color="teal.300"
                w={4}
                h={4}
                pe="3px"
              />
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                <Text fontWeight="bold" as="span">
                  {amount}
                </Text>{' '}
                esse mês.
              </Text>
            </Flex>
          </Flex>
        </CardHeader>
        <Table
          variant="striped"
          color={textColor}
          size="sm"
          colorScheme="purple"
        >
          <Thead>
            <Tr my=".8rem" ps="0px">
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? '10px' : null}>
                    {caption}
                  </Th>
                )
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <ChamadoTableRow
                  key={row.id}
                  id={row.id}
                  area={row.area}
                  setor={row.setor}
                  status={row.status}
                />
              )
            })}
          </Tbody>
        </Table>
      </Card>
    </>
  )
}

export default ChamadosRecentes
