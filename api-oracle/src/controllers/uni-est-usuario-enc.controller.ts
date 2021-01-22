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
import {UgccUniEstUsuarioEnc} from '../models';
import {UgccUniEstUsuarioEncRepository} from '../repositories';

export class UniEstUsuarioEncController {
  constructor(
    @repository(UgccUniEstUsuarioEncRepository)
    public ugccUniEstUsuarioEncRepository : UgccUniEstUsuarioEncRepository,
  ) {}

  @post('/ugcc-uni-est-usuario-encs')
  @response(200, {
    description: 'UgccUniEstUsuarioEnc model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccUniEstUsuarioEnc)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUniEstUsuarioEnc, {
            title: 'NewUgccUniEstUsuarioEnc',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccUniEstUsuarioEnc: Omit<UgccUniEstUsuarioEnc, 'id'>,
  ): Promise<UgccUniEstUsuarioEnc> {
    return this.ugccUniEstUsuarioEncRepository.create(ugccUniEstUsuarioEnc);
  }

  @get('/ugcc-uni-est-usuario-encs/count')
  @response(200, {
    description: 'UgccUniEstUsuarioEnc model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccUniEstUsuarioEnc) where?: Where<UgccUniEstUsuarioEnc>,
  ): Promise<Count> {
    return this.ugccUniEstUsuarioEncRepository.count(where);
  }

  @get('/ugcc-uni-est-usuario-encs')
  @response(200, {
    description: 'Array of UgccUniEstUsuarioEnc model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccUniEstUsuarioEnc, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccUniEstUsuarioEnc) filter?: Filter<UgccUniEstUsuarioEnc>,
  ): Promise<UgccUniEstUsuarioEnc[]> {
    return this.ugccUniEstUsuarioEncRepository.find(filter);
  }

  @patch('/ugcc-uni-est-usuario-encs')
  @response(200, {
    description: 'UgccUniEstUsuarioEnc PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUniEstUsuarioEnc, {partial: true}),
        },
      },
    })
    ugccUniEstUsuarioEnc: UgccUniEstUsuarioEnc,
    @param.where(UgccUniEstUsuarioEnc) where?: Where<UgccUniEstUsuarioEnc>,
  ): Promise<Count> {
    return this.ugccUniEstUsuarioEncRepository.updateAll(ugccUniEstUsuarioEnc, where);
  }

  @get('/ugcc-uni-est-usuario-encs/{id}')
  @response(200, {
    description: 'UgccUniEstUsuarioEnc model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccUniEstUsuarioEnc, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccUniEstUsuarioEnc, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccUniEstUsuarioEnc>
  ): Promise<UgccUniEstUsuarioEnc> {
    return this.ugccUniEstUsuarioEncRepository.findById(id, filter);
  }

  @patch('/ugcc-uni-est-usuario-encs/{id}')
  @response(204, {
    description: 'UgccUniEstUsuarioEnc PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccUniEstUsuarioEnc, {partial: true}),
        },
      },
    })
    ugccUniEstUsuarioEnc: UgccUniEstUsuarioEnc,
  ): Promise<void> {
    await this.ugccUniEstUsuarioEncRepository.updateById(id, ugccUniEstUsuarioEnc);
  }

  @put('/ugcc-uni-est-usuario-encs/{id}')
  @response(204, {
    description: 'UgccUniEstUsuarioEnc PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccUniEstUsuarioEnc: UgccUniEstUsuarioEnc,
  ): Promise<void> {
    await this.ugccUniEstUsuarioEncRepository.replaceById(id, ugccUniEstUsuarioEnc);
  }

  @del('/ugcc-uni-est-usuario-encs/{id}')
  @response(204, {
    description: 'UgccUniEstUsuarioEnc DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccUniEstUsuarioEncRepository.deleteById(id);
  }
}
