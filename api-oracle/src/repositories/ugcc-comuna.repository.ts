import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccComuna, UgccComunaRelations} from '../models';

export class UgccComunaRepository extends DefaultCrudRepository<
  UgccComuna,
  typeof UgccComuna.prototype.comunaId,
  UgccComunaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccComuna, dataSource);
  }
}
