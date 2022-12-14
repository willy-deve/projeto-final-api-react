import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material"
import { atualizarRecado, criarRecado } from '../store/recados/RecadosSlice';
import { Recado, RecadoRequest } from '../store/recados/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkBotoes } from '../store/botoes/BotoesSlice';
import ButtonStyled from './ButtonStyled/ButtonStyled';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CancelIcon from '@mui/icons-material/Cancel';



const Formulario: React.FC<{ id?: number }> = ({ id }) => {
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [idRecado, setIdRecado] = useState(0);
  const [isCreate, setIsCreate] = useState(true);
  const estadoBotao = useAppSelector((state) => state.botoes.check);
  const recadoSelecionado = useAppSelector((state) => state.recado);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!estadoBotao) {
      setIsCreate(false)
      setDescription(recadoSelecionado.description);
      setDetail(recadoSelecionado.detail);
      setIdRecado(recadoSelecionado.id);
    }

    if (estadoBotao) {
      setDescription('');
      setDetail('');
      setIdRecado(0);
      setIsCreate(true)
    }
  }, [estadoBotao, recadoSelecionado])

  const handleCancelFormulario = () => {
    setDescription('');
    setDetail('');
    setIdRecado(0);
    dispatch(checkBotoes(true))
  }

  const handleSalvar = () => {
    if (description === "" || detail === "") {
      alert("Preencha todos os campos")
    } else {
      const novoRecado: RecadoRequest = {
        description,
        detail,
      }

      dispatch(criarRecado(novoRecado))
      handleCancelFormulario();
    }
  }

  const handleAtualizar = () => {
    const novoRecado: Recado = {
      id: idRecado,
      description,
      detail,
    }

    dispatch(atualizarRecado(novoRecado))
    dispatch(checkBotoes(true));
  }

  return (
    <Box component="form" sx={{
      width: '30%', height: "350px", backgroundColor: 'white', display: 'flex', justifyContent: 'space-around',
      alignItems: 'center', flexDirection: 'column', marginTop: '25px', borderRadius: '15px', padding: "20px", marginBottom: "15px"
    }}>

      <Typography variant='h4' sx={{ fontFamily: '"Josefin Sas", sans-serif' }}>
        NEW MESSAGE
      </Typography>


      <TextField onChange={(e) => setDescription(e.target.value)} id="input-description" fullWidth label="Description" variant="filled" value={description} placeholder='Digite aqui...' />
      <TextField onChange={(e) => setDetail(e.target.value)} id="input-detail" fullWidth label="Detail" variant="filled" value={detail} placeholder='Digite aqui...' />

      <Grid container >

        {
          isCreate ? (<Grid item xs={6} md={6} xl={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "5px" }}>
            <ButtonStyled icon={<SaveAltIcon />} texto={"TO SAVE"} onClick={handleSalvar} />
          </Grid>)
            : (<Grid item xs={6} md={6} xl={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "5px" }}>
              <ButtonStyled icon={<SaveAltIcon />} texto={"UPDATE"} onClick={handleAtualizar} />
            </Grid>)
        }

        <Grid item xs={6} md={6} xl={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "5px" }}>
          <ButtonStyled icon={<CancelIcon />} texto={"CANCEL"} onClick={handleCancelFormulario} />
        </Grid>

      </Grid>

    </Box>

  );
};

export default Formulario;
