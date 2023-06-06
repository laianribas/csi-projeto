import { Paper } from '@mui/material';
import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export interface DataLineChart {
  mes: string;
  [setor: string]: number | string;
}


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface LineChartComponentProps {
  data: DataLineChart[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  return (
    <Paper sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="90%" height={300}>
          <LineChart width={700} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Object.keys(data[0])
              .filter((key) => key !== 'mes')
              .map((setor, index) => (
                <Line
                  key={`line-${index}`}
                  type="monotone"
                  dataKey={setor}
                  stroke={COLORS[index % COLORS.length]}
                />
              ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

export default LineChartComponent;
