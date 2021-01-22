import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {UgccUniEstUsuarioEnc, UgccUniEstUsuarioEncRelations} from '../models';

export class UgccUniEstUsuarioEncRepository extends DefaultCrudRepository<
  UgccUniEstUsuarioEnc,
  typeof UgccUniEstUsuarioEnc.prototype.id,
  UgccUniEstUsuarioEncRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(UgccUniEstUsuarioEnc, dataSource);
  }
}
