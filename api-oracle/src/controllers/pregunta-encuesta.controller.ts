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
import {UgccPreguntaEncuesta} from '../models';
import {UgccPreguntaEncuestaRepository} from '../repositories';

export class PreguntaEncuestaController {
  constructor(
    @repository(UgccPreguntaEncuestaRepository)
    public ugccPreguntaEncuestaRepository : UgccPreguntaEncuestaRepository,
  ) {}

  @post('/ugcc-pregunta-encuestas')
  @response(200, {
    description: 'UgccPreguntaEncuesta model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccPreguntaEncuesta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccPreguntaEncuesta, {
            title: 'NewUgccPreguntaEncuesta',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccPreguntaEncuesta: Omit<UgccPreguntaEncuesta, 'id'>,
  ): Promise<UgccPreguntaEncuesta> {
    return this.ugccPreguntaEncuestaRepository.create(ugccPreguntaEncuesta);
  }

  @get('/ugcc-pregunta-encuestas/count')
  @response(200, {
    description: 'UgccPreguntaEncuesta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccPreguntaEncuesta) where?: Where<UgccPreguntaEncuesta>,
  ): Promise<Count> {
    return this.ugccPreguntaEncuestaRepository.count(where);
  }

  @get('/ugcc-pregunta-encuestas')
  @response(200, {
    description: 'Array of UgccPreguntaEncuesta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccPreguntaEncuesta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccPreguntaEncuesta) filter?: Filter<UgccPreguntaEncuesta>,
  ): Promise<UgccPreguntaEncuesta[]> {
    return this.ugccPreguntaEncuestaRepository.find(filter);
  }

  @patch('/ugcc-pregunta-encuestas')
  @response(200, {
    description: 'UgccPreguntaEncuesta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccPreguntaEncuesta, {partial: true}),
        },
      },
    })
    ugccPreguntaEncuesta: UgccPreguntaEncuesta,
    @param.where(UgccPreguntaEncuesta) where?: Where<UgccPreguntaEncuesta>,
  ): Promise<Count> {
    return this.ugccPreguntaEncuestaRepository.updateAll(ugccPreguntaEncuesta, where);
  }

  @get('/ugcc-pregunta-encuestas/{id}')
  @response(200, {
    description: 'UgccPreguntaEncuesta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccPreguntaEncuesta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccPreguntaEncuesta, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccPreguntaEncuesta>
  ): Promise<UgccPreguntaEncuesta> {
    return this.ugccPreguntaEncuestaRepository.findById(id, filter);
  }

  @patch('/ugcc-pregunta-encuestas/{id}')
  @response(204, {
    description: 'UgccPreguntaEncuesta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccPreguntaEncuesta, {partial: true}),
        },
      },
    })
    ugccPreguntaEncuesta: UgccPreguntaEncuesta,
  ): Promise<void> {
    await this.ugccPreguntaEncuestaRepository.updateById(id, ugccPreguntaEncuesta);
  }

  @put('/ugcc-pregunta-encuestas/{id}')
  @response(204, {
    description: 'UgccPreguntaEncuesta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccPreguntaEncuesta: UgccPreguntaEncuesta,
  ): Promise<void> {
    await this.ugccPreguntaEncuestaRepository.replaceById(id, ugccPreguntaEncuesta);
  }

  @del('/ugcc-pregunta-encuestas/{id}')
  @response(204, {
    description: 'UgccPreguntaEncuesta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccPreguntaEncuestaRepository.deleteById(id);
  }
}
