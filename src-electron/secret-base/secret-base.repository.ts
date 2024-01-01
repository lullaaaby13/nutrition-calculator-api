import {Inject, Injectable, Logger} from '@nestjs/common';
import Store from 'electron-store';
import {SecretBase} from 'app/src-electron/secret-base/secret-base';

@Injectable()
export default class SecretBaseRepository {
    private readonly logger = new Logger(SecretBaseRepository.name);

    private readonly secretBases: SecretBase[] = [];
    constructor(
        @Inject(Store) private readonly store: Store,
    ) {
        const read: string = this.store.get('secretBases') as string

      console.log('secretBaseRepository: ', read)
        if (read) {
            try {
                this.secretBases = Array.from(JSON.parse(read)).map((it: any) => {
                    const secretBase = new SecretBase();
                    secretBase.setId(it.id);
                    secretBase.setName(it.name);
                    it.components.map((component: any) => {
                        secretBase.addComponent(component.amount, component.ingredientId);
                    });
                    secretBase.setMemo(it.memo);
                    secretBase.setCreatedAt(new Date(it.createdAt));
                    secretBase.setUpdatedAt(new Date(it.updatedAt));
                    return secretBase;
                })
            } catch (e: any) {
                this.logger.error(e.message, e.stack);

                this.store.reset('secretBases');
            }
        }
    }

    list(): SecretBase[] {
        return this.secretBases;
    }

    save(secretBase: SecretBase) {
        const id = secretBase.getId();
        if (!id) {
            secretBase.validate();

            secretBase.setId(this.nextId());
            secretBase.setCreatedAt(new Date());
            secretBase.setUpdatedAt(new Date());
            this.secretBases.push(secretBase);
            this.logger.log(`시크릿 베이스 추가 [id = ${secretBase.getId()}]`);
        } else {
            const findSecretBase = this.findById(id);
            if (findSecretBase) {
                findSecretBase.validate();
                findSecretBase.setUpdatedAt(new Date());
                this.secretBases.splice(this.secretBases.indexOf(findSecretBase), 1, secretBase);
                this.logger.log(`시크릿 베이스 업데이트 [id = ${secretBase.getId()}]`);
            }
        }

        this.synchronize();
    }

    findById(id: number) {
        return this.secretBases.find(it => it.getId() === id);
    }

    findByName(name: string) {
        return this.secretBases.find(it => it.getName() === name);
    }

    synchronize() {
        this.store.set('secretBases', JSON.stringify(this.secretBases));
    }

    nextId(): number {
        let nextId = Number(this.store.get('ingredientsId')) || 0;
        this.store.set('secretBasesId', ++nextId);
        return nextId;
    }

    clear() {
        this.secretBases.splice(0, this.secretBases.length);
        this.store.reset('secretBases');
        this.store.reset('secretBasesId');
        this.synchronize();
    }

    delete(id: number) {
        const find = this.findById(id);
        if (find) {
            this.secretBases.splice(this.secretBases.indexOf(find), 1);
            this.logger.log(`시크릿 베이스 삭제 [id = ${id}]]`);
            this.synchronize();
        }
    }
}
