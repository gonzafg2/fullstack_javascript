import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_PREGUNTA'}}
})
export class UgccPregunta extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'PREGUNTA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  preguntaId: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'GRUPO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  grupoId?: number;

  @property({
    type: 'string',
    required: true,
    length: 500,
    oracle: {columnName: 'PREGUNTA_GLOSA', dataType: 'VARCHAR2', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  preguntaGlosa: string;

  @property({
    type: 'string',
    required: true,
    length: 500,
    oracle: {columnName: 'PREGUNTA_AYUDA', dataType: 'VARCHAR2', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  preguntaAyuda: string;

  @property({
    type: 'string',
    required: true,
    length: 500,
    oracle: {columnName: 'PREGUNTA_EXPLICACION', dataType: 'VARCHAR2', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  preguntaExplicacion: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'PREGUNTA_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  preguntaHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccPregunta>) {
    super(data);
  }
}

export interface UgccPreguntaRelations {
  // describe navigational properties here
}

export type UgccPreguntaWithRelations = UgccPregunta & UgccPreguntaRelations;
