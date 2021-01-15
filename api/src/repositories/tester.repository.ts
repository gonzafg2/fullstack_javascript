import {DefaultCrudRepository} from '@loopback/repository';
import {Tester, TesterRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TesterRepository extends DefaultCrudRepository<
  Tester,
  typeof Tester.prototype.id,
  TesterRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Tester, dataSource);
  }
}
