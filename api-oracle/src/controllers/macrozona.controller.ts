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
import {UgccMacrozona} from '../models';
import {UgccMacrozonaRepository} from '../repositories';

export class MacrozonaController {
  constructor(
    @repository(UgccMacrozonaRepository)
    public ugccMacrozonaRepository : UgccMacrozonaRepository,
  ) {}

  @post('/ugcc-macrozonas')
  @response(200, {
    description: 'UgccMacrozona model instance',
    content: {'application/json': {schema: getModelSchemaRef(UgccMacrozona)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccMacrozona, {
            title: 'NewUgccMacrozona',
            exclude: ['id'],
          }),
        },
      },
    })
    ugccMacrozona: Omit<UgccMacrozona, 'id'>,
  ): Promise<UgccMacrozona> {
    return this.ugccMacrozonaRepository.create(ugccMacrozona);
  }

  @get('/ugcc-macrozonas/count')
  @response(200, {
    description: 'UgccMacrozona model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UgccMacrozona) where?: Where<UgccMacrozona>,
  ): Promise<Count> {
    return this.ugccMacrozonaRepository.count(where);
  }

  @get('/ugcc-macrozonas')
  @response(200, {
    description: 'Array of UgccMacrozona model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UgccMacrozona, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UgccMacrozona) filter?: Filter<UgccMacrozona>,
  ): Promise<UgccMacrozona[]> {
    return this.ugccMacrozonaRepository.find(filter);
  }

  @patch('/ugcc-macrozonas')
  @response(200, {
    description: 'UgccMacrozona PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccMacrozona, {partial: true}),
        },
      },
    })
    ugccMacrozona: UgccMacrozona,
    @param.where(UgccMacrozona) where?: Where<UgccMacrozona>,
  ): Promise<Count> {
    return this.ugccMacrozonaRepository.updateAll(ugccMacrozona, where);
  }

  @get('/ugcc-macrozonas/{id}')
  @response(200, {
    description: 'UgccMacrozona model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UgccMacrozona, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UgccMacrozona, {exclude: 'where'}) filter?: FilterExcludingWhere<UgccMacrozona>
  ): Promise<UgccMacrozona> {
    return this.ugccMacrozonaRepository.findById(id, filter);
  }

  @patch('/ugcc-macrozonas/{id}')
  @response(204, {
    description: 'UgccMacrozona PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UgccMacrozona, {partial: true}),
        },
      },
    })
    ugccMacrozona: UgccMacrozona,
  ): Promise<void> {
    await this.ugccMacrozonaRepository.updateById(id, ugccMacrozona);
  }

  @put('/ugcc-macrozonas/{id}')
  @response(204, {
    description: 'UgccMacrozona PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ugccMacrozona: UgccMacrozona,
  ): Promise<void> {
    await this.ugccMacrozonaRepository.replaceById(id, ugccMacrozona);
  }

  @del('/ugcc-macrozonas/{id}')
  @response(204, {
    description: 'UgccMacrozona DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ugccMacrozonaRepository.deleteById(id);
  }
}
