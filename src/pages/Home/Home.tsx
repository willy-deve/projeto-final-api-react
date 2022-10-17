
import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import Formulario from '../../components/Formulario';
import Header from '../../components/Header';
import RecadosContent from '../../components/RecadosContent';
import { checkBotoes } from '../../store/botoes/BotoesSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { buscarRecados } from '../../store/recados/RecadosSlice';
import { checkMostrar, selectMostrar } from '../../store/Mostrar/MostrarSlice';
import RecadosContentArquiv from '../../components/RecadosContentArquiv';



const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const estadoMostrar = useAppSelector(selectMostrar).mostrou

  useEffect(() => {
    dispatch(buscarRecados());
    dispatch(checkBotoes(true));
  }, [dispatch]);

  const handleArquivados = () => {
    dispatch(checkMostrar(true))
  }

  const handleNaoArquivados = () => {
    dispatch(checkMostrar(false))
  }

  return (

    <>
      <Box sx={{
        width: "100vw", height: "100%", display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Header />
        <Formulario />
        {estadoMostrar === false ? (
          <Button onClick={handleArquivados}>
            Arquivados
          </Button>
        ) : (
          <>
            <Button onClick={handleNaoArquivados}>
              Desarquviados
            </Button><RecadosContentArquiv />
          </>
        )}
        <RecadosContent />
      </Box>
    </>

  );
};

export default Home;
