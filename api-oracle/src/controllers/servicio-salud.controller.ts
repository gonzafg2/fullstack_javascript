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
import {UgccServicioSalud} from '../models';
import {UgccServicioSaludRepository} from '../repositories';

export class ServicioSaludController {
  constructor(
    @repository(UgccServicioSaludRepository)
    public ugccServicioSaludRepository : UgccServicioSaludRepository,
  ) {}

  @post('/ugcc-servicio-saluds')
  @response(200, {
    description: 'UgccServicioSalud model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccServicioSalud)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccServicioSalud, {
            title: 'NewUgccServicioSalud',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccServicioSalud: Omit<UgccServicioSalud, 'id'>,
  ): Promise<UgccServicioSalud> {
    return this.ugccServicioSaludRepository.create(ugccServicioSalud);
  }

  @get('/ugcc-servicio-saluds/count')
  @response(200, {
    description: 'UgccServicioSalud model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccServicioSalud) where?: Where<UgccServicioSalud>,
  ): Promise<Count> {
    return this.ugccServicioSaludRepository.count(where);
  }

  @get('/ugcc-servicio-saluds')
  @response(200, {
    description: 'Array of UgccServicioSalud model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccServicioSalud, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccServicioSalud) filter?: Filter<UgccServicioSalud>,
  ): Promise<UgccServicioSalud[]> {
    return this.ugccServicioSaludRepository.find(filter);
  }

  @patch('/ugcc-servicio-saluds')
  @response(200, {
    description: 'UgccServicioSalud PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccServicioSalud, {partial: true}),
        },
      },
    })
    ugccServicioSalud: UgccServicioSalud,
    @param.where(UgccServicioSalud) where?: Where<UgccServicioSalud>,
  ): Promise<Count> {
    return this.ugccServicioSaludRepository.updateAll(ugccServicioSalud, where);
  }

  @get('/ugcc-servicio-saluds/{id}')
  @response(200, {
    description: 'UgccServicioSalud model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccServicioSalud, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccServicioSalud, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccServicioSalud>
  ): Promise<UgccServicioSalud> {
    return this.ugccServicioSaludRepository.findById(id, filter);
  }

  @patch('/ugcc-servicio-saluds/{id}')
  @response(204, {
    description: 'UgccServicioSalud PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccServicioSalud, {partial: true}),
        },
      },
    })
    ugccServicioSalud: UgccServicioSalud,
  ): Promise<void> {
    await this.ugccServicioSaludRepository.updateById(id, ugccServicioSalud);
  }

  @put('/ugcc-servicio-saluds/{id}')
  @response(204, {
    description: 'UgccServicioSalud PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccServicioSalud: UgccServicioSalud,
  ): Promise<void> {
    await this.ugccServicioSaludRepository.replaceById(id, ugccServicioSalud);
  }

  @del('/ugcc-servicio-saluds/{id}')
  @response(204, {
    description: 'UgccServicioSalud DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccServicioSaludRepository.deleteById(id);
  }
}
