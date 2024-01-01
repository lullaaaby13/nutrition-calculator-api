import {Module} from '@nestjs/common';
import SecretBaseService from 'app/src-electron/secret-base/secret-base.service';
import SecretBaseRepository from 'app/src-electron/secret-base/secret-base.repository';
import SecretBaseController from 'app/src-electron/secret-base/secret-base.controller';
import IngredientModule from 'app/src-electron/ingredient/ingredient.module';

@Module({
    imports: [IngredientModule],
    controllers: [SecretBaseController],
    providers: [SecretBaseService, SecretBaseRepository],
  exports: [SecretBaseService],
})
export default class SecretBaseModule {}
