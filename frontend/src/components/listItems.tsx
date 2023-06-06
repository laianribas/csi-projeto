import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { to: '/', icon: <DashboardIcon />, text: 'Início' },
  { to: '/calls', icon: <AssignmentIcon />, text: 'Chamado' },
  { to: '/department', icon: <LayersIcon />, text: 'Setor' },
  { to: '/employee', icon: <PeopleIcon />, text: 'Funcionário' },
  { to: '/permission', icon: <BarChartIcon />, text: 'Permissão' },
];

export const mainListItems = (
  <>
    {menuItems.map((item, index) => (
      <ListItemButton key={index} component={Link} to={item.to}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    ))}
  </>
);


export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Relatórios de Chamados
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Chamados Abertos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Chamados Concluídos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Chamados Cancelados" />
    </ListItemButton>
  </>
);