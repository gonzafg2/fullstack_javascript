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
import {UgccPregunta} from '../models';
import {UgccPreguntaRepository} from '../repositories';

export class PreguntaController {
  constructor(
    @repository(UgccPreguntaRepository)
    public ugccPreguntaRepository : UgccPreguntaRepository,
  ) {}

  @post('/ugcc-preguntas')
  @response(200, {
    description: 'UgccPregunta model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccPregunta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccPregunta, {
            title: 'NewUgccPregunta',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccPregunta: Omit<UgccPregunta, 'id'>,
  ): Promise<UgccPregunta> {
    return this.ugccPreguntaRepository.create(ugccPregunta);
  }

  @get('/ugcc-preguntas/count')
  @response(200, {
    description: 'UgccPregunta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccPregunta) where?: Where<UgccPregunta>,
  ): Promise<Count> {
    return this.ugccPreguntaRepository.count(where);
  }

  @get('/ugcc-preguntas')
  @response(200, {
    description: 'Array of UgccPregunta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccPregunta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccPregunta) filter?: Filter<UgccPregunta>,
  ): Promise<UgccPregunta[]> {
    return this.ugccPreguntaRepository.find(filter);
  }

  @patch('/ugcc-preguntas')
  @response(200, {
    description: 'UgccPregunta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccPregunta, {partial: true}),
        },
      },
    })
    ugccPregunta: UgccPregunta,
    @param.where(UgccPregunta) where?: Where<UgccPregunta>,
  ): Promise<Count> {
    return this.ugccPreguntaRepository.updateAll(ugccPregunta, where);
  }

  @get('/ugcc-preguntas/{id}')
  @response(200, {
    description: 'UgccPregunta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccPregunta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccPregunta, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccPregunta>
  ): Promise<UgccPregunta> {
    return this.ugccPreguntaRepository.findById(id, filter);
  }

  @patch('/ugcc-preguntas/{id}')
  @response(204, {
    description: 'UgccPregunta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccPregunta, {partial: true}),
        },
      },
    })
    ugccPregunta: UgccPregunta,
  ): Promise<void> {
    await this.ugccPreguntaRepository.updateById(id, ugccPregunta);
  }

  @put('/ugcc-preguntas/{id}')
  @response(204, {
    description: 'UgccPregunta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccPregunta: UgccPregunta,
  ): Promise<void> {
    await this.ugccPreguntaRepository.replaceById(id, ugccPregunta);
  }

  @del('/ugcc-preguntas/{id}')
  @response(204, {
    description: 'UgccPregunta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccPreguntaRepository.deleteById(id);
  }
}
