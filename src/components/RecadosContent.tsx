import React from 'react';
import RecadosAccordion from './RecadosAccordion';
import { Box } from "@mui/material"
import { Recado, } from '../store/recados/types';
import { useAppSelector } from '../store/hooks';
import { selectAll } from '../store/recados/RecadosSlice';



const RecadosContent: React.FC = () => {
  const listaRecados = useAppSelector(selectAll);

  return (

    <Box sx={{ width: '60%', marginTop: "15px", backgroundColor: "blue" }}>
      {listaRecados.map((recado: Recado) => {
        return <div key={recado.id}>
          <RecadosAccordion id={recado.id} description={recado.description} detail={recado.detail} />
        </div>
      })}
    </Box>

  );
};

export default RecadosContent;
