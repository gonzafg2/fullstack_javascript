import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_REENVIO_ENCUESTA'}
  }
})
export class UgccReenvioEncuesta extends Entity {
  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'HORARIO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  horarioId?: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'UNIDAD_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  unidadId?: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'ESTABLECIMIENTO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  establecimientoId?: number;

  @property({
    type: 'string',
    length: 11,
    scale: 6,
    oracle: {columnName: 'REENVIO_FECHA_INGRESO', dataType: 'TIMESTAMP(6)', dataLength: 11, dataPrecision: null, dataScale: 6, nullable: 'Y'},
  })
  reenvioFechaIngreso?: string;

  @property({
    type: 'number',
    required: true,
    length: 22,
    scale: 0,
    oracle: {columnName: 'REENVIO_HORA_TOPE_RECEPCION', dataType: 'NUMBER', dataLength: 22, dataPrecision: null, dataScale: 0, nullable: 'N'},
  })
  reenvioHoraTopeRecepcion: number;

  @property({
    type: 'number',
    required: true,
    length: 22,
    scale: 0,
    oracle: {columnName: 'REENVIO_MINUTO_TOPE_RECEPCION', dataType: 'NUMBER', dataLength: 22, dataPrecision: null, dataScale: 0, nullable: 'N'},
  })
  reenvioMinutoTopeRecepcion: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccReenvioEncuesta>) {
    super(data);
  }
}

export interface UgccReenvioEncuestaRelations {
  // describe navigational properties here
}

export type UgccReenvioEncuestaWithRelations = UgccReenvioEncuesta & UgccReenvioEncuestaRelations;
