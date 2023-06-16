import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';

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
      }),
    [isDarkMode],
  );

  const location = useLocation();
  const shouldShowHeader = location.pathname !== '/';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {shouldShowHeader && (
        <Header onToggleTheme={handleThemeToggle} isDarkMode={isDarkMode} systemStatus='ok' />
      )}
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
