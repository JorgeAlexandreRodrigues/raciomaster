import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFC107' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            RACIO MASTER
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar