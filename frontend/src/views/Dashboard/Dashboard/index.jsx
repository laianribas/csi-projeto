// Chakra imports
import { Flex, Grid, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
// assets
import LineChart from 'components/Charts/LineChart'
import PieChart from 'components/Charts/PieChart'
// Custom icons
import { CreditIcon, PersonIcon, SupportIcon } from 'components/Icons/Icons.js'
import { dashboardTableData } from 'variables/general'
import ChamadosSetor from './components/ChamadosSetor'
import CardInfo from './components/CardInfo'
import ChamadosRecentes from './components/ChamadosRecentes'
import ChamadosMensais from './components/ChamadosMensais'

export default function Dashboard() {
  const iconBoxInside = useColorModeValue('white', 'white')

  return (
    <Flex flexDirection="column" pt={{ base: '120px', md: '75px' }}>
      <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing="18px">
        <CardInfo
          title={'Setores'}
          amount={'18'}
          icon={<CreditIcon h={'24px'} w={'24px'} color={iconBoxInside} />}
        />
        <CardInfo
          title={'Funcionários'}
          amount={'120'}
          icon={<PersonIcon h={'24px'} w={'24px'} color={iconBoxInside} />}
        />
        <CardInfo
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
        <ChamadosSetor
          title={'Total de chamados de cada setor'}
          chart={<PieChart />}
        />
        <ChamadosMensais
          title={'Chamados mensais por setor'}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: '1fr', md: '1fr', lg: '1fr' }}
        templateRows={{ sm: '1fr', md: '1fr', lg: '1fr' }}
        gap="24px"
      >
        <ChamadosRecentes
          title={'Chamados Recentes'}
          amount={30}
          captions={['Companies', 'Members', 'Budget', 'Completion']}
          data={dashboardTableData}
        />
        {/* <OrdersOverview
          title={'Orders Overview'}
          amount={30}
          data={timelineData}
        /> */}
      </Grid>
    </Flex>
  )
}
