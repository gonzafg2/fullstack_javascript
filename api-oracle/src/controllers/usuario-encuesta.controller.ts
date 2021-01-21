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
import {UgccUsuarioEncuesta} from '../models';
import {UgccUsuarioEncuestaRepository} from '../repositories';

export class UsuarioEncuestaController {
  constructor(
    @repository(UgccUsuarioEncuestaRepository)
    public ugccUsuarioEncuestaRepository : UgccUsuarioEncuestaRepository,
  ) {}

  @post('/ugcc-usuario-encuestas', {
    responses: {
      '200': {
        description: 'UgccUsuarioEncuesta model instance',
        content: {'application/json': {schema: getModelSchemaRef(UgccUsuarioEncuesta)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUsuarioEncuesta, {
            title: 'NewUgccUsuarioEncuesta',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccUsuarioEncuesta: Omit<UgccUsuarioEncuesta, 'id'>,
  ): Promise<UgccUsuarioEncuesta> {
    return this.ugccUsuarioEncuestaRepository.create(ugccUsuarioEncuesta);
  }

  @get('/ugcc-usuario-encuestas/count', {
    responses: {
      '200': {
        description: 'UgccUsuarioEncuesta model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(UgccUsuarioEncuesta) where?: Where<UgccUsuarioEncuesta>,
  ): Promise<Count> {
    return this.ugccUsuarioEncuestaRepository.count(where);
  }

  @get('/ugcc-usuario-encuestas', {
    responses: {
      '200': {
        description: 'Array of UgccUsuarioEncuesta model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(UgccUsuarioEncuesta, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(UgccUsuarioEncuesta) filter?: Filter<UgccUsuarioEncuesta>,
  ): Promise<UgccUsuarioEncuesta[]> {
    return this.ugccUsuarioEncuestaRepository.find(filter);
  }

  @patch('/ugcc-usuario-encuestas', {
    responses: {
      '200': {
        description: 'UgccUsuarioEncuesta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUsuarioEncuesta, {partial: true}),
        },
      },
    })
    ugccUsuarioEncuesta: UgccUsuarioEncuesta,
    @param.where(UgccUsuarioEncuesta) where?: Where<UgccUsuarioEncuesta>,
  ): Promise<Count> {
    return this.ugccUsuarioEncuestaRepository.updateAll(ugccUsuarioEncuesta, where);
  }

  @get('/ugcc-usuario-encuestas/{id}', {
    responses: {
      '200': {
        description: 'UgccUsuarioEncuesta model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(UgccUsuarioEncuesta, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccUsuarioEncuesta, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccUsuarioEncuesta>
  ): Promise<UgccUsuarioEncuesta> {
    return this.ugccUsuarioEncuestaRepository.findById(id, filter);
  }

  @patch('/ugcc-usuario-encuestas/{id}', {
    responses: {
      '204': {
        description: 'UgccUsuarioEncuesta PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUsuarioEncuesta, {partial: true}),
        },
      },
    })
    ugccUsuarioEncuesta: UgccUsuarioEncuesta,
  ): Promise<void> {
    await this.ugccUsuarioEncuestaRepository.updateById(id, ugccUsuarioEncuesta);
  }

  @put('/ugcc-usuario-encuestas/{id}', {
    responses: {
      '204': {
        description: 'UgccUsuarioEncuesta PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccUsuarioEncuesta: UgccUsuarioEncuesta,
  ): Promise<void> {
    await this.ugccUsuarioEncuestaRepository.replaceById(id, ugccUsuarioEncuesta);
  }

  @del('/ugcc-usuario-encuestas/{id}', {
    responses: {
      '204': {
        description: 'UgccUsuarioEncuesta DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccUsuarioEncuestaRepository.deleteById(id);
  }
}
