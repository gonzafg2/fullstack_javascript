import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccPreguntaEncuesta, UgccPreguntaEncuestaRelations} from '../models';

export class UgccPreguntaEncuestaRepository extends DefaultCrudRepository<
  UgccPreguntaEncuesta,
  typeof UgccPreguntaEncuesta.prototype.id,
  UgccPreguntaEncuestaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccPreguntaEncuesta, dataSource);
  }
}
