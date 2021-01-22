import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccServicioSalud, UgccServicioSaludRelations} from '../models';

export class UgccServicioSaludRepository extends DefaultCrudRepository<
  UgccServicioSalud,
  typeof UgccServicioSalud.prototype.servicioId,
  UgccServicioSaludRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccServicioSalud, dataSource);
  }
}
