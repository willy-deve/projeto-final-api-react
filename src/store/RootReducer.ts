import { combineReducers } from "@reduxjs/toolkit";
import { recado, recados } from "../store/recados/index"
import botoes from "../store/botoes/BotoesSlice"

const combinedReducer = combineReducers({
  recados,
  recado,
  botoes

});

export default combinedReducer;