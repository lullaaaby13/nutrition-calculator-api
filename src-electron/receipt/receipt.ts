export class ReceiptComponent {
  private readonly amount: number;
  private readonly source: 'Ingredient' | 'SecretBase' = 'Ingredient';
  private readonly sourceId: number;


  constructor(amount: number, source: 'Ingredient' | 'SecretBase', sourceId: number) {
    this.amount = amount;
    this.source = source;
    this.sourceId = sourceId;
    console.log('checkReceiptComponent: ', this.amount, this.source, this.sourceId);
  }

  public getAmount(): number {
    return this.amount;
  }

  public getSource(): 'Ingredient' | 'SecretBase' {
    return this.source;
  }

  public getSourceId(): number {
    return this.sourceId;
  }

  public isSame(other: ReceiptComponent): boolean {
    return this.source === other.source && this.sourceId === other.sourceId;

  }
}

export const ReceiptCategory = {
  COFFEE: {
    name: 'coffee',
    label: '커피'
  },
  TEA: {
    name: 'tea',
    label: '차'
  },
  BREAD: {
    name: 'bread',
    label: '빵 & 케이크'
  },
  BEVERAGE: {
    name: 'beverage',
    label: '음료'
  },
  SHAVED_ICE: {
    name: 'shavedIce',
    label: '빙수'
  },
  OTHER: {
    name: 'other',
    label: '기타'
  }
}

export type ReceiptCategory = typeof ReceiptCategory[keyof typeof ReceiptCategory];

export class Receipt {
  private id?: number;
  private name = '';
  private category: ReceiptCategory = ReceiptCategory.COFFEE;
  private components: ReceiptComponent[] = [];
  private sellingPrice = 0;
  private memo?: string = '';
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


  public addComponent(component: ReceiptComponent) {
    if (this.components.some(it => it.isSame(component))) {
      throw new Error('이미 추가된 원재료 입니다.');
    }
    this.components.push(component);
    console.log('addComponent: ', this.components);
    this.updatedAt = new Date();
  }

  public getCategory(): ReceiptCategory {
    return this.category;
  }

  public setCategory(value: ReceiptCategory) {
    if (!value) {
      throw new Error('카테고리를 선택해 주세요.');
    }
    this.category = value;
  }

  public replaceComponents(components: ReceiptComponent[]) {
    if (components.length < 2) {
      throw new Error('원재료는 2개 이상이어야 합니다.');
    }
    const before = this.components;
    this.components = [];
    try {
      components.forEach(it => {
        this.addComponent(it);
      });
      this.updatedAt = new Date();
    } catch (e) {
      this.components = before;
      throw e;
    }
  }

  public getComponents(): ReceiptComponent[] {
    return this.components;
  }

  public getSellingPrice(): number {
    return this.sellingPrice;
  }

  public setSellingPrice(value: number) {
    if (value < 0) {
      throw new Error('판매가격은 0 이상이어야 합니다.');
    }
    this.sellingPrice = value;
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

  public validate() {
    if (this.components.length < 2) {
      throw new Error('재료는 2개 이상 이어야 합니다.');
    }
    if (this.components.some(it => it.getAmount() < 1)) {
      throw new Error('재료 수량은 1 이상 이어야 합니다.');
    }
  }

}
