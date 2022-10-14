
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Formulario from '../../components/Formulario';
import Header from '../../components/Header';
import RecadosContent from '../../components/RecadosContent';
import { checkBotoes } from '../../store/botoes/BotoesSlice';
import { useAppDispatch } from '../../store/hooks';
import { buscarRecados } from '../../store/recados/RecadosSlice';


const Home: React.FC = () => {
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(buscarRecados());
    dispatch(checkBotoes(true));
  }, [dispatch]);

  return (

    <>
      <Box sx={{
        width: "100vw", height: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Header />
        <Formulario />
        <RecadosContent />
      </Box>
    </>

  );
};

export default Home;
