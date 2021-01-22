import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccUnidadEstablecimiento, UgccUnidadEstablecimientoRelations} from '../models';

export class UgccUnidadEstablecimientoRepository extends DefaultCrudRepository<
  UgccUnidadEstablecimiento,
  typeof UgccUnidadEstablecimiento.prototype.unidadId,
  UgccUnidadEstablecimientoRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccUnidadEstablecimiento, dataSource);
  }
}
