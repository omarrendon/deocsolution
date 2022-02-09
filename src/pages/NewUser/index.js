import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../actions/usersActions';

const NewUser = () => {
  const [Name, setName] = useState('');
  const session = useSelector(state => state.session);
  const { userCreate } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const history = useNavigate()
  const [lastNameF, setLastNameF] = useState('');
  const [lastNameM, setLastNameM] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [passRepeat, setPassRepeat] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    if (session?.session?.Body?.Token) {
      setToken(session?.session?.Body?.Token);



      // jose.moreno@docsolutions.com

    }
  }, [session])

  useEffect(() => {
    if (userCreate === true) {
      history('/');
    };
  }, [userCreate])

  const handleCreateUser = () => {
    const body = {
      name: Name,
      lastNameF,
      lastNameM,
      email,
      phone,
      user,
      pass,
      passRepeat,
      token
    };
    dispatch(createUser(body))
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <TextField onChange={(e) => setName(e.target.value)} variant='outlined' label='Nombre' />
        <TextField onChange={(e) => setLastNameF(e.target.value)} variant='outlined' label='Apellido P' />
        <TextField onChange={(e) => setLastNameM(e.target.value)} variant='outlined' label='Apellido M' />
        <TextField onChange={(e) => setEmail(e.target.value)} variant='outlined' label='Email' />
        <TextField onChange={(e) => setPhone(e.target.value)} variant='outlined' label='Telefono' />
        <TextField onChange={(e) => setUser(e.target.value)} variant='outlined' label='User' />
        <TextField onChange={(e) => setPass(e.target.value)} variant='outlined' label='Password' />
        <TextField onChange={(e) => setPassRepeat(e.target.value)} variant='outlined' label='Password' />
        <Button
          variant='outlined'
          onClick={handleCreateUser}
        >Enviar</Button>
      </Grid>
    </Grid>
  )
}

export default NewUser