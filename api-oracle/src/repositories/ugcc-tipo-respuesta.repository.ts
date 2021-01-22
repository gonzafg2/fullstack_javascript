import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccTipoRespuesta, UgccTipoRespuestaRelations} from '../models';

export class UgccTipoRespuestaRepository extends DefaultCrudRepository<
  UgccTipoRespuesta,
  typeof UgccTipoRespuesta.prototype.tipoId,
  UgccTipoRespuestaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccTipoRespuesta, dataSource);
  }
}
