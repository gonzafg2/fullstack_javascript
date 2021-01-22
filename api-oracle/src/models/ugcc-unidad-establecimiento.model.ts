import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_UNIDAD_ESTABLECIMIENTO'}
  }
})
export class UgccUnidadEstablecimiento extends Entity {
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
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 2,
    oracle: {columnName: 'ESTABLECIMIENTO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  establecimientoId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccUnidadEstablecimiento>) {
    super(data);
  }
}

export interface UgccUnidadEstablecimientoRelations {
  // describe navigational properties here
}

export type UgccUnidadEstablecimientoWithRelations = UgccUnidadEstablecimiento & UgccUnidadEstablecimientoRelations;
