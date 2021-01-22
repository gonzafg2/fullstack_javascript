import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_GRUPO_PREGUNTA'}}
})
export class UgccGrupoPregunta extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'GRUPO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  grupoId: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    oracle: {columnName: 'GRUPO_NOMBRE', dataType: 'VARCHAR2', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  grupoNombre: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'GRUPO_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  grupoHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccGrupoPregunta>) {
    super(data);
  }
}

export interface UgccGrupoPreguntaRelations {
  // describe navigational properties here
}

export type UgccGrupoPreguntaWithRelations = UgccGrupoPregunta & UgccGrupoPreguntaRelations;
