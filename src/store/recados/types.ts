export interface Recado {
  id: number,
  description: string,
  detail: string
  arquivado?: boolean
}

export interface RecadoRequest {
  description: string,
  detail: string
}

