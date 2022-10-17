/* eslint-disable @typescript-eslint/no-redeclare */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface ArquivadosSlice {
  id: number;
  description: string;
  detail: string;

}

const adapter = createEntityAdapter<ArquivadosSlice>({
  selectId: (item) => item.id,
});

export const { selectAll: selectAllArquiv, selectById } = adapter.getSelectors(
  (state: RootState) => state.arquivados
);

const ArquivadosSlice = createSlice({
  name: 'arquivados',
  initialState: adapter.getInitialState(),
  reducers: {
    addOneArquivo: adapter.addOne,
    removeOneArquiv: adapter.removeOne,
  },
});

export const { addOneArquivo, removeOneArquiv } = ArquivadosSlice.actions;
export default ArquivadosSlice.reducer;
