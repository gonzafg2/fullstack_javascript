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
import {UgccRegion} from '../models';
import {UgccRegionRepository} from '../repositories';

export class RegionController {
  constructor(
    @repository(UgccRegionRepository)
    public ugccRegionRepository : UgccRegionRepository,
  ) {}

  @post('/ugcc-regions')
  @response(200, {
    description: 'UgccRegion model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccRegion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccRegion, {
            title: 'NewUgccRegion',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccRegion: Omit<UgccRegion, 'id'>,
  ): Promise<UgccRegion> {
    return this.ugccRegionRepository.create(ugccRegion);
  }

  @get('/ugcc-regions/count')
  @response(200, {
    description: 'UgccRegion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccRegion) where?: Where<UgccRegion>,
  ): Promise<Count> {
    return this.ugccRegionRepository.count(where);
  }

  @get('/ugcc-regions')
  @response(200, {
    description: 'Array of UgccRegion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccRegion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccRegion) filter?: Filter<UgccRegion>,
  ): Promise<UgccRegion[]> {
    return this.ugccRegionRepository.find(filter);
  }

  @patch('/ugcc-regions')
  @response(200, {
    description: 'UgccRegion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccRegion, {partial: true}),
        },
      },
    })
    ugccRegion: UgccRegion,
    @param.where(UgccRegion) where?: Where<UgccRegion>,
  ): Promise<Count> {
    return this.ugccRegionRepository.updateAll(ugccRegion, where);
  }

  @get('/ugcc-regions/{id}')
  @response(200, {
    description: 'UgccRegion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccRegion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccRegion, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccRegion>
  ): Promise<UgccRegion> {
    return this.ugccRegionRepository.findById(id, filter);
  }

  @patch('/ugcc-regions/{id}')
  @response(204, {
    description: 'UgccRegion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccRegion, {partial: true}),
        },
      },
    })
    ugccRegion: UgccRegion,
  ): Promise<void> {
    await this.ugccRegionRepository.updateById(id, ugccRegion);
  }

  @put('/ugcc-regions/{id}')
  @response(204, {
    description: 'UgccRegion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccRegion: UgccRegion,
  ): Promise<void> {
    await this.ugccRegionRepository.replaceById(id, ugccRegion);
  }

  @del('/ugcc-regions/{id}')
  @response(204, {
    description: 'UgccRegion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccRegionRepository.deleteById(id);
  }
}
