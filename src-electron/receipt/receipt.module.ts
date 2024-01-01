import {Module} from '@nestjs/common';
import ReceiptController from 'app/src-electron/receipt/receipt.controller';
import ReceiptService from 'app/src-electron/receipt/receipt.service';
import ReceiptRepository from 'app/src-electron/receipt/receipt.repository';
import IngredientModule from 'app/src-electron/ingredient/ingredient.module';
import SecretBaseModule from 'app/src-electron/secret-base/secret-base.module';

@Module({
  imports: [IngredientModule, SecretBaseModule],
    controllers: [ReceiptController],
    providers: [ReceiptService, ReceiptRepository],
})
export default class ReceiptModule {}
