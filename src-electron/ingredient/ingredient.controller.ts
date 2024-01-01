import {Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import IngredientService from './ingredient.service';
import CreateIngredientDto from 'app/src-electron/ingredient/create-ingredient.dto';
import UpdateIngredientDto from 'app/src-electron/ingredient/update-ingredient.dto';

@Controller('ingredients')
export default class IngredientController {

  constructor(
    @Inject(IngredientService) private readonly service: IngredientService,
  ) {
  }

  @Get()
  list() {
    return this.service.list();
  }

  @Post()
  save(@Body() request: CreateIngredientDto) {
    return this.service.save(request);
  }

  @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() request: UpdateIngredientDto) {
        return this.service.update(id, request)
    }

  @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.service.delete(id);
    }

}
