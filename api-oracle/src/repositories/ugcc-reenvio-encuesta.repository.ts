import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccReenvioEncuesta, UgccReenvioEncuestaRelations} from '../models';

export class UgccReenvioEncuestaRepository extends DefaultCrudRepository<
  UgccReenvioEncuesta,
  typeof UgccReenvioEncuesta.prototype.id,
  UgccReenvioEncuestaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccReenvioEncuesta, dataSource);
  }
}
