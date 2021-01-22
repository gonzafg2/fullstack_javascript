import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_CONFIGURA_ENCUESTA'}
  }
})
export class UgccConfiguraEncuesta extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'CONFIGURA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  configuraId: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'ENCUESTA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  encuestaId?: number;

  @property({
    type: 'string',
    required: true,
    length: 10,
    oracle: {columnName: 'CONFIGURA_DIAS', dataType: 'VARCHAR2', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  configuraDias: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccConfiguraEncuesta>) {
    super(data);
  }
}

export interface UgccConfiguraEncuestaRelations {
  // describe navigational properties here
}

export type UgccConfiguraEncuestaWithRelations = UgccConfiguraEncuesta & UgccConfiguraEncuestaRelations;
