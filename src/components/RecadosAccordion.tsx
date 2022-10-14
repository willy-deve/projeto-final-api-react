import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordiondetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material'
import { Grid } from '@mui/material'
import { Recado } from '../store/recados/types';
import { useAppDispatch } from '../store/hooks';
import { checkBotoes } from '../store/botoes/BotoesSlice';
import { excluirRecado } from '../store/recados/RecadosSlice';
import { create } from '../store/recados/recadoSlice';



const RecadosAccordion: React.FC<Recado> = ({ id, description, detail }) => {
  const dispatch = useAppDispatch();

  const handleApagar = () => {
    dispatch(excluirRecado(id));
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
        <Typography>Recado #{id} {description}</Typography>
      </AccordionSummary>
      <Accordiondetails sx={{ backgroundColor: '#dddddd' }}>

        <Typography sx={{ color: 'black' }}>{detail} </Typography>

        <Grid container sx={{ marginTop: "15px" }}>

          <Grid item xs={6} md={6} xl={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "5px" }}>
            <Button variant='contained' onClick={handleEditar} >TO EDIT</Button>
          </Grid>

          <Grid item xs={6} md={6} xl={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "5px" }}>
            <Button variant="contained" onClick={handleApagar} >DELETE</Button>
          </Grid>

        </Grid>

      </Accordiondetails>
    </Accordion>

  );
};

export default RecadosAccordion;
