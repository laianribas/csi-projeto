/*eslint-disable*/
import React from 'react'
import { Flex, Link, List, ListItem, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");
  return (
    <Flex
      flexDirection={{
        base: 'column',
        xl: 'row'
      }}
      alignItems={{
        base: 'center',
        xl: 'start'
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: 'center',
          xl: 'start'
        }}
        mb={{ base: '20px', xl: '0px' }}
      >
        &copy; {1900 + new Date().getYear()}, <Text as="span">made by </Text>
        <Link
          // color={linkTeal}
          color="purple.600"
          href="https://github.com/laianribas"
          target="_blank"
        >
          Laian Ribas{' '}
        </Link>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: '20px',
            md: '44px'
          }}
        >
          <Link color="gray.400" href="https://www.creative-tim.com">
            Creative Tim
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px'
          }}
        >
          <Link color="gray.400" href="https://www.simmmple.com">
            Simmmple
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px'
          }}
        >
          <Link color="gray.400" href="https://creative-tim.com/blog">
            Blog{' '}
          </Link>
        </ListItem>
        <ListItem>
          <Link color="gray.400" href="https://www.creative-tim.com/license">
            License{' '}
          </Link>
        </ListItem>
      </List>
    </Flex>
  )
}
