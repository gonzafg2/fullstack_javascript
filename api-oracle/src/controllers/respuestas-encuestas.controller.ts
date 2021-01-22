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
import {UgccRespuestasEncuestas} from '../models';
import {UgccRespuestasEncuestasRepository} from '../repositories';

export class RespuestasEncuestasController {
  constructor(
    @repository(UgccRespuestasEncuestasRepository)
    public ugccRespuestasEncuestasRepository : UgccRespuestasEncuestasRepository,
  ) {}

  @post('/ugcc-respuestas-encuestas')
  @response(200, {
    description: 'UgccRespuestasEncuestas model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccRespuestasEncuestas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccRespuestasEncuestas, {
            title: 'NewUgccRespuestasEncuestas',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccRespuestasEncuestas: Omit<UgccRespuestasEncuestas, 'id'>,
  ): Promise<UgccRespuestasEncuestas> {
    return this.ugccRespuestasEncuestasRepository.create(ugccRespuestasEncuestas);
  }

  @get('/ugcc-respuestas-encuestas/count')
  @response(200, {
    description: 'UgccRespuestasEncuestas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccRespuestasEncuestas) where?: Where<UgccRespuestasEncuestas>,
  ): Promise<Count> {
    return this.ugccRespuestasEncuestasRepository.count(where);
  }

  @get('/ugcc-respuestas-encuestas')
  @response(200, {
    description: 'Array of UgccRespuestasEncuestas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccRespuestasEncuestas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccRespuestasEncuestas) filter?: Filter<UgccRespuestasEncuestas>,
  ): Promise<UgccRespuestasEncuestas[]> {
    return this.ugccRespuestasEncuestasRepository.find(filter);
  }

  @patch('/ugcc-respuestas-encuestas')
  @response(200, {
    description: 'UgccRespuestasEncuestas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccRespuestasEncuestas, {partial: true}),
        },
      },
    })
    ugccRespuestasEncuestas: UgccRespuestasEncuestas,
    @param.where(UgccRespuestasEncuestas) where?: Where<UgccRespuestasEncuestas>,
  ): Promise<Count> {
    return this.ugccRespuestasEncuestasRepository.updateAll(ugccRespuestasEncuestas, where);
  }

  @get('/ugcc-respuestas-encuestas/{id}')
  @response(200, {
    description: 'UgccRespuestasEncuestas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccRespuestasEncuestas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccRespuestasEncuestas, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccRespuestasEncuestas>
  ): Promise<UgccRespuestasEncuestas> {
    return this.ugccRespuestasEncuestasRepository.findById(id, filter);
  }

  @patch('/ugcc-respuestas-encuestas/{id}')
  @response(204, {
    description: 'UgccRespuestasEncuestas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccRespuestasEncuestas, {partial: true}),
        },
      },
    })
    ugccRespuestasEncuestas: UgccRespuestasEncuestas,
  ): Promise<void> {
    await this.ugccRespuestasEncuestasRepository.updateById(id, ugccRespuestasEncuestas);
  }

  @put('/ugcc-respuestas-encuestas/{id}')
  @response(204, {
    description: 'UgccRespuestasEncuestas PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccRespuestasEncuestas: UgccRespuestasEncuestas,
  ): Promise<void> {
    await this.ugccRespuestasEncuestasRepository.replaceById(id, ugccRespuestasEncuestas);
  }

  @del('/ugcc-respuestas-encuestas/{id}')
  @response(204, {
    description: 'UgccRespuestasEncuestas DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccRespuestasEncuestasRepository.deleteById(id);
  }
}
