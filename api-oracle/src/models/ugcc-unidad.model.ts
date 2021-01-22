import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_UNIDAD'}}
})
export class UgccUnidad extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'UNIDAD_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  unidadId: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    oracle: {columnName: 'UNIDAD_NOMBRE', dataType: 'VARCHAR2', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  unidadNombre: string;

  @property({
    type: 'boolean',
    length: 1,
    oracle: {columnName: 'UNIDAD_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  unidadHabilitado?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccUnidad>) {
    super(data);
  }
}

export interface UgccUnidadRelations {
  // describe navigational properties here
}

export type UgccUnidadWithRelations = UgccUnidad & UgccUnidadRelations;
