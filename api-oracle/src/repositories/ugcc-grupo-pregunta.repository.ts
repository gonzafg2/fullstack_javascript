import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccGrupoPregunta, UgccGrupoPreguntaRelations} from '../models';

export class UgccGrupoPreguntaRepository extends DefaultCrudRepository<
  UgccGrupoPregunta,
  typeof UgccGrupoPregunta.prototype.grupoId,
  UgccGrupoPreguntaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccGrupoPregunta, dataSource);
  }
}
