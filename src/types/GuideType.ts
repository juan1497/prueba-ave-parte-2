interface GuideHistoric {
  estado: string;
  fechamostrar: string;
  descripcion: string;
  aclaracion: string;
  novedad: string;
}
interface Guide {
  origen: string;
  direccion: string;
  telefono: string;
  destinatario: string;
  estado: string;
  dsfechaentrega: string;
  historicos: GuideHistoric[];
  rutadigitalizada: string;
}

interface GuideResponse {
  response: {
    guias: Guide[];
  };
  type_error: string;
}

export { Guide, GuideHistoric, GuideResponse };
