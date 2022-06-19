// Chakra imports
import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue
} from '@chakra-ui/react'
// Custom components
import Card from 'components/Card/Card.js'
import CardBody from 'components/Card/CardBody.js'
import IconBox from 'components/Icons/IconBox'
import React from 'react'

const MiniStatistics = ({ title, amount, percentage, icon }) => {
  const iconTeal = useColorModeValue('purple.300', 'purple.300')
  const textColor = useColorModeValue('gray.700', 'white')

  return (
    <Card minH="110px">
      <CardBody>
        <Flex
          flexDirection="row"
          align="self-end"
          justify="center"
          w="100%"
          h="100%"
        >
          <Stat me="auto">
            <StatLabel
              fontSize="lg"
              color="gray.500"
              fontWeight="bold"
              pb=".1rem"
            >
              {title}
            </StatLabel>
            <Flex>
              <StatNumber fontSize="lg" color={textColor}>
                {amount}
              </StatNumber>
            </Flex>
          </Stat>
          <IconBox as="box" h={'60px'} w={'60px'} bg={iconTeal}>
            {icon}
          </IconBox>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default MiniStatistics
