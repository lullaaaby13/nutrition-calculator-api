import {Module} from '@nestjs/common';
import IngredientService from './ingredient.service';
import IngredientController from './ingredient.controller';
import IngredientRepository from './ingredient.repository';

@Module({
  controllers: [IngredientController],
  providers: [IngredientService, IngredientRepository],
  exports: [IngredientService],
})
export default class IngredientModule {

}
