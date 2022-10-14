import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  check: true,
};

const BotoesSlice = createSlice({
  name: 'botoes',
  initialState,
  reducers: {
    checkBotoes(state, action) {
      state.check = action.payload
    }
  },
});

export const { checkBotoes } = BotoesSlice.actions;
export default BotoesSlice.reducer;