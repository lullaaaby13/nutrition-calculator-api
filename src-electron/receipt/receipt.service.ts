import {Inject, Injectable} from '@nestjs/common';
import SecretBaseService from 'app/src-electron/secret-base/secret-base.service';
import IngredientService from 'app/src-electron/ingredient/ingredient.service';
import ReceiptRepository from 'app/src-electron/receipt/receipt.repository';
import {Receipt, ReceiptComponent} from 'app/src-electron/receipt/receipt';
import {SecretBaseComponent} from 'app/src-electron/secret-base/secret-base';

@Injectable()
export default class ReceiptService {

  constructor(
    @Inject(ReceiptRepository) private readonly receiptRepository: ReceiptRepository,
    @Inject(SecretBaseService) private readonly secretBaseService: SecretBaseService,
    @Inject(IngredientService) private readonly ingredientService: IngredientService,
  ) {
  }

  list() {
    const receipts = this.receiptRepository.list();
    console.dir(receipts.map(it => it.getComponents()))
    return receipts.map(receipt => {
      console.dir(receipt)
      return {
        id: receipt.getId(),
        name: receipt.getName(),
        memo: receipt.getMemo(),
        category: receipt.getCategory(),
        sellingPrice: receipt.getSellingPrice(),
        components: receipt.getComponents().map(component => {
          console.log('checkComponent: ', component)
          if (component.getSource() === 'Ingredient') {
            return {
              amount: component.getAmount(),
              sourceType: 'Ingredient',
              source: this.ingredientService.findById(component.getSourceId()),
            };
          } else {
            return {
              amount: component.getAmount(),
              sourceType: 'SecretBase',
              source: this.secretBaseService.findFrontViewById(component.getSourceId()),
            };
          }
        }),
        createdAt: receipt.getCreatedAt(),
        updatedAt: receipt.getUpdatedAt(),
      };
    });
  }

  save(request: any) {
    const findByName = this.receiptRepository.findByName(request.name);
    if (findByName) {
      throw new Error(`이미 존재하는 레시피 이름입니다. [name = ${request.name}]`);
    }

    const receipt = new Receipt();
    receipt.setName(request.name);
    receipt.setMemo(request.memo);
    receipt.setCategory(request.category);
    receipt.setSellingPrice(request.sellingPrice);

    for (const component of request.components) {
      if (component.sourceType === 'Ingredient') {
        const ingredient = this.ingredientService.findById(component.sourceId);
        if (!ingredient) {
          throw new Error(`존재하지 않는 원재료 입니다. [ingredientId = ${component.sourceId}]`);
        }
        receipt.addComponent(new ReceiptComponent(component.amount, component.sourceType, component.sourceId));
      } else {
        const secretBase = this.secretBaseService.findById(component.sourceId);
        if (!secretBase) {
          throw new Error(`존재하지 않는 시크릿 베이스 입니다. [secretBaseId = ${component.sourceId}]`);
        }
        receipt.addComponent(new ReceiptComponent(component.amount, component.sourceType, component.sourceId));
      }
    }



    receipt.validate();

    return this.receiptRepository.save(receipt);
  }

  findByName(name: string) {
    return this.receiptRepository.findByName(name);
  }

  delete(id: number) {
    this.receiptRepository.delete(id);
  }

  update(id: number, request: any) {
    console.log(id, request)
    const receipt = this.receiptRepository.findById(id);
    if (!receipt) {
      throw new Error(`존재 하지 않는 레시피 입니다. [id = ${id}]`);
    }
    receipt.setName(request.name);
    receipt.setMemo(request.memo);
    const newComponents = request.components
        .map((it: any) => {
          if (it.sourceType === 'Ingredient') {
            const ingredient = this.ingredientService.findById(it.sourceId);
            if (!ingredient) {
              throw new Error(`존재 하지 않는 원재료 입니다. [ingredientId = ${it.sourceId}]`);
            }
            return new ReceiptComponent(it.amount, it.sourceType, it.sourceId);
          } else {
            const secretBase = this.secretBaseService.findById(it.sourceId);
            if (!secretBase) {
              throw new Error(`존재 하지 않는 시크릿 베이스 입니다. [secretBaseId = ${it.sourceId}]`);
            }
            return new ReceiptComponent(it.amount, it.sourceType, it.sourceId);
          }
        });
    receipt.replaceComponents(newComponents);
    receipt.setSellingPrice(request.sellingPrice);
    receipt.setCategory(request.category);
    receipt.validate();

    this.receiptRepository.save(receipt);
  }
}
