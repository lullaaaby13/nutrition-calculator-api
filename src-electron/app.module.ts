import {Module} from '@nestjs/common';
import IngredientModule from './ingredient/ingredient.module';
import GlobalModule from 'app/src-electron/common/global.module';
import SecretBaseModule from 'app/src-electron/secret-base/secret-base.module';
import ReceiptModule from 'app/src-electron/receipt/receipt.module';

@Module({
    imports: [
        GlobalModule,
        IngredientModule,
        SecretBaseModule,
        ReceiptModule,
    ],

})
export default class AppModule {
}
