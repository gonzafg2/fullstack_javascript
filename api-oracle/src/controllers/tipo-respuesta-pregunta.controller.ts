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
import {UgccTipoRespuestaPregunta} from '../models';
import {UgccTipoRespuestaPreguntaRepository} from '../repositories';

export class TipoRespuestaPreguntaController {
  constructor(
    @repository(UgccTipoRespuestaPreguntaRepository)
    public ugccTipoRespuestaPreguntaRepository : UgccTipoRespuestaPreguntaRepository,
  ) {}

  @post('/ugcc-tipo-respuesta-preguntas')
  @response(200, {
    description: 'UgccTipoRespuestaPregunta model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccTipoRespuestaPregunta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccTipoRespuestaPregunta, {
            title: 'NewUgccTipoRespuestaPregunta',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccTipoRespuestaPregunta: Omit<UgccTipoRespuestaPregunta, 'id'>,
  ): Promise<UgccTipoRespuestaPregunta> {
    return this.ugccTipoRespuestaPreguntaRepository.create(ugccTipoRespuestaPregunta);
  }

  @get('/ugcc-tipo-respuesta-preguntas/count')
  @response(200, {
    description: 'UgccTipoRespuestaPregunta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccTipoRespuestaPregunta) where?: Where<UgccTipoRespuestaPregunta>,
  ): Promise<Count> {
    return this.ugccTipoRespuestaPreguntaRepository.count(where);
  }

  @get('/ugcc-tipo-respuesta-preguntas')
  @response(200, {
    description: 'Array of UgccTipoRespuestaPregunta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccTipoRespuestaPregunta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccTipoRespuestaPregunta) filter?: Filter<UgccTipoRespuestaPregunta>,
  ): Promise<UgccTipoRespuestaPregunta[]> {
    return this.ugccTipoRespuestaPreguntaRepository.find(filter);
  }

  @patch('/ugcc-tipo-respuesta-preguntas')
  @response(200, {
    description: 'UgccTipoRespuestaPregunta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccTipoRespuestaPregunta, {partial: true}),
        },
      },
    })
    ugccTipoRespuestaPregunta: UgccTipoRespuestaPregunta,
    @param.where(UgccTipoRespuestaPregunta) where?: Where<UgccTipoRespuestaPregunta>,
  ): Promise<Count> {
    return this.ugccTipoRespuestaPreguntaRepository.updateAll(ugccTipoRespuestaPregunta, where);
  }

  @get('/ugcc-tipo-respuesta-preguntas/{id}')
  @response(200, {
    description: 'UgccTipoRespuestaPregunta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccTipoRespuestaPregunta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccTipoRespuestaPregunta, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccTipoRespuestaPregunta>
  ): Promise<UgccTipoRespuestaPregunta> {
    return this.ugccTipoRespuestaPreguntaRepository.findById(id, filter);
  }

  @patch('/ugcc-tipo-respuesta-preguntas/{id}')
  @response(204, {
    description: 'UgccTipoRespuestaPregunta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccTipoRespuestaPregunta, {partial: true}),
        },
      },
    })
    ugccTipoRespuestaPregunta: UgccTipoRespuestaPregunta,
  ): Promise<void> {
    await this.ugccTipoRespuestaPreguntaRepository.updateById(id, ugccTipoRespuestaPregunta);
  }

  @put('/ugcc-tipo-respuesta-preguntas/{id}')
  @response(204, {
    description: 'UgccTipoRespuestaPregunta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccTipoRespuestaPregunta: UgccTipoRespuestaPregunta,
  ): Promise<void> {
    await this.ugccTipoRespuestaPreguntaRepository.replaceById(id, ugccTipoRespuestaPregunta);
  }

  @del('/ugcc-tipo-respuesta-preguntas/{id}')
  @response(204, {
    description: 'UgccTipoRespuestaPregunta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccTipoRespuestaPreguntaRepository.deleteById(id);
  }
}
