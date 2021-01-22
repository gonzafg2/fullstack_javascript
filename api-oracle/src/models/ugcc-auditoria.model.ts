import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_AUDITORIA'}}
})
export class UgccAuditoria extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'AUDITORIA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  auditoriaId: number;

  @property({
    type: 'string',
    required: true,
    length: 11,
    scale: 6,
    oracle: {columnName: 'AUDITORIA_FECHA', dataType: 'TIMESTAMP(6)', dataLength: 11, dataPrecision: null, dataScale: 6, nullable: 'N'},
  })
  auditoriaFecha: string;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'AUDITORIA_USUARIO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  auditoriaUsuarioId?: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'AUDITORIA_ACCION', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  auditoriaAccion: string;

  @property({
    type: 'string',
    required: true,
    length: 4000,
    oracle: {columnName: 'AUDITORIA_REGISTRO', dataType: 'VARCHAR2', dataLength: 4000, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  auditoriaRegistro: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccAuditoria>) {
    super(data);
  }
}

export interface UgccAuditoriaRelations {
  // describe navigational properties here
}

export type UgccAuditoriaWithRelations = UgccAuditoria & UgccAuditoriaRelations;
