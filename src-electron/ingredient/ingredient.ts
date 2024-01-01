export const IngredientCategory = {
  FRESH: {
    name: 'fresh',
    label: '신선 식품',
  },
  FRUITS: {
    name: 'fruits',
    label: '과일 & 채소',
  },
  FLOUR: {
    name: 'flour',
    label: '가루류 & 곡류',
  },
  COFFEE: {
    name: 'coffee',
    label: '커피 원두 & 차',
  },
  TOPPING: {
    name: 'topping',
    label: '토핑 재료',
  },
  ADDITIVES: {
    name: 'additives',
    label: '식품 첨가물',
  },
  PACKAGING: {
    name: 'packaging',
    label: '포장 용품',
  },
}

export type IngredientCategory = typeof IngredientCategory[keyof typeof IngredientCategory];
export const valueOfIngredientCategory = (name: string): IngredientCategory => {
  switch (name.toUpperCase()) {
    case 'FRESH':
      return IngredientCategory.FRESH;
    case 'FRUITS':
      return IngredientCategory.FRUITS;
    case 'FLOUR':
      return IngredientCategory.FLOUR;
    case 'COFFEE':
      return IngredientCategory.COFFEE;
    case 'TOPPING':
      return IngredientCategory.TOPPING;
    case 'ADDITIVES':
      return IngredientCategory.ADDITIVES;
    case 'PACKAGING':
      return IngredientCategory.PACKAGING;
    default:
      throw new Error(`식자재 카테고리를 찾을 수 없습니다. [name = ${name}]`);
  }
}


export default class Ingredient {
  private id?: number;
  private name = '';
  private memo?: string = '';
  private category: IngredientCategory = IngredientCategory.FRESH;
  private calories = 0;
  private unitPrice = 0;
  private carbohydrates = 0;
  private sugars = 0;
  private protein = 0;
  private caffeine = 0;
  private fat = 0;
  private saturatedFat = 0;
  private createdAt?: Date;
  private updatedAt?: Date;

  public getId(): number | undefined {
    return this.id;
  }

  public setId(value: number) {
    if (!value || value < 1) {
      throw new Error('식자재 ID는 1보다 작을 수 없습니다.');
    }

    this.id = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    if (!value) {
      throw new Error('이름을 입력해 주세요.');
    }
    this.name = value;
  }

  public getMemo(): string {
    return this.memo || '';
  }

  public setMemo(value: string) {
    this.memo = value;
  }

  public getCategory(): IngredientCategory {
    return this.category;
  }

  public setCategory(value: IngredientCategory) {
    this.category = value;
  }

  public getCalories(): number {
    return this.calories;
  }

  public setCalories(value: number) {
    if (value < 0) {
      throw new Error('칼로리는 0보다 작을 수 없습니다.');
    }
    this.calories = Number(value);
  }

  public getUnitPrice(): number {
    return this.unitPrice;
  }

  public setUnitPrice(value: number) {
    if (value < 0) {
      throw new Error('단위 가격은 0보다 작을 수 없습니다.');
    }
    this.unitPrice = Number(value);
  }

  public getCarbohydrates(): number {
    return this.carbohydrates;
  }

  public setCarbohydrates(value: number) {
    if (value < 0) {
      throw new Error('탄수화물은 0보다 작을 수 없습니다.');
    }
    this.carbohydrates = Number(value);
  }

  public getSugars(): number {
    return this.sugars;
  }

  public setSugars(value: number) {
    if (value < 0) {
      throw new Error('당류는 0보다 작을 수 없습니다.');
    }
    this.sugars = Number(value);
  }

  public getProtein(): number {
    return this.protein;
  }

  public setProtein(value: number) {
    if (value < 0) {
      throw new Error('단백질은 0보다 작을 수 없습니다.');
    }
    this.protein = Number(value);
  }

  public getCaffeine(): number {
    return this.caffeine;
  }

  public setCaffeine(value: number) {
    if (value < 0) {
      throw new Error('카페인은 0보다 작을 수 없습니다.');
    }
    this.caffeine = Number(value);
  }

  public getFat(): number {
    return this.fat;
  }

  public setFat(value: number) {
    if (value < 0) {
      throw new Error('지방은 0보다 작을 수 없습니다.');
    }
    this.fat = Number(value);
  }

  public getSaturatedFat(): number {
    return this.saturatedFat;
  }

  public setSaturatedFat(value: number) {
    if (value < 0) {
      throw new Error('포화지방산은 0보다 작을 수 없습니다.');
    }
    this.saturatedFat = Number(value);
  }

  public getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  public setCreatedAt(value: Date) {
    if (!this.createdAt) {
      this.createdAt = value;
    }
  }

  public getUpdatedAt(): Date | undefined{
    return this.updatedAt;
  }

  public setUpdatedAt(value: Date) {
    this.updatedAt = value;
  }

}
