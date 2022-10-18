import React from 'react';
import { selectAllArquiv } from '../store/arquivados/ArquivadosSlice';
import { useAppSelector } from '../store/hooks';
import { selectMostrar } from '../store/Mostrar/MostrarSlice';
import { Box, Typography } from "@mui/material"
import RecadosAccordion from './RecadosAccordion';



const RecadosContentArquiv: React.FC = () => {
  const listaArquivdos = useAppSelector(selectAllArquiv)
  const estadoMostrar = useAppSelector(selectMostrar).mostrou
  return (
    <Box sx={{ width: "50%", margin: "30px" }} >
      <Box>
        {estadoMostrar ? (
          <>
            {listaArquivdos.length > 0 ? (
              listaArquivdos.map((recado) => {
                return (
                  <RecadosAccordion
                    key={recado.id}
                    id={recado.id}
                    description={recado.description}
                    detail={recado.detail}
                    arquivado={true}
                  />
                )
              })
            ) : (
              <Typography sx={{ color: "white", fontSize: "25px", textAlign: "center" }} > No archived messages</Typography>
            )}
          </>

        ) : (
          <></>
        )}
      </Box>



    </Box >

  );
};

export default RecadosContentArquiv;
