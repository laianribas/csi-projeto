import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import CallsTable, { TableColumn } from '../components/CallsTable';
import LineChartComponent, { DataLineChart } from '../components/LineChartComponent';
import PageTitle from '../components/PageTitle';
import PieChartComponent from '../components/PieChartComponent';
import StatisticsCard from '../components/StatisticsCard';

interface CardData {
  title: string;
  count: number;
}

interface DataPieChart {
  setor: string;
  chamados: number;
}

interface Call {
  id: number;
  number: string;
  openingDate: string;
  status: string;
  responsible: string;
}


const cardData: CardData[] = [
  { title: 'Em Aberto', count: 12 },
  { title: 'Em Andamento', count: 8 },
  { title: 'Concluídos', count: 20 },
  { title: 'Cancelados', count: 5 },
];

const dataPieChart: DataPieChart[] = [
  { setor: 'Setor A', chamados: 50 },
  { setor: 'Setor B', chamados: 30 },
  { setor: 'Setor C', chamados: 20 },
  { setor: 'Setor D', chamados: 10 },
];

const dataLineChart: DataLineChart[] = [
  { mes: 'jan', 'Setor A': 50, 'Setor B': 30, 'Setor C': 20, 'Setor D': 10 },
  { mes: 'fev', 'Setor A': 40, 'Setor B': 20, 'Setor C': 10, 'Setor D': 5 },
  { mes: 'mar', 'Setor A': 30, 'Setor B': 10, 'Setor C': 5, 'Setor D': 2 },
  { mes: 'abr', 'Setor A': 20, 'Setor B': 5, 'Setor C': 2, 'Setor D': 1 },
];

const dataTickets: Call[] = [
  {
    id: 1,
    number: 'CHM-001',
    openingDate: '01/06/2023',
    status: 'Em Aberto',
    responsible: 'João Silva',

  },
  {
    id: 2,
    number: 'CHM-002',
    openingDate: '02/06/2023',
    status: 'Em Andamento',
    responsible: 'Maria Santos',

  },
  {
    id: 3,
    number: 'CHM-003',
    openingDate: '03/06/2023',
    status: 'Concluído',
    responsible: 'Pedro Oliveira',

  },
  {
    id: 3,
    number: 'CHM-004',
    openingDate: '04/06/2023',
    status: 'Cancelado',
    responsible: 'Pedro Oliveira',

  },
  // Adicione mais objetos de chamados aqui
];

const columns: TableColumn[] = [
  { id: 'number', label: 'Número do Chamado' },
  { id: 'openingDate', label: 'Data de Abertura' },
  { id: 'status', label: 'Status' },
  { id: 'responsible', label: 'Responsável' },
];

const Home: React.FC = () => {
  const isMediumScreen = useMediaQuery('(min-width: 960px)');

  return (
    <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
      <PageTitle text="Dashboard" />
      <Typography variant="h6" gutterBottom display={isMediumScreen ? 'initial' : 'flex'} justifyContent="center">
        Chamados
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {cardData.map((data, index) => (
          <Grid item xs={3} key={index}>
            <Box>
              <StatisticsCard title={data.title} count={data.count} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={{ xs: 1, md: 2 }} sx={{ pt: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom display={isMediumScreen ? 'initial' : 'flex'} justifyContent="center">
            Chamados por Setor
          </Typography>
          <PieChartComponent data={dataPieChart} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom display={isMediumScreen ? 'initial' : 'flex'} justifyContent="center">
            Evolução dos Chamados por Setor
          </Typography>
          <LineChartComponent data={dataLineChart} />
        </Grid>
      </Grid>
      <Grid sx={{ pt: 3 }} justifyContent="center">
        <Typography variant="h6" gutterBottom display={isMediumScreen ? 'initial' : 'flex'} justifyContent="center">
          Chamados Recentes
        </Typography>
        <CallsTable
          columns={columns}
          calls={dataTickets}
        />

      </Grid>
    </Container>
  );
};

export default Home;
