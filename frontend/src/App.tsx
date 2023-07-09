import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/system';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';

const ScrollablePage = styled('div')(({ theme }) => ({
  maxHeight: '100vh',
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

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(() => {
    const storedPreference = localStorage.getItem('themePreference');
    return storedPreference ? JSON.parse(storedPreference) : prefersDarkMode;
  });

  const handleThemeToggle = () => {
    const updatedPreference = !isDarkMode;
    setIsDarkMode(updatedPreference);
    localStorage.setItem('themePreference', JSON.stringify(updatedPreference));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
        },
        typography: {
          fontSize: 16
        }
      }),
    [isDarkMode],
  );

  const location = useLocation();
  const shouldShowHeader = location.pathname !== '/';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollablePage>
        {shouldShowHeader && (
          <Header onToggleTheme={handleThemeToggle} isDarkMode={isDarkMode} systemStatus='ok' />
        )}
        <AppRoutes />
      </ScrollablePage>
    </ThemeProvider>
  );
}

export default App;
