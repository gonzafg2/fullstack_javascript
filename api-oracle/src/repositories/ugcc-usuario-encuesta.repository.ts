import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccUsuarioEncuesta, UgccUsuarioEncuestaRelations} from '../models';

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
