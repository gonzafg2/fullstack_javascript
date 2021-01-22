import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccMacrozona, UgccMacrozonaRelations} from '../models';

export class UgccMacrozonaRepository extends DefaultCrudRepository<
  UgccMacrozona,
  typeof UgccMacrozona.prototype.macrozonaId,
  UgccMacrozonaRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccMacrozona, dataSource);
  }
}
