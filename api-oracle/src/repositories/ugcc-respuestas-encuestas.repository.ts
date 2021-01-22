import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccRespuestasEncuestas, UgccRespuestasEncuestasRelations} from '../models';

export class UgccRespuestasEncuestasRepository extends DefaultCrudRepository<
  UgccRespuestasEncuestas,
  typeof UgccRespuestasEncuestas.prototype.id,
  UgccRespuestasEncuestasRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccRespuestasEncuestas, dataSource);
  }
}
