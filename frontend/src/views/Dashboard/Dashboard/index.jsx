// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
// assets
import peopleImage from 'assets/img/people-image.png'
import logoChakra from 'assets/svg/logo-white.svg'
import BarChart from 'components/Charts/BarChart'
import LineChart from 'components/Charts/LineChart'
// Custom icons
import { SupportIcon, PersonIcon, CreditIcon } from 'components/Icons/Icons.js'
import React from 'react'
import { dashboardTableData, timelineData } from 'variables/general'
import ActiveUsers from './components/ActiveUsers'
import BuiltByDevelopers from './components/BuiltByDevelopers'
import MiniStatistics from './components/MiniStatistics'
import OrdersOverview from './components/OrdersOverview'
import Projects from './components/Projects'
import SalesOverview from './components/SalesOverview'
import WorkWithTheRockets from './components/WorkWithTheRockets'

export default function Dashboard() {
  const iconBoxInside = useColorModeValue('white', 'white')

  return (
    <Flex flexDirection="column" pt={{ base: '120px', md: '75px' }}>
      <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing="18px">
        <MiniStatistics
          title={'Setores'}
          amount={'18'}
          icon={<CreditIcon h={'24px'} w={'24px'} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={'Funcionários'}
          amount={'120'}
          icon={<PersonIcon h={'24px'} w={'24px'} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={'Chamados'}
          amount={'50'}
          icon={<SupportIcon h={'24px'} w={'24px'} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ sm: '1fr', lg: '1.3fr 1.7fr' }}
        templateRows={{ sm: 'repeat(2, 1fr)', lg: '1fr' }}
        gap="24px"
        mb={{ lg: '26px' }}
        mt={{ lg: '26px' }}
      >
        <ActiveUsers
          title={'Active Users'}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={'Sales Overview'}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }}
        templateRows={{ sm: '1fr auto', md: '1fr', lg: '1fr' }}
        gap="24px"
      >
        <Projects
          title={'Projects'}
          amount={30}
          captions={['Companies', 'Members', 'Budget', 'Completion']}
          data={dashboardTableData}
        />
        <OrdersOverview
          title={'Orders Overview'}
          amount={30}
          data={timelineData}
        />
      </Grid>
    </Flex>
  )
}
