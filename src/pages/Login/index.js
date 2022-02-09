import React, { useEffect, useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/loginActions';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const { session } = useSelector(state => state.session);
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  
  const handleLogin = () => {
    if(email && password) {
      const body = {
        email,
        password
      };
      dispatch(login(body));
    };
  };


  useEffect(() => {
    if (session.IsOK && session.Body.Token) {
      history('/');
    };
    return;
  }, [session]);


  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h2'>Iniciar sesión</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
            variant="outlined"
            type='text'
            label='Correo'
            onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
            variant="outlined"
            type='password'
            label='Correo'
            onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button
              variant='contained'
              onClick={handleLogin}
            >
              Iniciar sesión
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login