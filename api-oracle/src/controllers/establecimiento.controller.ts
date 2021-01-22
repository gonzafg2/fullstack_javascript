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
import {UgccEstablecimiento} from '../models';
import {UgccEstablecimientoRepository} from '../repositories';

export class EstablecimientoController {
  constructor(
    @repository(UgccEstablecimientoRepository)
    public ugccEstablecimientoRepository : UgccEstablecimientoRepository,
  ) {}

  @post('/ugcc-establecimientos')
  @response(200, {
    description: 'UgccEstablecimiento model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccEstablecimiento)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccEstablecimiento, {
            title: 'NewUgccEstablecimiento',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccEstablecimiento: Omit<UgccEstablecimiento, 'id'>,
  ): Promise<UgccEstablecimiento> {
    return this.ugccEstablecimientoRepository.create(ugccEstablecimiento);
  }

  @get('/ugcc-establecimientos/count')
  @response(200, {
    description: 'UgccEstablecimiento model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccEstablecimiento) where?: Where<UgccEstablecimiento>,
  ): Promise<Count> {
    return this.ugccEstablecimientoRepository.count(where);
  }

  @get('/ugcc-establecimientos')
  @response(200, {
    description: 'Array of UgccEstablecimiento model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccEstablecimiento, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccEstablecimiento) filter?: Filter<UgccEstablecimiento>,
  ): Promise<UgccEstablecimiento[]> {
    return this.ugccEstablecimientoRepository.find(filter);
  }

  @patch('/ugcc-establecimientos')
  @response(200, {
    description: 'UgccEstablecimiento PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccEstablecimiento, {partial: true}),
        },
      },
    })
    ugccEstablecimiento: UgccEstablecimiento,
    @param.where(UgccEstablecimiento) where?: Where<UgccEstablecimiento>,
  ): Promise<Count> {
    return this.ugccEstablecimientoRepository.updateAll(ugccEstablecimiento, where);
  }

  @get('/ugcc-establecimientos/{id}')
  @response(200, {
    description: 'UgccEstablecimiento model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccEstablecimiento, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccEstablecimiento, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccEstablecimiento>
  ): Promise<UgccEstablecimiento> {
    return this.ugccEstablecimientoRepository.findById(id, filter);
  }

  @patch('/ugcc-establecimientos/{id}')
  @response(204, {
    description: 'UgccEstablecimiento PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccEstablecimiento, {partial: true}),
        },
      },
    })
    ugccEstablecimiento: UgccEstablecimiento,
  ): Promise<void> {
    await this.ugccEstablecimientoRepository.updateById(id, ugccEstablecimiento);
  }

  @put('/ugcc-establecimientos/{id}')
  @response(204, {
    description: 'UgccEstablecimiento PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccEstablecimiento: UgccEstablecimiento,
  ): Promise<void> {
    await this.ugccEstablecimientoRepository.replaceById(id, ugccEstablecimiento);
  }

  @del('/ugcc-establecimientos/{id}')
  @response(204, {
    description: 'UgccEstablecimiento DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccEstablecimientoRepository.deleteById(id);
  }
}
