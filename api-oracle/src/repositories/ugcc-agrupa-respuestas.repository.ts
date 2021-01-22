import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccAgrupaRespuestas, UgccAgrupaRespuestasRelations} from '../models';

export class UgccAgrupaRespuestasRepository extends DefaultCrudRepository<
  UgccAgrupaRespuestas,
  typeof UgccAgrupaRespuestas.prototype.agrupaId,
  UgccAgrupaRespuestasRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccAgrupaRespuestas, dataSource);
  }
}
