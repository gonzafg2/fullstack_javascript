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
import {UgccTipoRespuesta} from '../models';
import {UgccTipoRespuestaRepository} from '../repositories';

export class TipoRespuestaController {
  constructor(
    @repository(UgccTipoRespuestaRepository)
    public ugccTipoRespuestaRepository : UgccTipoRespuestaRepository,
  ) {}

  @post('/ugcc-tipo-respuestas')
  @response(200, {
    description: 'UgccTipoRespuesta model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccTipoRespuesta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccTipoRespuesta, {
            title: 'NewUgccTipoRespuesta',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccTipoRespuesta: Omit<UgccTipoRespuesta, 'id'>,
  ): Promise<UgccTipoRespuesta> {
    return this.ugccTipoRespuestaRepository.create(ugccTipoRespuesta);
  }

  @get('/ugcc-tipo-respuestas/count')
  @response(200, {
    description: 'UgccTipoRespuesta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccTipoRespuesta) where?: Where<UgccTipoRespuesta>,
  ): Promise<Count> {
    return this.ugccTipoRespuestaRepository.count(where);
  }

  @get('/ugcc-tipo-respuestas')
  @response(200, {
    description: 'Array of UgccTipoRespuesta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccTipoRespuesta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccTipoRespuesta) filter?: Filter<UgccTipoRespuesta>,
  ): Promise<UgccTipoRespuesta[]> {
    return this.ugccTipoRespuestaRepository.find(filter);
  }

  @patch('/ugcc-tipo-respuestas')
  @response(200, {
    description: 'UgccTipoRespuesta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccTipoRespuesta, {partial: true}),
        },
      },
    })
    ugccTipoRespuesta: UgccTipoRespuesta,
    @param.where(UgccTipoRespuesta) where?: Where<UgccTipoRespuesta>,
  ): Promise<Count> {
    return this.ugccTipoRespuestaRepository.updateAll(ugccTipoRespuesta, where);
  }

  @get('/ugcc-tipo-respuestas/{id}')
  @response(200, {
    description: 'UgccTipoRespuesta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccTipoRespuesta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccTipoRespuesta, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccTipoRespuesta>
  ): Promise<UgccTipoRespuesta> {
    return this.ugccTipoRespuestaRepository.findById(id, filter);
  }

  @patch('/ugcc-tipo-respuestas/{id}')
  @response(204, {
    description: 'UgccTipoRespuesta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccTipoRespuesta, {partial: true}),
        },
      },
    })
    ugccTipoRespuesta: UgccTipoRespuesta,
  ): Promise<void> {
    await this.ugccTipoRespuestaRepository.updateById(id, ugccTipoRespuesta);
  }

  @put('/ugcc-tipo-respuestas/{id}')
  @response(204, {
    description: 'UgccTipoRespuesta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccTipoRespuesta: UgccTipoRespuesta,
  ): Promise<void> {
    await this.ugccTipoRespuestaRepository.replaceById(id, ugccTipoRespuesta);
  }

  @del('/ugcc-tipo-respuestas/{id}')
  @response(204, {
    description: 'UgccTipoRespuesta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccTipoRespuestaRepository.deleteById(id);
  }
}
