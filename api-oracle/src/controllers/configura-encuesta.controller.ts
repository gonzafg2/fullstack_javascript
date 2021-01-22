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
import {UgccConfiguraEncuesta} from '../models';
import {UgccConfiguraEncuestaRepository} from '../repositories';

export class ConfiguraEncuestaController {
  constructor(
    @repository(UgccConfiguraEncuestaRepository)
    public ugccConfiguraEncuestaRepository : UgccConfiguraEncuestaRepository,
  ) {}

  @post('/ugcc-configura-encuestas')
  @response(200, {
    description: 'UgccConfiguraEncuesta model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccConfiguraEncuesta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccConfiguraEncuesta, {
            title: 'NewUgccConfiguraEncuesta',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccConfiguraEncuesta: Omit<UgccConfiguraEncuesta, 'id'>,
  ): Promise<UgccConfiguraEncuesta> {
    return this.ugccConfiguraEncuestaRepository.create(ugccConfiguraEncuesta);
  }

  @get('/ugcc-configura-encuestas/count')
  @response(200, {
    description: 'UgccConfiguraEncuesta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccConfiguraEncuesta) where?: Where<UgccConfiguraEncuesta>,
  ): Promise<Count> {
    return this.ugccConfiguraEncuestaRepository.count(where);
  }

  @get('/ugcc-configura-encuestas')
  @response(200, {
    description: 'Array of UgccConfiguraEncuesta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccConfiguraEncuesta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccConfiguraEncuesta) filter?: Filter<UgccConfiguraEncuesta>,
  ): Promise<UgccConfiguraEncuesta[]> {
    return this.ugccConfiguraEncuestaRepository.find(filter);
  }

  @patch('/ugcc-configura-encuestas')
  @response(200, {
    description: 'UgccConfiguraEncuesta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccConfiguraEncuesta, {partial: true}),
        },
      },
    })
    ugccConfiguraEncuesta: UgccConfiguraEncuesta,
    @param.where(UgccConfiguraEncuesta) where?: Where<UgccConfiguraEncuesta>,
  ): Promise<Count> {
    return this.ugccConfiguraEncuestaRepository.updateAll(ugccConfiguraEncuesta, where);
  }

  @get('/ugcc-configura-encuestas/{id}')
  @response(200, {
    description: 'UgccConfiguraEncuesta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccConfiguraEncuesta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccConfiguraEncuesta, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccConfiguraEncuesta>
  ): Promise<UgccConfiguraEncuesta> {
    return this.ugccConfiguraEncuestaRepository.findById(id, filter);
  }

  @patch('/ugcc-configura-encuestas/{id}')
  @response(204, {
    description: 'UgccConfiguraEncuesta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccConfiguraEncuesta, {partial: true}),
        },
      },
    })
    ugccConfiguraEncuesta: UgccConfiguraEncuesta,
  ): Promise<void> {
    await this.ugccConfiguraEncuestaRepository.updateById(id, ugccConfiguraEncuesta);
  }

  @put('/ugcc-configura-encuestas/{id}')
  @response(204, {
    description: 'UgccConfiguraEncuesta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccConfiguraEncuesta: UgccConfiguraEncuesta,
  ): Promise<void> {
    await this.ugccConfiguraEncuestaRepository.replaceById(id, ugccConfiguraEncuesta);
  }

  @del('/ugcc-configura-encuestas/{id}')
  @response(204, {
    description: 'UgccConfiguraEncuesta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccConfiguraEncuestaRepository.deleteById(id);
  }
}
