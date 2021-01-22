import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_HORARIO_ENVIO'}}
})
export class UgccHorarioEnvio extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'HORARIO_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  horarioId: number;

  @property({
    type: 'number',
    length: 22,
    precision: 38,
    scale: 0,
    oracle: {columnName: 'CONFIGURA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'Y'},
  })
  configuraId?: number;

  @property({
    type: 'number',
    required: true,
    length: 22,
    scale: 0,
    oracle: {columnName: 'HORARIO_HORA_ENVIO', dataType: 'NUMBER', dataLength: 22, dataPrecision: null, dataScale: 0, nullable: 'N'},
  })
  horarioHoraEnvio: number;

  @property({
    type: 'number',
    required: true,
    length: 22,
    scale: 0,
    oracle: {columnName: 'HORARIO_MINUTO_ENVIO', dataType: 'NUMBER', dataLength: 22, dataPrecision: null, dataScale: 0, nullable: 'N'},
  })
  horarioMinutoEnvio: number;

  @property({
    type: 'number',
    length: 22,
    scale: 0,
    oracle: {columnName: 'HORARIO_HORA_TOPE_RECEPCION', dataType: 'NUMBER', dataLength: 22, dataPrecision: null, dataScale: 0, nullable: 'Y'},
  })
  horarioHoraTopeRecepcion?: number;

  @property({
    type: 'number',
    length: 22,
    scale: 0,
    oracle: {columnName: 'HORARIO_MINUTO_TOPE_RECEPCION', dataType: 'NUMBER', dataLength: 22, dataPrecision: null, dataScale: 0, nullable: 'Y'},
  })
  horarioMinutoTopeRecepcion?: number;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'HORARIO_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  horarioHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccHorarioEnvio>) {
    super(data);
  }
}

export interface UgccHorarioEnvioRelations {
  // describe navigational properties here
}

export type UgccHorarioEnvioWithRelations = UgccHorarioEnvio & UgccHorarioEnvioRelations;
