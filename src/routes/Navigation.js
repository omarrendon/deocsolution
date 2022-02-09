import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewUser from '../pages/NewUser';

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/nuevo'
          element={<NewUser />}
        />
        <Route
          path='*'
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation;