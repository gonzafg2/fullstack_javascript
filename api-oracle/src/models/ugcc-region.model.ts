import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_REGION'}}
})
export class UgccRegion extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'REGION_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  regionId: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'SERVICIO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  servicioId?: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    oracle: {columnName: 'REGION_NOMBRE', dataType: 'VARCHAR2', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  regionNombre: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'REGION_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  regionHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccRegion>) {
    super(data);
  }
}

export interface UgccRegionRelations {
  // describe navigational properties here
}

export type UgccRegionWithRelations = UgccRegion & UgccRegionRelations;
