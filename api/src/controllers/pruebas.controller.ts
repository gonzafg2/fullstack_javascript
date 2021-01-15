import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Tester} from '../models';
import {TesterRepository} from '../repositories';

export class PruebasController {
  constructor(
    @repository(TesterRepository)
    public testerRepository : TesterRepository,
  ) {}

  @post('/testers', {
    responses: {
      '200': {
        description: 'Tester model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tester)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tester, {
            title: 'NewTester',
            exclude: ['id'],
          }),
        },
      },
    })
    tester: Omit<Tester, 'id'>,
  ): Promise<Tester> {
    return this.testerRepository.create(tester);
  }

  @get('/testers/count', {
    responses: {
      '200': {
        description: 'Tester model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Tester) where?: Where<Tester>,
  ): Promise<Count> {
    return this.testerRepository.count(where);
  }

  @get('/testers', {
    responses: {
      '200': {
        description: 'Array of Tester model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Tester, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Tester) filter?: Filter<Tester>,
  ): Promise<Tester[]> {
    return this.testerRepository.find(filter);
  }

  @patch('/testers', {
    responses: {
      '200': {
        description: 'Tester PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tester, {partial: true}),
        },
      },
    })
    tester: Tester,
    @param.where(Tester) where?: Where<Tester>,
  ): Promise<Count> {
    return this.testerRepository.updateAll(tester, where);
  }

  @get('/testers/{id}', {
    responses: {
      '200': {
        description: 'Tester model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Tester, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tester, {exclude: 'where'}) filter?: FilterExcludingWhere<Tester>
  ): Promise<Tester> {
    return this.testerRepository.findById(id, filter);
  }

  @patch('/testers/{id}', {
    responses: {
      '204': {
        description: 'Tester PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tester, {partial: true}),
        },
      },
    })
    tester: Tester,
  ): Promise<void> {
    await this.testerRepository.updateById(id, tester);
  }

  @put('/testers/{id}', {
    responses: {
      '204': {
        description: 'Tester PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tester: Tester,
  ): Promise<void> {
    await this.testerRepository.replaceById(id, tester);
  }

  @del('/testers/{id}', {
    responses: {
      '204': {
        description: 'Tester DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.testerRepository.deleteById(id);
  }
}
