import { Button, CircularProgress, Container, Grid, TextField, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoDark from '../assets/images/vector/default-monochrome-white.svg';
import LogoLight from '../assets/images/vector/default-monochrome.svg';
import CustomSnackbar from '../components/CustomSnackbar';
import { UserContext } from '../context/UserProvider';
import api from '../helpers/api';

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'error' | 'success' | 'info' | 'warning'>('error');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { updateUser } = useContext(UserContext);
  const theme = useTheme();
  const logoColor = theme.palette.mode === 'dark' ? LogoDark : LogoLight;

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    api
      .post('login', { login, password })
      .then((response) => {
        const token = response.data.token.token;

        localStorage.setItem('token', token);

        api
          .get('currentuser', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const user = response.data;
            updateUser(user);
            navigate('/home');
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
            setSnackbarSeverity('error');
            setSnackbarMessage('Não foi possível obter os dados do usuário.');
            setShowSnackbar(true);
          });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setSnackbarSeverity('error');
        setSnackbarMessage('Credenciais inválidas.');
        setShowSnackbar(true);
      });
    setLogin('');
    setPassword('');
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Container disableGutters sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '60vw',
          height: '70vh',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <Grid item xs={8} sx={{ height: '100%', overflow: 'hidden' }}>
          <Box
            sx={{
              height: '100%',
              backgroundImage: `url(${logoColor})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              mx: 3
            }}
          />
        </Grid>
        <Grid item xs={4} sx={{ p: 3 }} style={{ height: '100%', overflow: 'hidden', backgroundColor: theme.palette.mode === 'dark' ? '#272727' : '#f7f7f7' }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',

            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Usuário" type="text" value={login} onChange={handleLoginChange} required />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth disabled={loading}>
                    {loading ? <CircularProgress color="inherit" size={24} /> : 'Login'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
      <CustomSnackbar
        open={showSnackbar}
        onClose={handleCloseSnackbar}
        severity={snackbarSeverity}
        message={snackbarMessage}
      />
    </Container>
  );
}
