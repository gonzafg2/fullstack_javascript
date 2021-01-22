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
import {UgccEncuesta} from '../models';
import {UgccEncuestaRepository} from '../repositories';

export class EncuestaController {
  constructor(
    @repository(UgccEncuestaRepository)
    public ugccEncuestaRepository : UgccEncuestaRepository,
  ) {}

  @post('/ugcc-encuestas')
  @response(200, {
    description: 'UgccEncuesta model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccEncuesta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccEncuesta, {
            title: 'NewUgccEncuesta',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccEncuesta: Omit<UgccEncuesta, 'id'>,
  ): Promise<UgccEncuesta> {
    return this.ugccEncuestaRepository.create(ugccEncuesta);
  }

  @get('/ugcc-encuestas/count')
  @response(200, {
    description: 'UgccEncuesta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccEncuesta) where?: Where<UgccEncuesta>,
  ): Promise<Count> {
    return this.ugccEncuestaRepository.count(where);
  }

  @get('/ugcc-encuestas')
  @response(200, {
    description: 'Array of UgccEncuesta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccEncuesta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccEncuesta) filter?: Filter<UgccEncuesta>,
  ): Promise<UgccEncuesta[]> {
    return this.ugccEncuestaRepository.find(filter);
  }

  @patch('/ugcc-encuestas')
  @response(200, {
    description: 'UgccEncuesta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccEncuesta, {partial: true}),
        },
      },
    })
    ugccEncuesta: UgccEncuesta,
    @param.where(UgccEncuesta) where?: Where<UgccEncuesta>,
  ): Promise<Count> {
    return this.ugccEncuestaRepository.updateAll(ugccEncuesta, where);
  }

  @get('/ugcc-encuestas/{id}')
  @response(200, {
    description: 'UgccEncuesta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccEncuesta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccEncuesta, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccEncuesta>
  ): Promise<UgccEncuesta> {
    return this.ugccEncuestaRepository.findById(id, filter);
  }

  @patch('/ugcc-encuestas/{id}')
  @response(204, {
    description: 'UgccEncuesta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccEncuesta, {partial: true}),
        },
      },
    })
    ugccEncuesta: UgccEncuesta,
  ): Promise<void> {
    await this.ugccEncuestaRepository.updateById(id, ugccEncuesta);
  }

  @put('/ugcc-encuestas/{id}')
  @response(204, {
    description: 'UgccEncuesta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccEncuesta: UgccEncuesta,
  ): Promise<void> {
    await this.ugccEncuestaRepository.replaceById(id, ugccEncuesta);
  }

  @del('/ugcc-encuestas/{id}')
  @response(204, {
    description: 'UgccEncuesta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccEncuestaRepository.deleteById(id);
  }
}
