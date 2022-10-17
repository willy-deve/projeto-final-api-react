import { combineReducers } from "@reduxjs/toolkit";
import { recado, recados } from "../store/recados/index"
import botoes from "../store/botoes/BotoesSlice"
import mostrar from "./Mostrar/MostrarSlice"
import arquivados from "./arquivados/ArquivadosSlice"

const combinedReducer = combineReducers({
  recados,
  recado,
  botoes,
  mostrar,
  arquivados

});

export default combinedReducer;