import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState: { mostrou: boolean } = {
  mostrou: false
}

const mostrarSlice = createSlice({
  name: 'mostrar',
  initialState,
  reducers: {
    checkMostrar(state, action) {
      state.mostrou = action.payload
    },

  },
});

export const { checkMostrar } = mostrarSlice.actions;
export const selectMostrar = (state: RootState): { mostrou: boolean } => state.mostrar;
export default mostrarSlice.reducer;
