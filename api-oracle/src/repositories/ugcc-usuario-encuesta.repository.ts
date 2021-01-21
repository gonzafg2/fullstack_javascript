import {DefaultCrudRepository} from '@loopback/repository';
import {UgccUsuarioEncuesta, UgccUsuarioEncuestaRelations} from '../models';
import {OracleDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UgccUsuarioEncuestaRepository extends DefaultCrudRepository<
  UgccUsuarioEncuesta,
  typeof UgccUsuarioEncuesta.prototype.usuarioId,
  UgccUsuarioEncuestaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccUsuarioEncuesta, dataSource);
  }
}
