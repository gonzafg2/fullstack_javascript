import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_TIPO_RESPUESTA'}}
})
export class UgccTipoRespuesta extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'TIPO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  tipoId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'TIPO_NOMBRE', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tipoNombre: string;

  @property({
    type: 'string',
    required: true,
    length: 500,
    oracle: {columnName: 'TIPO_GLOSA', dataType: 'VARCHAR2', dataLength: 500, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tipoGlosa: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'TIPO_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tipoHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccTipoRespuesta>) {
    super(data);
  }
}

export interface UgccTipoRespuestaRelations {
  // describe navigational properties here
}

export type UgccTipoRespuestaWithRelations = UgccTipoRespuesta & UgccTipoRespuestaRelations;
