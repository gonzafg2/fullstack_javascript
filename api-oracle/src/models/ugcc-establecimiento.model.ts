import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_ESTABLECIMIENTO'}
  }
})
export class UgccEstablecimiento extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'ESTABLECIMIENTO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  establecimientoId: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'COMUNA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  comunaId?: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'ESTABLECIMIENTO_NOMBRE', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  establecimientoNombre: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'ESTABLECIMIENTO_TIPO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  establecimientoTipo: boolean;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'ESTABLECIMIENTO_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  establecimientoHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccEstablecimiento>) {
    super(data);
  }
}

export interface UgccEstablecimientoRelations {
  // describe navigational properties here
}

export type UgccEstablecimientoWithRelations = UgccEstablecimiento & UgccEstablecimientoRelations;
