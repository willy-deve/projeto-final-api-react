import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { RootState } from '..';
import {
  atualizarRecadoApi,
  buscarRecadosApi,
  criarRecadoApi,
  excluirRecadoApi,
} from '../../service/api';
import { Recado, RecadoRequest } from '../recados/types';

export const buscarRecados = createAsyncThunk(
  'recados/buscarRecados',
  async () => {
    const response: Recado[] = await buscarRecadosApi('/all');

    return response;
  }
);


export const criarRecado = createAsyncThunk(
  "recados/criarRecado",
  async (dado: RecadoRequest) => {
    const response = await criarRecadoApi('/', dado)

    return response
  }
)

export const atualizarRecado = createAsyncThunk(
  "recados/atualizarRecado",
  async (dado: Recado) => {
    const { id } = dado;

    const dataRequest = {
      description: dado.description,
      detail: dado.detail
    }

    const response = await atualizarRecadoApi(`/${id}`, dataRequest)

    return response
  }
)

export const excluirRecado = createAsyncThunk(
  "recados/excluirRecado",
  async (id: number) => {
    const response = await excluirRecadoApi(`/${id}`)
    return {
      id,
      message: response
    }
  }
)

const adapter = createEntityAdapter<Recado>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: RootState) => state.recados
);

const recadosSlice = createSlice({
  name: 'recados',
  initialState: adapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(buscarRecados.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(buscarRecados.fulfilled, (state, action) => {
      state.loading = false;
      adapter.setAll(state, action.payload);
    });

    builder.addCase(criarRecado.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(criarRecado.fulfilled, (state, action) => {
      state.loading = false

      if(action.payload.id === 0){
        return state
      }

      adapter.addOne(state, action.payload);

    })

    builder.addCase(atualizarRecado.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(atualizarRecado.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload.id === 0) {
        return state
      }
      
      adapter.updateOne(state, { id: action.payload.id, changes: action.payload })
     
    })

    builder.addCase(excluirRecado.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(excluirRecado.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload.message === 'Recado não excluído.') {
        return state
      } 

      adapter.removeOne(state, action.payload.id);
    })
  },
});

export default recadosSlice.reducer;
