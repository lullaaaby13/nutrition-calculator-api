package com.lullaby.nutritioncalculatorapi.domain;

import com.lullaby.nutritioncalculatorapi.fixture.IngredientFixture;
import com.lullaby.nutritioncalculatorapi.fixture.SecretBaseFixture;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Transactional
@SpringBootTest
public class ReceiptRepositoryTest {

    @Autowired
    private ReceiptRepository receiptRepository;

    @Autowired
    private SecretBaseRepository secretBaseRepository;

    @Autowired
    private IngredientRepository ingredientRepository;

    @Test
    void name() {
        ingredientRepository.save(IngredientFixture.우유);
        ingredientRepository.save(IngredientFixture.연유);
        secretBaseRepository.save(SecretBaseFixture.꾸덕한_우유());

        Receipt receipt = new Receipt("비밀 레시피", "안알랴줌", 3000, ReceiptCategory.coffee);
        receipt.addComponent(100.0, IngredientFixture.우유);
        receipt.addComponent(100.0, IngredientFixture.연유);
        receipt.addComponent(100.0, SecretBaseFixture.꾸덕한_우유());

        receiptRepository.saveAndFlush(receipt);

        Receipt findReceipt = receiptRepository.findAll().get(0);
        findReceipt.getComponents().forEach(component -> {
            if (Objects.nonNull(component.getIngredient())) {
                System.out.println(component.getIngredient().getName());
            } else {
                System.out.println(component.getSecretBase().getName());
            }
        });

    }
}
