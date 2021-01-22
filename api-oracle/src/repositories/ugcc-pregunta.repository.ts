import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccPregunta, UgccPreguntaRelations} from '../models';

export class UgccPreguntaRepository extends DefaultCrudRepository<
  UgccPregunta,
  typeof UgccPregunta.prototype.preguntaId,
  UgccPreguntaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccPregunta, dataSource);
  }
}
