import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccTipoRespuestaPregunta, UgccTipoRespuestaPreguntaRelations} from '../models';

export class UgccTipoRespuestaPreguntaRepository extends DefaultCrudRepository<
  UgccTipoRespuestaPregunta,
  typeof UgccTipoRespuestaPregunta.prototype.preguntaId,
  UgccTipoRespuestaPreguntaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccTipoRespuestaPregunta, dataSource);
  }
}
