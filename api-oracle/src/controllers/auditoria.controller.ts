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
  response,
} from '@loopback/rest';
import {UgccAuditoria} from '../models';
import {UgccAuditoriaRepository} from '../repositories';

export class AuditoriaController {
  constructor(
    @repository(UgccAuditoriaRepository)
    public ugccAuditoriaRepository : UgccAuditoriaRepository,
  ) {}

  @post('/ugcc-auditorias')
  @response(200, {
    description: 'UgccAuditoria model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccAuditoria)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccAuditoria, {
            title: 'NewUgccAuditoria',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccAuditoria: Omit<UgccAuditoria, 'id'>,
  ): Promise<UgccAuditoria> {
    return this.ugccAuditoriaRepository.create(ugccAuditoria);
  }

  @get('/ugcc-auditorias/count')
  @response(200, {
    description: 'UgccAuditoria model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccAuditoria) where?: Where<UgccAuditoria>,
  ): Promise<Count> {
    return this.ugccAuditoriaRepository.count(where);
  }

  @get('/ugcc-auditorias')
  @response(200, {
    description: 'Array of UgccAuditoria model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccAuditoria, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccAuditoria) filter?: Filter<UgccAuditoria>,
  ): Promise<UgccAuditoria[]> {
    return this.ugccAuditoriaRepository.find(filter);
  }

  @patch('/ugcc-auditorias')
  @response(200, {
    description: 'UgccAuditoria PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccAuditoria, {partial: true}),
        },
      },
    })
    ugccAuditoria: UgccAuditoria,
    @param.where(UgccAuditoria) where?: Where<UgccAuditoria>,
  ): Promise<Count> {
    return this.ugccAuditoriaRepository.updateAll(ugccAuditoria, where);
  }

  @get('/ugcc-auditorias/{id}')
  @response(200, {
    description: 'UgccAuditoria model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccAuditoria, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccAuditoria, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccAuditoria>
  ): Promise<UgccAuditoria> {
    return this.ugccAuditoriaRepository.findById(id, filter);
  }

  @patch('/ugcc-auditorias/{id}')
  @response(204, {
    description: 'UgccAuditoria PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccAuditoria, {partial: true}),
        },
      },
    })
    ugccAuditoria: UgccAuditoria,
  ): Promise<void> {
    await this.ugccAuditoriaRepository.updateById(id, ugccAuditoria);
  }

  @put('/ugcc-auditorias/{id}')
  @response(204, {
    description: 'UgccAuditoria PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccAuditoria: UgccAuditoria,
  ): Promise<void> {
    await this.ugccAuditoriaRepository.replaceById(id, ugccAuditoria);
  }

  @del('/ugcc-auditorias/{id}')
  @response(204, {
    description: 'UgccAuditoria DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccAuditoriaRepository.deleteById(id);
  }
}
