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
import {UgccReenvioEncuesta} from '../models';
import {UgccReenvioEncuestaRepository} from '../repositories';

export class ReenvioEncuestaController {
  constructor(
    @repository(UgccReenvioEncuestaRepository)
    public ugccReenvioEncuestaRepository : UgccReenvioEncuestaRepository,
  ) {}

  @post('/ugcc-reenvio-encuestas')
  @response(200, {
    description: 'UgccReenvioEncuesta model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccReenvioEncuesta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccReenvioEncuesta, {
            title: 'NewUgccReenvioEncuesta',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccReenvioEncuesta: Omit<UgccReenvioEncuesta, 'id'>,
  ): Promise<UgccReenvioEncuesta> {
    return this.ugccReenvioEncuestaRepository.create(ugccReenvioEncuesta);
  }

  @get('/ugcc-reenvio-encuestas/count')
  @response(200, {
    description: 'UgccReenvioEncuesta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccReenvioEncuesta) where?: Where<UgccReenvioEncuesta>,
  ): Promise<Count> {
    return this.ugccReenvioEncuestaRepository.count(where);
  }

  @get('/ugcc-reenvio-encuestas')
  @response(200, {
    description: 'Array of UgccReenvioEncuesta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccReenvioEncuesta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccReenvioEncuesta) filter?: Filter<UgccReenvioEncuesta>,
  ): Promise<UgccReenvioEncuesta[]> {
    return this.ugccReenvioEncuestaRepository.find(filter);
  }

  @patch('/ugcc-reenvio-encuestas')
  @response(200, {
    description: 'UgccReenvioEncuesta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccReenvioEncuesta, {partial: true}),
        },
      },
    })
    ugccReenvioEncuesta: UgccReenvioEncuesta,
    @param.where(UgccReenvioEncuesta) where?: Where<UgccReenvioEncuesta>,
  ): Promise<Count> {
    return this.ugccReenvioEncuestaRepository.updateAll(ugccReenvioEncuesta, where);
  }

  @get('/ugcc-reenvio-encuestas/{id}')
  @response(200, {
    description: 'UgccReenvioEncuesta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccReenvioEncuesta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccReenvioEncuesta, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccReenvioEncuesta>
  ): Promise<UgccReenvioEncuesta> {
    return this.ugccReenvioEncuestaRepository.findById(id, filter);
  }

  @patch('/ugcc-reenvio-encuestas/{id}')
  @response(204, {
    description: 'UgccReenvioEncuesta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccReenvioEncuesta, {partial: true}),
        },
      },
    })
    ugccReenvioEncuesta: UgccReenvioEncuesta,
  ): Promise<void> {
    await this.ugccReenvioEncuestaRepository.updateById(id, ugccReenvioEncuesta);
  }

  @put('/ugcc-reenvio-encuestas/{id}')
  @response(204, {
    description: 'UgccReenvioEncuesta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccReenvioEncuesta: UgccReenvioEncuesta,
  ): Promise<void> {
    await this.ugccReenvioEncuestaRepository.replaceById(id, ugccReenvioEncuesta);
  }

  @del('/ugcc-reenvio-encuestas/{id}')
  @response(204, {
    description: 'UgccReenvioEncuesta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccReenvioEncuestaRepository.deleteById(id);
  }
}
