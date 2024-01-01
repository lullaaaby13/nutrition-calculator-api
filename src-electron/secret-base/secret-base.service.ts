import {Inject, Injectable} from '@nestjs/common';
import SecretBaseRepository from 'app/src-electron/secret-base/secret-base.repository';
import {SecretBase, SecretBaseComponent} from 'app/src-electron/secret-base/secret-base';
import IngredientService from 'app/src-electron/ingredient/ingredient.service';

@Injectable()
export default class SecretBaseService {

    constructor(
        @Inject(SecretBaseRepository) private readonly secretBaseRepository: SecretBaseRepository,
        @Inject(IngredientService) private readonly ingredientService: IngredientService,
    ) {
        console.log('SecretBaseService constructor', ingredientService)
    }

    list() {
        const secretBases = this.secretBaseRepository.list();
        return secretBases.map(it => this.toFrontView(it))
    }

    findFrontViewById(id: number) {
        const secretBase = this.secretBaseRepository.findById(id);
        if (!secretBase) {
            throw new Error(`존재하지 않는 시크릿 베이스 입니다. [id = ${id}]`);
        }
        return this.toFrontView(secretBase);
    }

    private toFrontView(secretBase: SecretBase) {
        const components = secretBase.getComponents().map(component => {
            return {
                amount: component.getAmount(),
                ingredient: this.ingredientService.findById(component.getIngredientId()),
            }
        });
        return {
            id: secretBase.getId(),
            name: secretBase.getName(),
            memo: secretBase.getMemo(),
            components: components,
            createdAt: secretBase.getCreatedAt(),
            updatedAt: secretBase.getUpdatedAt(),
        }
    }


    save(request: any) {

        const findByName = this.secretBaseRepository.findByName(request.name);
        if (findByName) {
            throw new Error(`이미 존재하는 시크릿 베이스 이름입니다. [name = ${request.name}]`);
        }

        const secretBase = new SecretBase();
        secretBase.setName(request.name);

        for (const component of request.components) {
            const ingredient = this.ingredientService.findById(component.ingredientId);
            if (!ingredient) {
                throw new Error(`존재하지 않는 원재료 입니다. [ingredientId = ${component.ingredientId}]`);
            }
            secretBase.addComponent(component.amount, component.ingredientId);
        }

        secretBase.setMemo(request.memo);

        secretBase.validate();

        return this.secretBaseRepository.save(secretBase);
    }

    delete(id: number) {
        return this.secretBaseRepository.delete(id);
    }

    findById(id: number) {
        return this.secretBaseRepository.findById(id);
    }

    update(id: number, request: any) {
        const secretBase = this.secretBaseRepository.findById(id);
        if (!secretBase) {
            throw new Error(`존재하지 않는 시크릿 베이스 입니다. [id = ${id}]`);
        }
        secretBase.setName(request.name);
        secretBase.setMemo(request.memo);
        const newComponents = request.components
            .map((it: any) => {
                const ingredient = this.ingredientService.findById(it.ingredientId);
                if (!ingredient) {
                    throw new Error(`존재하지 않는 원재료 입니다. [ingredientId = ${it.ingredientId}]`);
                }
                return new SecretBaseComponent(it.amount, it.ingredientId)
            });
        secretBase.replaceComponents(newComponents);

        this.secretBaseRepository.save(secretBase);
    }

}
