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
import {UgccHorarioEnvio} from '../models';
import {UgccHorarioEnvioRepository} from '../repositories';

export class HorarioEnvioController {
  constructor(
    @repository(UgccHorarioEnvioRepository)
    public ugccHorarioEnvioRepository : UgccHorarioEnvioRepository,
  ) {}

  @post('/ugcc-horario-envios')
  @response(200, {
    description: 'UgccHorarioEnvio model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccHorarioEnvio)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccHorarioEnvio, {
            title: 'NewUgccHorarioEnvio',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccHorarioEnvio: Omit<UgccHorarioEnvio, 'id'>,
  ): Promise<UgccHorarioEnvio> {
    return this.ugccHorarioEnvioRepository.create(ugccHorarioEnvio);
  }

  @get('/ugcc-horario-envios/count')
  @response(200, {
    description: 'UgccHorarioEnvio model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccHorarioEnvio) where?: Where<UgccHorarioEnvio>,
  ): Promise<Count> {
    return this.ugccHorarioEnvioRepository.count(where);
  }

  @get('/ugcc-horario-envios')
  @response(200, {
    description: 'Array of UgccHorarioEnvio model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccHorarioEnvio, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccHorarioEnvio) filter?: Filter<UgccHorarioEnvio>,
  ): Promise<UgccHorarioEnvio[]> {
    return this.ugccHorarioEnvioRepository.find(filter);
  }

  @patch('/ugcc-horario-envios')
  @response(200, {
    description: 'UgccHorarioEnvio PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccHorarioEnvio, {partial: true}),
        },
      },
    })
    ugccHorarioEnvio: UgccHorarioEnvio,
    @param.where(UgccHorarioEnvio) where?: Where<UgccHorarioEnvio>,
  ): Promise<Count> {
    return this.ugccHorarioEnvioRepository.updateAll(ugccHorarioEnvio, where);
  }

  @get('/ugcc-horario-envios/{id}')
  @response(200, {
    description: 'UgccHorarioEnvio model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccHorarioEnvio, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccHorarioEnvio, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccHorarioEnvio>
  ): Promise<UgccHorarioEnvio> {
    return this.ugccHorarioEnvioRepository.findById(id, filter);
  }

  @patch('/ugcc-horario-envios/{id}')
  @response(204, {
    description: 'UgccHorarioEnvio PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccHorarioEnvio, {partial: true}),
        },
      },
    })
    ugccHorarioEnvio: UgccHorarioEnvio,
  ): Promise<void> {
    await this.ugccHorarioEnvioRepository.updateById(id, ugccHorarioEnvio);
  }

  @put('/ugcc-horario-envios/{id}')
  @response(204, {
    description: 'UgccHorarioEnvio PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccHorarioEnvio: UgccHorarioEnvio,
  ): Promise<void> {
    await this.ugccHorarioEnvioRepository.replaceById(id, ugccHorarioEnvio);
  }

  @del('/ugcc-horario-envios/{id}')
  @response(204, {
    description: 'UgccHorarioEnvio DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccHorarioEnvioRepository.deleteById(id);
  }
}
