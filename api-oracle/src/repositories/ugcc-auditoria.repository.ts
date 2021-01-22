import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccAuditoria, UgccAuditoriaRelations} from '../models';

export class UgccAuditoriaRepository extends DefaultCrudRepository<
  UgccAuditoria,
  typeof UgccAuditoria.prototype.auditoriaId,
  UgccAuditoriaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccAuditoria, dataSource);
  }
}
