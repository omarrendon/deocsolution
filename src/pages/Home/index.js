import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/usersActions';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, Typography, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';


function Home() {
  const { users } = useSelector(state => state.users);
  const  session  = useSelector(state => state.session);
  const dispatch = useDispatch();
  const history = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('session', session);
    const body = {
      user,
      token: session?.session?.Body?.Token
    };
    dispatch(fetchUsers(body));
  }, [session])
  
  
  const handleSearchUser = () => {
    if(user){
      const body = {
        user,
        token: session?.session?.Body?.Token
      }
      dispatch(fetchUsers(body));
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            variant='outlined'
            label='Buscar usuario'
            onChange={(e) => setUser(e.target.value)}
          />

        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Button
            variant='outlined'
            onClick={handleSearchUser}  
          >
            Ok
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Button
            variant='outlined'
            onClick={() => history('/nuevo')}
          >
            Crear
          </Button>
        </Grid>
      </Grid>
      {users.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>FatherLastName</TableCell>
                <TableCell>CreationDate</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>PhoneNumber</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.Username || ''}</TableCell>
                    <TableCell>{user.Name || ''}</TableCell>
                    <TableCell>{user.FatherLastName || ''}</TableCell>
                    <TableCell>{user.CreationDate || ''}</TableCell>
                    <TableCell>{user.Email || ''}</TableCell>
                    <TableCell>{user.PhoneNumber || ''}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

export default Home