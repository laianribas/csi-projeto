import AccountCircle from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Error from '@mui/icons-material/Error';
import Warning from '@mui/icons-material/Warning';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, Button, Divider, List, ListItemButton, Popover, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../helpers/api';
import SideMenu from './SideMenu';

const ScrollableList = styled(List)(({ theme }) => ({
  maxHeight: '250px',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.default,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.primary.main,
    borderRadius: '8px',
  },
  scrollBehavior: 'smooth',
  '-webkit-overflow-scrolling': 'touch',
}));

interface HeaderProps {
  onToggleTheme: () => void;
  isDarkMode: boolean;
  systemStatus: 'ok' | 'warning' | 'error';
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme, isDarkMode, systemStatus = 'ok' }) => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const navigate = useNavigate()


  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleNotificationsClick = () => {
    setShowNotifications(true);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const handleMenuClickAway = () => {
    setOpenMenu(false);
  };

  const handleAccountClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    api.post('logout').then((response) => {
      return response.data
    })

    navigate('/');
    window.location.reload();
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'account-popover' : undefined;

  const ThemeIcon = isDarkMode ? Brightness7Icon : Brightness4Icon;

  const notifications: string[] = [
    'Notificação 1',
    'Notificação 2',
    'Notificação 3',
    'Notificação 4',
    'Notificação 4',
    'Notificação 4',
    'Notificação 4',
    'Notificação 4',
    'Notificação 4',
    // Adicione mais notificações aqui
  ];

  const statusIcon =
    systemStatus === 'ok' ? <CheckCircle style={{ color: 'green' }} /> :
      systemStatus === 'warning' ? <Warning style={{ color: 'yellow' }} /> :
        systemStatus === 'error' ? <Error style={{ color: 'red' }} /> :
          null;

  return (
    <AppBar position="fixed">
      <ClickAwayListener onClickAway={handleMenuClickAway}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <IconButton color="inherit">
            {statusIcon}
          </IconButton>
          <IconButton color="inherit" onClick={onToggleTheme}>
            <ThemeIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleNotificationsClick} ref={anchorRef}>
            <Badge badgeContent={notifications.length} color="warning">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Popover
            open={showNotifications}
            anchorEl={anchorRef.current}
            onClose={handleCloseNotifications}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <ScrollableList>
              {notifications.map((notification, index) => (
                <React.Fragment key={index}>
                  <ListItemButton component={Button}>{notification}</ListItemButton>
                  {index !== notifications.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </ScrollableList>
          </Popover>
          <IconButton color="inherit" onClick={handleAccountClick}>
            <AccountCircle />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Button onClick={handleLogout}>Sair</Button>
            </Box>
          </Popover>
        </Toolbar>
      </ClickAwayListener>
      <SideMenu open={openMenu} onClose={toggleMenu} />
    </AppBar>
  );
};

export default Header;
