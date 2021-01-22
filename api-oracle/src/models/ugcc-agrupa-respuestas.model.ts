import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_AGRUPA_RESPUESTAS'}
  }
})
export class UgccAgrupaRespuestas extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'AGRUPA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  agrupaId: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'AGRUPA_ID_ORIGINAL', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  agrupaIdOriginal?: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'USUARIO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  usuarioId?: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'HORARIO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  horarioId?: number;

  @property({
    type: 'string',
    required: true,
    length: 11,
    scale: 6,
    oracle: {columnName: 'AGRUPA_FECHA_INGRESO', dataType: 'TIMESTAMP(6)', dataLength: 11, dataPrecision: null, dataScale: 6, nullable: 'N'},
  })
  agrupaFechaIngreso: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'AGRUPA_ESTADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  agrupaEstado: boolean;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'AGRUPA_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  agrupaHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccAgrupaRespuestas>) {
    super(data);
  }
}

export interface UgccAgrupaRespuestasRelations {
  // describe navigational properties here
}

export type UgccAgrupaRespuestasWithRelations = UgccAgrupaRespuestas & UgccAgrupaRespuestasRelations;
