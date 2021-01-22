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
import {UgccComuna} from '../models';
import {UgccComunaRepository} from '../repositories';

export class ComunaController {
  constructor(
    @repository(UgccComunaRepository)
    public ugccComunaRepository : UgccComunaRepository,
  ) {}

  @post('/ugcc-comunas')
  @response(200, {
    description: 'UgccComuna model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccComuna)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccComuna, {
            title: 'NewUgccComuna',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccComuna: Omit<UgccComuna, 'id'>,
  ): Promise<UgccComuna> {
    return this.ugccComunaRepository.create(ugccComuna);
  }

  @get('/ugcc-comunas/count')
  @response(200, {
    description: 'UgccComuna model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccComuna) where?: Where<UgccComuna>,
  ): Promise<Count> {
    return this.ugccComunaRepository.count(where);
  }

  @get('/ugcc-comunas')
  @response(200, {
    description: 'Array of UgccComuna model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccComuna, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccComuna) filter?: Filter<UgccComuna>,
  ): Promise<UgccComuna[]> {
    return this.ugccComunaRepository.find(filter);
  }

  @patch('/ugcc-comunas')
  @response(200, {
    description: 'UgccComuna PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccComuna, {partial: true}),
        },
      },
    })
    ugccComuna: UgccComuna,
    @param.where(UgccComuna) where?: Where<UgccComuna>,
  ): Promise<Count> {
    return this.ugccComunaRepository.updateAll(ugccComuna, where);
  }

  @get('/ugcc-comunas/{id}')
  @response(200, {
    description: 'UgccComuna model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccComuna, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccComuna, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccComuna>
  ): Promise<UgccComuna> {
    return this.ugccComunaRepository.findById(id, filter);
  }

  @patch('/ugcc-comunas/{id}')
  @response(204, {
    description: 'UgccComuna PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccComuna, {partial: true}),
        },
      },
    })
    ugccComuna: UgccComuna,
  ): Promise<void> {
    await this.ugccComunaRepository.updateById(id, ugccComuna);
  }

  @put('/ugcc-comunas/{id}')
  @response(204, {
    description: 'UgccComuna PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccComuna: UgccComuna,
  ): Promise<void> {
    await this.ugccComunaRepository.replaceById(id, ugccComuna);
  }

  @del('/ugcc-comunas/{id}')
  @response(204, {
    description: 'UgccComuna DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccComunaRepository.deleteById(id);
  }
}
