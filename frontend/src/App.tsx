import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import { UserContext } from './context/UserProvider';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserContext.Consumer>
        {({ user }) =>
          user ? (
            <>
              <Header onToggleTheme={handleThemeToggle} isDarkMode={isDarkMode} systemStatus="ok" />
            </>
          ) : null
        }
      </UserContext.Consumer>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
