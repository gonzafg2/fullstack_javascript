import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_PREGUNTA_ENCUESTA'}
  }
})
export class UgccPreguntaEncuesta extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'PREGUNTA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  preguntaId: number;

  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'ENCUESTA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  encuestaId: number;

  @property({
    type: 'number',
    length: 22,
    scale: 0,
    oracle: {columnName: 'PREGUNTA_ORDEN', dataType: 'NUMBER', dataLength: 22, dataPrecision: null, dataScale: 0, nullable: 'Y'},
  })
  preguntaOrden?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccPreguntaEncuesta>) {
    super(data);
  }
}

export interface UgccPreguntaEncuestaRelations {
  // describe navigational properties here
}

export type UgccPreguntaEncuestaWithRelations = UgccPreguntaEncuesta & UgccPreguntaEncuestaRelations;
