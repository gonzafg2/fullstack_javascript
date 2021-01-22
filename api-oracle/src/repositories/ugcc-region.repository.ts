import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccRegion, UgccRegionRelations} from '../models';

export class UgccRegionRepository extends DefaultCrudRepository<
  UgccRegion,
  typeof UgccRegion.prototype.regionId,
  UgccRegionRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccRegion, dataSource);
  }
}
