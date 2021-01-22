import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_UNI_EST_USUARIO_ENC'}
  }
})
export class UgccUniEstUsuarioEnc extends Entity {
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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccUniEstUsuarioEnc>) {
    super(data);
  }
}

export interface UgccUniEstUsuarioEncRelations {
  // describe navigational properties here
}

export type UgccUniEstUsuarioEncWithRelations = UgccUniEstUsuarioEnc & UgccUniEstUsuarioEncRelations;
