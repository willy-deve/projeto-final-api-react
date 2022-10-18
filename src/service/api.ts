import axios from "axios";
import { Recado, RecadoRequest } from "../store/recados/types";

const api = axios.create({
  baseURL: "https://projeto-willy-back-end.herokuapp.com/sistema/recados",


});


// BUSCAR TODOS
async function buscarRecadosApi(url: string): Promise<Recado[]> {
  try {
    const response = await api.get(url)

    return response.data
  } catch {
    return []
  }
};


// CRIAR RECADO
async function criarRecadoApi(url: string, data: RecadoRequest): Promise<Recado> {
  try {
    const response = await api.post(url, data);

    return response.data
  } catch {
    return { id: 0, description: '', detail: '' }
  }
}


// EXCLUIR RECADO
async function excluirRecadoApi(url: string): Promise<string> {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch {
    return 'Recado não excluído.'
  }

}


// ATUALIZAR RECADO
async function atualizarRecadoApi(url: string, data: RecadoRequest): Promise<Recado> {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch {
    return { id: 0, description: '', detail: '' }
  }
}

export {
  atualizarRecadoApi,
  buscarRecadosApi,
  excluirRecadoApi,
  criarRecadoApi
}
