export class SecretBaseComponent {
  private readonly amount: number;
  private readonly ingredientId: number;
  constructor(amount: number, ingredientId: number) {
    if (amount < 1) {
      throw new Error('원재료의 양은 1 이상이어야 합니다.');
    }
    this.amount = amount;
    this.ingredientId = ingredientId;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getIngredientId(): number {
    return this.ingredientId;
  }
}

export class SecretBase {

  private id?: number;
  private name = '';
  private components: SecretBaseComponent[] = [];
  private memo?: string;
  private createdAt?: Date;
  private updatedAt?: Date;

  public addComponent(amount: number, ingredientId: number) {
    if (this.components.some(it => it.getIngredientId() === ingredientId)) {
      throw new Error('이미 추가된 원재료 입니다.');
    }
    this.components.push(new SecretBaseComponent(amount, ingredientId));
    this.updatedAt = new Date();
  }

  public replaceComponents(components: SecretBaseComponent[]) {

    const before = this.components;
    this.components = [];
    try {
      components.forEach(it => {
        this.addComponent(it.getAmount(), it.getIngredientId());
      });
    } catch (e) {
      this.components = before;
      throw e
    }
  }

  public validate() {
    if (!this.name) {
      throw new Error('이름을 입력해 주세요.');
    }
    if (this.components.length < 2) {
      throw new Error('원재료는 2개 이상이어야 합니다.');
    }
  }
  public getComponents(): SecretBaseComponent[] {
    return this.components;
  }

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
