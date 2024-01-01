import {Inject, Injectable, Logger} from '@nestjs/common';
import Store from 'electron-store';
import {Receipt, ReceiptComponent} from 'app/src-electron/receipt/receipt';

@Injectable()
export default class ReceiptRepository {
    private readonly logger = new Logger(ReceiptRepository.name);

    private readonly receipts: Receipt[] = [];
    constructor(
        @Inject(Store) private readonly store: Store,
    ) {
        const read: string = this.store.get('receipts') as string

      console.log('ReceiptRepository:', read)

        if (read) {
            try {
                this.receipts = Array.from(JSON.parse(read)).map((it: any) => {

                  const receipt = new Receipt();
                  receipt.setId(it.id);
                  receipt.setName(it.name);
                  receipt.setMemo(it.memo);
                  receipt.setCategory(it.category);
                  it.components
                    .map((component: any) => new ReceiptComponent(component.amount, component.source, component.sourceId))
                    .forEach((component: ReceiptComponent) => receipt.addComponent(component));
                  console.dir('CheckComponents: ', it.components);

                  receipt.setSellingPrice(it.sellingPrice);
                  receipt.setCreatedAt(it.createdAt);
                  receipt.setUpdatedAt(it.updatedAt);

                  return receipt;
                })
            } catch (e: any) {
              console.error(e);
                // this.logger.error(`레시피 데이터를 읽어오는데 실패했습니다. 초기화 됩니다. [${e.message}]`, e.stack);
                this.store.reset('receipts');
            }
        }
    }

    list(): Receipt[] {
        return this.receipts;
    }

    save(receipt: Receipt) {
      const id = receipt.getId();
      if (!id) {
        receipt.setId(this.nextId());
        receipt.setCreatedAt(new Date());
        receipt.setUpdatedAt(new Date());
        this.receipts.push(receipt);
        this.logger.log(`레시피 추가 [코드 = ${receipt.getId()}]`);
      } else {
        const findReceipt = this.findById(id);
        if (findReceipt) {
          findReceipt.setUpdatedAt(new Date());
          this.receipts.splice(this.receipts.indexOf(findReceipt), 1, receipt);
          this.logger.log(`레시피 업데이트 [코드 = ${receipt.getId()}]`);
        }
      }

      this.synchronize();
    }

    findById(id: number) {
      return this.receipts.find((it: Receipt) => it.getId() === id);
    }

  synchronize() {
    this.store.set('receipts', JSON.stringify(this.receipts));
  }

  nextId(): number {
    let nextId = Number(this.store.get('receiptsId')) || 0;
    this.store.set('receiptsId', ++nextId);
    return nextId;
  }

  clear() {
    this.receipts.splice(0, this.receipts.length);
    this.store.reset('receipts');
    this.store.reset('receiptsId');
  }

  delete(id: number) {
    const find = this.findById(id);
    if (find) {
      this.receipts.splice(this.receipts.indexOf(find), 1);
      this.logger.log(`레시피 삭제 [코드 = ${id}]`);
      this.synchronize();
    }
  }

  findByName(name: string) {
    return this.receipts.find((it: Receipt) => it.getName() === name);
  }
}
