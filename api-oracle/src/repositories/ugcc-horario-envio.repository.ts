import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccHorarioEnvio, UgccHorarioEnvioRelations} from '../models';

export class UgccHorarioEnvioRepository extends DefaultCrudRepository<
  UgccHorarioEnvio,
  typeof UgccHorarioEnvio.prototype.horarioId,
  UgccHorarioEnvioRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccHorarioEnvio, dataSource);
  }
}
