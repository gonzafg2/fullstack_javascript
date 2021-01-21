import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_USUARIO_ENCUESTA'}
  }
})
export class UgccUsuarioEncuesta extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'USUARIO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  usuarioId: number;

  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 10,
    scale: 0,
    oracle: {columnName: 'USUARIO_RUT', dataType: 'NUMBER', dataLength: 22, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  usuarioRut: number;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'USUARIO_DV', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  usuarioDv: boolean;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'USUARIO_NOMBRES', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  usuarioNombres: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'USUARIO_APATERNO', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  usuarioApaterno: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'USUARIO_AMATERNO', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  usuarioAmaterno: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    oracle: {columnName: 'USUARIO_EMAIL', dataType: 'VARCHAR2', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  usuarioEmail: string;

  @property({
    type: 'string',
    length: 20,
    oracle: {columnName: 'USUARIO_MOVIL1', dataType: 'VARCHAR2', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  usuarioMovil1?: string;

  @property({
    type: 'string',
    length: 20,
    oracle: {columnName: 'USUARIO_MOVIL2', dataType: 'VARCHAR2', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  usuarioMovil2?: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'USUARIO_HABIOLITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  usuarioHabiolitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccUsuarioEncuesta>) {
    super(data);
  }
}

export interface UgccUsuarioEncuestaRelations {
  // describe navigational properties here
}

export type UgccUsuarioEncuestaWithRelations = UgccUsuarioEncuesta & UgccUsuarioEncuestaRelations;
