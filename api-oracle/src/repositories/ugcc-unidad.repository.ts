import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccUnidad, UgccUnidadRelations} from '../models';

export class UgccUnidadRepository extends DefaultCrudRepository<
  UgccUnidad,
  typeof UgccUnidad.prototype.unidadId,
  UgccUnidadRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccUnidad, dataSource);
  }
}
