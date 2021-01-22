import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    oracle: {schema: 'OWN_UGCC', table: 'UGCC_TIPO_RESPUESTA_PREGUNTA'}
  }
})
export class UgccTipoRespuestaPregunta extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'PREGUNTA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  preguntaId: number;

  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 2,
    oracle: {columnName: 'TIPO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  tipoId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccTipoRespuestaPregunta>) {
    super(data);
  }
}

export interface UgccTipoRespuestaPreguntaRelations {
  // describe navigational properties here
}

export type UgccTipoRespuestaPreguntaWithRelations = UgccTipoRespuestaPregunta & UgccTipoRespuestaPreguntaRelations;
