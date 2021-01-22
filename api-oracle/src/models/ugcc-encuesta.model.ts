import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_ENCUESTA'}}
})
export class UgccEncuesta extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'ENCUESTA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  encuestaId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'ENCUESTA_NOMBRE', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  encuestaNombre: string;

  @property({
    type: 'string',
    required: true,
    length: 200,
    oracle: {columnName: 'ENCUESTA_GLOSA', dataType: 'VARCHAR2', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  encuestaGlosa: string;

  @property({
    type: 'string',
    length: 500,
    oracle: {columnName: 'ENCUESTA_TEXTO_INICIO', dataType: 'VARCHAR2', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  encuestaTextoInicio?: string;

  @property({
    type: 'string',
    length: 500,
    oracle: {columnName: 'ENCUESTA_TEXTO_DESPEDIDA', dataType: 'VARCHAR2', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  encuestaTextoDespedida?: string;

  @property({
    type: 'string',
    required: true,
    length: 11,
    scale: 6,
    oracle: {columnName: 'ENCUESTA_FECHA_INICIO', dataType: 'TIMESTAMP(6)', dataLength: 11, dataPrecision: null, dataScale: 6, nullable: 'N'},
  })
  encuestaFechaInicio: string;

  @property({
    type: 'string',
    required: true,
    length: 11,
    scale: 6,
    oracle: {columnName: 'ENCUESTA_FECHA_TERMINO', dataType: 'TIMESTAMP(6)', dataLength: 11, dataPrecision: null, dataScale: 6, nullable: 'N'},
  })
  encuestaFechaTermino: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'ENCUESTA_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  encuestaHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccEncuesta>) {
    super(data);
  }
}

export interface UgccEncuestaRelations {
  // describe navigational properties here
}

export type UgccEncuestaWithRelations = UgccEncuesta & UgccEncuestaRelations;
