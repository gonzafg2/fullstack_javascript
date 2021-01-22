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
import {UgccGrupoPregunta} from '../models';
import {UgccGrupoPreguntaRepository} from '../repositories';

export class GrupoPreguntaController {
  constructor(
    @repository(UgccGrupoPreguntaRepository)
    public ugccGrupoPreguntaRepository : UgccGrupoPreguntaRepository,
  ) {}

  @post('/ugcc-grupo-preguntas')
  @response(200, {
    description: 'UgccGrupoPregunta model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccGrupoPregunta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccGrupoPregunta, {
            title: 'NewUgccGrupoPregunta',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccGrupoPregunta: Omit<UgccGrupoPregunta, 'id'>,
  ): Promise<UgccGrupoPregunta> {
    return this.ugccGrupoPreguntaRepository.create(ugccGrupoPregunta);
  }

  @get('/ugcc-grupo-preguntas/count')
  @response(200, {
    description: 'UgccGrupoPregunta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccGrupoPregunta) where?: Where<UgccGrupoPregunta>,
  ): Promise<Count> {
    return this.ugccGrupoPreguntaRepository.count(where);
  }

  @get('/ugcc-grupo-preguntas')
  @response(200, {
    description: 'Array of UgccGrupoPregunta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccGrupoPregunta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccGrupoPregunta) filter?: Filter<UgccGrupoPregunta>,
  ): Promise<UgccGrupoPregunta[]> {
    return this.ugccGrupoPreguntaRepository.find(filter);
  }

  @patch('/ugcc-grupo-preguntas')
  @response(200, {
    description: 'UgccGrupoPregunta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccGrupoPregunta, {partial: true}),
        },
      },
    })
    ugccGrupoPregunta: UgccGrupoPregunta,
    @param.where(UgccGrupoPregunta) where?: Where<UgccGrupoPregunta>,
  ): Promise<Count> {
    return this.ugccGrupoPreguntaRepository.updateAll(ugccGrupoPregunta, where);
  }

  @get('/ugcc-grupo-preguntas/{id}')
  @response(200, {
    description: 'UgccGrupoPregunta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccGrupoPregunta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccGrupoPregunta, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccGrupoPregunta>
  ): Promise<UgccGrupoPregunta> {
    return this.ugccGrupoPreguntaRepository.findById(id, filter);
  }

  @patch('/ugcc-grupo-preguntas/{id}')
  @response(204, {
    description: 'UgccGrupoPregunta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccGrupoPregunta, {partial: true}),
        },
      },
    })
    ugccGrupoPregunta: UgccGrupoPregunta,
  ): Promise<void> {
    await this.ugccGrupoPreguntaRepository.updateById(id, ugccGrupoPregunta);
  }

  @put('/ugcc-grupo-preguntas/{id}')
  @response(204, {
    description: 'UgccGrupoPregunta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccGrupoPregunta: UgccGrupoPregunta,
  ): Promise<void> {
    await this.ugccGrupoPreguntaRepository.replaceById(id, ugccGrupoPregunta);
  }

  @del('/ugcc-grupo-preguntas/{id}')
  @response(204, {
    description: 'UgccGrupoPregunta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccGrupoPreguntaRepository.deleteById(id);
  }
}
