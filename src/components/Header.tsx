import React from 'react';
import defaultTheme from '../config/theme/Default';
import { Container, Toolbar, AppBar, Typography } from "@mui/material"



const Header: React.FC = () => {
  return (

    <AppBar position="static" sx={{ backgroundColor: defaultTheme.palette.secondary.light }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ fontFamily: '"Josefin Sas", sans-serif' }} >
            Final Work Module Back-End     | Willy da Silva |
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>

  );
};

export default Header;
