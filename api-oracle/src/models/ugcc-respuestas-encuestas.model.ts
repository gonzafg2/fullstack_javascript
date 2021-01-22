import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_RESPUESTAS_ENCUESTAS'}
  }
})
export class UgccRespuestasEncuestas extends Entity {
  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'AGRUPA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  agrupaId?: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'PREGUNTA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  preguntaId?: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'TIPO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  tipoId?: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'RESPUESTA_VALOR', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  respuestaValor: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccRespuestasEncuestas>) {
    super(data);
  }
}

export interface UgccRespuestasEncuestasRelations {
  // describe navigational properties here
}

export type UgccRespuestasEncuestasWithRelations = UgccRespuestasEncuestas & UgccRespuestasEncuestasRelations;
