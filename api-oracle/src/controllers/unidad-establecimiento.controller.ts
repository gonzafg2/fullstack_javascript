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
import {UgccUnidadEstablecimiento} from '../models';
import {UgccUnidadEstablecimientoRepository} from '../repositories';

export class UnidadEstablecimientoController {
  constructor(
    @repository(UgccUnidadEstablecimientoRepository)
    public ugccUnidadEstablecimientoRepository : UgccUnidadEstablecimientoRepository,
  ) {}

  @post('/ugcc-unidad-establecimientos')
  @response(200, {
    description: 'UgccUnidadEstablecimiento model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccUnidadEstablecimiento)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUnidadEstablecimiento, {
            title: 'NewUgccUnidadEstablecimiento',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccUnidadEstablecimiento: Omit<UgccUnidadEstablecimiento, 'id'>,
  ): Promise<UgccUnidadEstablecimiento> {
    return this.ugccUnidadEstablecimientoRepository.create(ugccUnidadEstablecimiento);
  }

  @get('/ugcc-unidad-establecimientos/count')
  @response(200, {
    description: 'UgccUnidadEstablecimiento model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccUnidadEstablecimiento) where?: Where<UgccUnidadEstablecimiento>,
  ): Promise<Count> {
    return this.ugccUnidadEstablecimientoRepository.count(where);
  }

  @get('/ugcc-unidad-establecimientos')
  @response(200, {
    description: 'Array of UgccUnidadEstablecimiento model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccUnidadEstablecimiento, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccUnidadEstablecimiento) filter?: Filter<UgccUnidadEstablecimiento>,
  ): Promise<UgccUnidadEstablecimiento[]> {
    return this.ugccUnidadEstablecimientoRepository.find(filter);
  }

  @patch('/ugcc-unidad-establecimientos')
  @response(200, {
    description: 'UgccUnidadEstablecimiento PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUnidadEstablecimiento, {partial: true}),
        },
      },
    })
    ugccUnidadEstablecimiento: UgccUnidadEstablecimiento,
    @param.where(UgccUnidadEstablecimiento) where?: Where<UgccUnidadEstablecimiento>,
  ): Promise<Count> {
    return this.ugccUnidadEstablecimientoRepository.updateAll(ugccUnidadEstablecimiento, where);
  }

  @get('/ugcc-unidad-establecimientos/{id}')
  @response(200, {
    description: 'UgccUnidadEstablecimiento model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccUnidadEstablecimiento, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccUnidadEstablecimiento, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccUnidadEstablecimiento>
  ): Promise<UgccUnidadEstablecimiento> {
    return this.ugccUnidadEstablecimientoRepository.findById(id, filter);
  }

  @patch('/ugcc-unidad-establecimientos/{id}')
  @response(204, {
    description: 'UgccUnidadEstablecimiento PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUnidadEstablecimiento, {partial: true}),
        },
      },
    })
    ugccUnidadEstablecimiento: UgccUnidadEstablecimiento,
  ): Promise<void> {
    await this.ugccUnidadEstablecimientoRepository.updateById(id, ugccUnidadEstablecimiento);
  }

  @put('/ugcc-unidad-establecimientos/{id}')
  @response(204, {
    description: 'UgccUnidadEstablecimiento PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccUnidadEstablecimiento: UgccUnidadEstablecimiento,
  ): Promise<void> {
    await this.ugccUnidadEstablecimientoRepository.replaceById(id, ugccUnidadEstablecimiento);
  }

  @del('/ugcc-unidad-establecimientos/{id}')
  @response(204, {
    description: 'UgccUnidadEstablecimiento DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccUnidadEstablecimientoRepository.deleteById(id);
  }
}
