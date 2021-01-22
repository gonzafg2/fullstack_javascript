import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_SERVICIO_SALUD'}}
})
export class UgccServicioSalud extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'SERVICIO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  servicioId: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'MACROZONA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  macrozonaId?: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'SERVICIO_NOMBRE', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  servicioNombre: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'SERVICIO_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  servicioHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccServicioSalud>) {
    super(data);
  }
}

export interface UgccServicioSaludRelations {
  // describe navigational properties here
}

export type UgccServicioSaludWithRelations = UgccServicioSalud & UgccServicioSaludRelations;
