import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccEncuesta, UgccEncuestaRelations} from '../models';

export class UgccEncuestaRepository extends DefaultCrudRepository<
  UgccEncuesta,
  typeof UgccEncuesta.prototype.encuestaId,
  UgccEncuestaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccEncuesta, dataSource);
  }
}
