/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordiondetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material'
import { Grid } from '@mui/material'
import { Recado, RecadoRequest } from '../store/recados/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkBotoes } from '../store/botoes/BotoesSlice';
import { criarRecado, excluirRecado, selectAll } from '../store/recados/RecadosSlice';
import { create } from '../store/recados/recadoSlice';
import { addOneArquivo, removeOneArquiv, selectAllArquiv } from '../store/arquivados/ArquivadosSlice';
import { recado } from '../store/recados';



const RecadosAccordion: React.FC<Recado> = ({ id, description, detail, arquivado }) => {
  const dispatch = useAppDispatch();
  const listaArquivados = useAppSelector(selectAllArquiv);
  const listaRecados = useAppSelector(selectAll);

  const handleApagar = () => {
    if (arquivado === true) {
      dispatch(removeOneArquiv(id))
    } else {
      dispatch(excluirRecado(id));
    }
  }

  const handleArquivar = () => {
    listaRecados.map((recado: Recado) => {
      if (recado.id === id) {
        dispatch(addOneArquivo(recado));
        dispatch(excluirRecado(id));
      }
    })
  }

  const handleDesarquivar = () => {
    listaArquivados.map((recado: Recado) => {
      if (recado.id === id) {
        const novoRecado: RecadoRequest = {
          description,
          detail
        };
        dispatch(removeOneArquiv(id))
        dispatch(criarRecado(novoRecado))
      }
    })
  }

  const handleEditar = () => {
    dispatch(checkBotoes(false))
    dispatch(create({ id, description, detail }))
  }



  return (

    <Accordion sx={{ backgroundColor: '#fff' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography> #{id} {description}</Typography>
      </AccordionSummary>
      <Accordiondetails sx={{ backgroundColor: '#dddddd' }}>

        <Typography sx={{ color: 'black' }}>{detail} </Typography>

        <Grid container sx={{ marginTop: "15px" }}>

          <Grid item xs={4} md={4} xl={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "5px" }}>
            <Button variant='contained' onClick={handleEditar} >TO EDIT</Button>
          </Grid>

          <Grid item xs={4} md={4} xl={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "5px" }}>
            <Button variant="contained" onClick={handleApagar} >DELETE</Button>
          </Grid>

          <Grid item xs={4} md={4} xl={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "5px" }}>
            {arquivado ? (
              <Button variant='contained' onClick={handleDesarquivar}> Desarquivar </Button>
            ) :
              (
                <Button variant='contained' onClick={handleArquivar}>Arquivar</Button>
              )

            }
          </Grid>

        </Grid>

      </Accordiondetails>
    </Accordion>

  );
};

export default RecadosAccordion;
