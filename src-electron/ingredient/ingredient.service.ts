import {Inject, Injectable, Logger} from '@nestjs/common';
import Ingredient, {valueOfIngredientCategory} from './ingredient';
import CreateIngredientDto from 'app/src-electron/ingredient/create-ingredient.dto';
import IngredientRepository from 'app/src-electron/ingredient/ingredient.repository';
import UpdateIngredientDto from 'app/src-electron/ingredient/update-ingredient.dto';


@Injectable()
export default class IngredientService {

    private readonly logger = new Logger(IngredientService.name);

    constructor(
        @Inject(IngredientRepository) private readonly ingredientRepository: IngredientRepository,
    ) {
    }

    list(): Ingredient[] {
        return this.ingredientRepository.list();
    }

    save(request: CreateIngredientDto) {

        if (this.ingredientRepository.findByName(request.name)) {
            throw new Error('같은 이름의 성분이 이미 존재 합니다.');
        }

        const ingredient = new Ingredient();
        const ingredientCategory = valueOfIngredientCategory(request.category);
        ingredient.setName(request.name);
        ingredient.setCategory(ingredientCategory);
        ingredient.setMemo(request.memo);
        ingredient.setCalories(request.calories);
        ingredient.setUnitPrice(request.unitPrice);
        ingredient.setCarbohydrates(request.carbohydrates);
        ingredient.setSugars(request.sugars);
        ingredient.setProtein(request.protein);
        ingredient.setCaffeine(request.caffeine);
        ingredient.setFat(request.fat);
        ingredient.setSaturatedFat(request.saturatedFat);
        ingredient.setCreatedAt(new Date());
        ingredient.setUpdatedAt(new Date());
        this.ingredientRepository.save(ingredient);
        this.logger.log(`원재료 저장 완료: ${ingredient.getName()}`);
    }

    delete(id: number) {
        this.ingredientRepository.delete(id);
    }

    update(id: number, request: UpdateIngredientDto) {
        const ingredient = this.ingredientRepository.findById(id);
        console.log('check update ingredient', id, request, ingredient)
        if (ingredient) {
            ingredient.setName(request.name);
            ingredient.setCategory(valueOfIngredientCategory(request.category));
            ingredient.setMemo(request.memo);
            ingredient.setUnitPrice(request.unitPrice);
            ingredient.setCalories(request.calories);
            ingredient.setCarbohydrates(request.carbohydrates);
            ingredient.setSugars(request.sugars);
            ingredient.setProtein(request.protein);
            ingredient.setCaffeine(request.caffeine);
            ingredient.setFat(request.fat);
            ingredient.setSaturatedFat(request.saturatedFat);
            this.ingredientRepository.save(ingredient);
        }
    }

    findById(id: number) {
        return this.ingredientRepository.findById(id);
    }
}
