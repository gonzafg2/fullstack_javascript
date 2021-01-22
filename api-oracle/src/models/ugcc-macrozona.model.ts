import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, oracle: {schema: 'OWN_UGCC', table: 'UGCC_MACROZONA'}}
})
export class UgccMacrozona extends Entity {
  @property({
    type: 'number',
    required: true,
    length: 22,
    precision: 38,
    scale: 0,
    id: 1,
    oracle: {columnName: 'MACROZONA_ID', dataType: 'NUMBER', dataLength: 22, dataPrecision: 38, dataScale: 0, nullable: 'N'},
  })
  macrozonaId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    oracle: {columnName: 'MACROZONA_NOMBRE', dataType: 'VARCHAR2', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  macrozonaNombre: string;

  @property({
    type: 'boolean',
    required: true,
    length: 1,
    oracle: {columnName: 'MACROZONA_HABILITADO', dataType: 'CHAR', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  macrozonaHabilitado: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UgccMacrozona>) {
    super(data);
  }
}

export interface UgccMacrozonaRelations {
  // describe navigational properties here
}

export type UgccMacrozonaWithRelations = UgccMacrozona & UgccMacrozonaRelations;
