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
import {UgccUnidad} from '../models';
import {UgccUnidadRepository} from '../repositories';

export class UnidadController {
  constructor(
    @repository(UgccUnidadRepository)
    public ugccUnidadRepository : UgccUnidadRepository,
  ) {}

  @post('/ugcc-unidads')
  @response(200, {
    description: 'UgccUnidad model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccUnidad)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUnidad, {
            title: 'NewUgccUnidad',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccUnidad: Omit<UgccUnidad, 'id'>,
  ): Promise<UgccUnidad> {
    return this.ugccUnidadRepository.create(ugccUnidad);
  }

  @get('/ugcc-unidads/count')
  @response(200, {
    description: 'UgccUnidad model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccUnidad) where?: Where<UgccUnidad>,
  ): Promise<Count> {
    return this.ugccUnidadRepository.count(where);
  }

  @get('/ugcc-unidads')
  @response(200, {
    description: 'Array of UgccUnidad model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccUnidad, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccUnidad) filter?: Filter<UgccUnidad>,
  ): Promise<UgccUnidad[]> {
    return this.ugccUnidadRepository.find(filter);
  }

  @patch('/ugcc-unidads')
  @response(200, {
    description: 'UgccUnidad PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUnidad, {partial: true}),
        },
      },
    })
    ugccUnidad: UgccUnidad,
    @param.where(UgccUnidad) where?: Where<UgccUnidad>,
  ): Promise<Count> {
    return this.ugccUnidadRepository.updateAll(ugccUnidad, where);
  }

  @get('/ugcc-unidads/{id}')
  @response(200, {
    description: 'UgccUnidad model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccUnidad, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccUnidad, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccUnidad>
  ): Promise<UgccUnidad> {
    return this.ugccUnidadRepository.findById(id, filter);
  }

  @patch('/ugcc-unidads/{id}')
  @response(204, {
    description: 'UgccUnidad PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUnidad, {partial: true}),
        },
      },
    })
    ugccUnidad: UgccUnidad,
  ): Promise<void> {
    await this.ugccUnidadRepository.updateById(id, ugccUnidad);
  }

  @put('/ugcc-unidads/{id}')
  @response(204, {
    description: 'UgccUnidad PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccUnidad: UgccUnidad,
  ): Promise<void> {
    await this.ugccUnidadRepository.replaceById(id, ugccUnidad);
  }

  @del('/ugcc-unidads/{id}')
  @response(204, {
    description: 'UgccUnidad DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccUnidadRepository.deleteById(id);
  }
}
