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
import {UgccAgrupaRespuestas} from '../models';
import {UgccAgrupaRespuestasRepository} from '../repositories';

export class AgrupaRespuestasController {
  constructor(
    @repository(UgccAgrupaRespuestasRepository)
    public ugccAgrupaRespuestasRepository : UgccAgrupaRespuestasRepository,
  ) {}

  @post('/ugcc-agrupa-respuestas')
  @response(200, {
    description: 'UgccAgrupaRespuestas model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccAgrupaRespuestas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccAgrupaRespuestas, {
            title: 'NewUgccAgrupaRespuestas',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccAgrupaRespuestas: Omit<UgccAgrupaRespuestas, 'id'>,
  ): Promise<UgccAgrupaRespuestas> {
    return this.ugccAgrupaRespuestasRepository.create(ugccAgrupaRespuestas);
  }

  @get('/ugcc-agrupa-respuestas/count')
  @response(200, {
    description: 'UgccAgrupaRespuestas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccAgrupaRespuestas) where?: Where<UgccAgrupaRespuestas>,
  ): Promise<Count> {
    return this.ugccAgrupaRespuestasRepository.count(where);
  }

  @get('/ugcc-agrupa-respuestas')
  @response(200, {
    description: 'Array of UgccAgrupaRespuestas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccAgrupaRespuestas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccAgrupaRespuestas) filter?: Filter<UgccAgrupaRespuestas>,
  ): Promise<UgccAgrupaRespuestas[]> {
    return this.ugccAgrupaRespuestasRepository.find(filter);
  }

  @patch('/ugcc-agrupa-respuestas')
  @response(200, {
    description: 'UgccAgrupaRespuestas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccAgrupaRespuestas, {partial: true}),
        },
      },
    })
    ugccAgrupaRespuestas: UgccAgrupaRespuestas,
    @param.where(UgccAgrupaRespuestas) where?: Where<UgccAgrupaRespuestas>,
  ): Promise<Count> {
    return this.ugccAgrupaRespuestasRepository.updateAll(ugccAgrupaRespuestas, where);
  }

  @get('/ugcc-agrupa-respuestas/{id}')
  @response(200, {
    description: 'UgccAgrupaRespuestas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccAgrupaRespuestas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccAgrupaRespuestas, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccAgrupaRespuestas>
  ): Promise<UgccAgrupaRespuestas> {
    return this.ugccAgrupaRespuestasRepository.findById(id, filter);
  }

  @patch('/ugcc-agrupa-respuestas/{id}')
  @response(204, {
    description: 'UgccAgrupaRespuestas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccAgrupaRespuestas, {partial: true}),
        },
      },
    })
    ugccAgrupaRespuestas: UgccAgrupaRespuestas,
  ): Promise<void> {
    await this.ugccAgrupaRespuestasRepository.updateById(id, ugccAgrupaRespuestas);
  }

  @put('/ugcc-agrupa-respuestas/{id}')
  @response(204, {
    description: 'UgccAgrupaRespuestas PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccAgrupaRespuestas: UgccAgrupaRespuestas,
  ): Promise<void> {
    await this.ugccAgrupaRespuestasRepository.replaceById(id, ugccAgrupaRespuestas);
  }

  @del('/ugcc-agrupa-respuestas/{id}')
  @response(204, {
    description: 'UgccAgrupaRespuestas DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccAgrupaRespuestasRepository.deleteById(id);
  }
}
