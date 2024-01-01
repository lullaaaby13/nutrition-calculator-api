import {Inject, Injectable, Logger} from '@nestjs/common';
import Store from 'electron-store';
import Ingredient from 'app/src-electron/ingredient/ingredient';

@Injectable()
export default class IngredientRepository {
  private readonly logger = new Logger(IngredientRepository.name);

  private readonly ingredients: Ingredient[] = [];
  constructor(
    @Inject(Store) private readonly store: Store,
  ) {

    const read: string = this.store.get('ingredients') as string

    if (read) {
      try {
        this.ingredients = Array.from(JSON.parse(read)).map((it: any) => {
          const ingredient = new Ingredient();
          ingredient.setId(it.id);
          ingredient.setName(it.name);
          ingredient.setCategory(it.category);
          ingredient.setMemo(it.memo);
          ingredient.setCalories(it.calories);
          ingredient.setUnitPrice(it.unitPrice);
          ingredient.setCarbohydrates(it.carbohydrates);
          ingredient.setSugars(it.sugars);
          ingredient.setProtein(it.protein);
          ingredient.setCaffeine(it.caffeine);
          ingredient.setFat(it.fat);
          ingredient.setSaturatedFat(it.saturatedFat);
          ingredient.setCreatedAt(new Date(it.createdAt));
          ingredient.setUpdatedAt(new Date(it.updatedAt));
          return ingredient;
        })
      } catch (e) {
        this.store.reset('ingredients');
      }
    }
  }

  list() {
    return this.ingredients;
  }

  save(ingredient: Ingredient) {
    const id = ingredient.getId();
    if (!id) {
      ingredient.setId(this.nextId());
      ingredient.setCreatedAt(new Date());
        ingredient.setUpdatedAt(new Date());
      this.ingredients.push(ingredient);
      this.logger.log(`원재료 추가 [코드 = ${ingredient.getId()}]`);
    } else {
      const findIngredient = this.findById(id);
      if (findIngredient) {
        // findIngredient.setName(ingredient.getName());
        // findIngredient.setCategory(ingredient.getCategory());
        // findIngredient.setMemo(ingredient.getMemo());
        // findIngredient.setCalories(ingredient.getCalories());
        // findIngredient.setUnitPrice(ingredient.getUnitPrice());
        // findIngredient.setCarbohydrates(ingredient.getCarbohydrates());
        // findIngredient.setSugars(ingredient.getSugars());
        // findIngredient.setProtein(ingredient.getProtein());
        // findIngredient.setCaffeine(ingredient.getCaffeine());
        // findIngredient.setFat(ingredient.getFat());
        // findIngredient.setSaturatedFat(ingredient.getSaturatedFat());
        findIngredient.setUpdatedAt(new Date());
        this.ingredients.splice(this.ingredients.indexOf(findIngredient), 1, ingredient);
        this.logger.log(`원재료 업데이트 [코드 = ${ingredient.getId()}]`);
      }
    }

    this.synchronize();
  }

  findById(id: number) {
    return this.ingredients.find(it => it.getId() === id);
  }

  findByName(name: string) {
    return this.ingredients.find(it => it.getName() === name);
  }

  synchronize() {
    this.store.set('ingredients', JSON.stringify(this.ingredients));
  }

  nextId(): number {
    let nextId = Number(this.store.get('ingredientsId')) || 0;
    this.store.set('ingredientsId', ++nextId);
    return nextId;
  }

  clear() {
    this.ingredients.splice(0, this.ingredients.length);
    this.store.reset('ingredients');
    this.store.reset('ingredientsId');
  }

  delete(id: number) {
    const find = this.findById(id);
    if (find) {
      this.ingredients.splice(this.ingredients.indexOf(find), 1);
      this.logger.log(`원재료 삭제 [코드 = ${id}]`);
      this.synchronize();
    }
  }
}
