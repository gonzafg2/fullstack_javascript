import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'pruebas', table: 'tester'}}})
export class Tester extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 3,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'nombre', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'apellido', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  apellido: string;

  @property({
    type: 'number',
    required: true,
    precision: 3,
    scale: 0,
    mysql: {columnName: 'edad', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  edad: number;

  @property({
    type: 'number',
    required: true,
    precision: 3,
    scale: 0,
    mysql: {columnName: 'Mascota', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  mascota: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tester>) {
    super(data);
  }
}

export interface TesterRelations {
  // describe navigational properties here
}

export type TesterWithRelations = Tester & TesterRelations;
