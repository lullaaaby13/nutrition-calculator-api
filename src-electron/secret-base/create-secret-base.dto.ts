
export class SecretBaseComponentDto {
  amount = 0;
  ingredientId = 0;
}
export class CreateSecretBaseDto {
  name = '';
  components: SecretBaseComponentDto[] = [];
  memo = '';
}
