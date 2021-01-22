import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccEstablecimiento, UgccEstablecimientoRelations} from '../models';

export class UgccEstablecimientoRepository extends DefaultCrudRepository<
  UgccEstablecimiento,
  typeof UgccEstablecimiento.prototype.establecimientoId,
  UgccEstablecimientoRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccEstablecimiento, dataSource);
  }
}
