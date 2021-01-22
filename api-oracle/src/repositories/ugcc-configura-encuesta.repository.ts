import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccConfiguraEncuesta, UgccConfiguraEncuestaRelations} from '../models';

export class UgccConfiguraEncuestaRepository extends DefaultCrudRepository<
  UgccConfiguraEncuesta,
  typeof UgccConfiguraEncuesta.prototype.configuraId,
  UgccConfiguraEncuestaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccConfiguraEncuesta, dataSource);
  }
}
