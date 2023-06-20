import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    // Enviar a requisição de login para a API
    api
      .post('login', { login, password })
      .then((response) => {
        // Manipular a resposta da API
        console.log(response.data);
        const token = response.data.token.token;

        // Armazena o token no localStorage
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
        // Lide com erros da API
        console.error(error);
        setLoading(false);
        setSnackbarSeverity('error');
        setSnackbarMessage('Credenciais inválidas.');
        setShowSnackbar(true);
      });

    // Limpar os campos do formulário
    setLogin('');
    setPassword('');
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
        <Box
          sx={{
            boxShadow: 3,
            width: '500px',
            height: '400px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box></Box>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Login"
                    type="text"
                    value={login}
                    onChange={handleLoginChange}
                    required
                  />
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
          </Grid>
        </Box>
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