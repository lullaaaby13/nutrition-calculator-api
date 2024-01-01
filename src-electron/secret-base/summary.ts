import {Ingredient} from 'src/types/ingredient';
import {SecretBase, SecretBaseComponent} from 'src/types/secret-base';
import {ReceiptComponent} from 'src/types/receipt';

export class ComponentSummary {
  private _amount = 0;
  private _unitPrice = 0;
  private _calories = 0;
  private _carbohydrates = 0;
  private _sugars = 0;
  private _protein = 0;
  private _caffeine = 0;
  private _fat = 0;
  private _saturatedFat = 0;

  public addIngredient(amount: number, ingredient: Ingredient) {
    const ratio = Number(amount) / 100;
    // console.log(amount, ingredient, ratio);
    this._amount += Number(amount);
    this._unitPrice += Number(ingredient.unitPrice) * ratio;
    this._calories += Number(ingredient.calories) * ratio;
    this._carbohydrates += Number(ingredient.carbohydrates) * ratio;
    this._sugars += Number(ingredient.sugars) * ratio;
    this._protein += Number(ingredient.protein) * ratio;
    this._caffeine += Number(ingredient.caffeine) * ratio;
    this._fat += Number(ingredient.fat) * ratio;
    this._saturatedFat += Number(ingredient.saturatedFat) * ratio;
  }

  public addSecretBase(amount: number, secretBase: SecretBase) {
    const ratio =  amount / secretBase.totalAmount;
    console.log(secretBase)
    secretBase.components.forEach(it => {
      this.addIngredient(it.amount * ratio, it.ingredient);
    });
  }

  public addSecretBaseComponents(secretBaseComponents: SecretBaseComponent[]) {
    secretBaseComponents.forEach(it => {
      this.addIngredient(it.amount, it.ingredient);
    });
  }

  public addReceiptComponents(components: ReceiptComponent[]) {
    components.forEach(it => {
      // console.log(it.amount, it.component.name)
      if (it.component instanceof SecretBase) {
        this.addSecretBase(it.amount, it.component);
      } else {
        this.addIngredient(it.amount, it.component);
      }
    });
  }

  // public addReceipt(amount: number, receipt: Receipt) {
  //   const ratio =  amount / receipt.totalAmount;
  //   receipt.components.forEach(it => {
  //     this.addIngredient(it.amount * ratio, it.component);
  //   });
  // }


  get amount(): number {
    return this._amount;
  }

  get unitPrice(): number {
    return this._unitPrice;
  }

  get calories(): number {
    return this._calories;
  }

  get carbohydrates(): number {
    return this._carbohydrates;
  }

  get sugars(): number {
    return this._sugars;
  }

  get protein(): number {
    return this._protein;
  }

  get caffeine(): number {
    return this._caffeine;
  }

  get fat(): number {
    return this._fat;
  }

  get saturatedFat(): number {
    return this._saturatedFat;
  }
}
//
// export function summaryOfSecretBaseComponents(components: SecretBaseComponent[]): ComponentSummary {
//   return components.reduce((acc, cur) => {
//     const ratio = Number(cur.amount) / 100;
//     acc.amount += Number(cur.amount);
//     acc.unitPrice += Number(cur.ingredient.unitPrice) * ratio;
//     acc.calories += Number(cur.ingredient.calories) * ratio;
//     acc.carbohydrates += Number(cur.ingredient.carbohydrates) * ratio;
//     acc.sugars += Number(cur.ingredient.sugars) * ratio;
//     acc.protein += Number(cur.ingredient.protein) * ratio;
//     acc.caffeine += Number(cur.ingredient.caffeine) * ratio;
//     acc.fat += Number(cur.ingredient.fat) * ratio;
//     acc.saturatedFat += Number(cur.ingredient.saturatedFat) * ratio;
//     return acc;
//   }, {
//     amount: 0,
//     unitPrice: 0,
//     caffeine: 0,
//     calories: 0,
//     carbohydrates: 0,
//     fat: 0,
//     protein: 0,
//     saturatedFat: 0,
//     sugars: 0,
//   });
// }
//
// export function summaryOfReceiptComponents(components: ReceiptComponent[]) {
//
//   const groupBy = components.reduce((acc, cur) => {
//     if (cur.source instanceof SecretBase) {
//       // @ts-ignore
//       acc.secretBases.push(cur);
//     }  else {
//       // @ts-ignore
//       acc.ingredients.push(cur);
//     }
//     return acc;
//   }, {
//     secretBases: [],
//     ingredients: [],
//   });
//
//   const componentSummary = summaryOfSecretBaseComponents(groupBy.secretBases);
//
// }
