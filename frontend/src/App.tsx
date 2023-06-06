import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import AppRoutes from './AppRoutes';
import Header from './components/Header';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(prefersDarkMode);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode],
  );

  React.useEffect(() => {
    setIsDarkMode(theme.palette.mode === 'dark');
  }, [theme.palette.mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onToggleTheme={handleThemeToggle} isDarkMode={isDarkMode} systemStatus='ok' />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
