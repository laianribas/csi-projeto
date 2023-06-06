import { Paper } from '@mui/material';
import React from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

interface DataItem {
  setor: string;
  chamados: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface PieChartComponentProps {
  data: DataItem[];
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  return (
    <Paper sx={{ p: 2, display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="chamados"
          nameKey="setor"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
        <Tooltip />
      </PieChart>
    </Paper>
  );
};

export default PieChartComponent;
