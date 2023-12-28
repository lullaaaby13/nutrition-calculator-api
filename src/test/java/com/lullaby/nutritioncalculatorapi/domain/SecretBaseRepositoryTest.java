package com.lullaby.nutritioncalculatorapi.domain;

import com.lullaby.nutritioncalculatorapi.fixture.IngredientFixture;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@Transactional
@SpringBootTest
public class SecretBaseRepositoryTest {

    @Autowired
    IngredientRepository ingredientRepository;

    @Autowired
    SecretBaseRepository secretBaseRepository;

    Ingredient 우유;
    Ingredient 연유;

    @BeforeEach
    void setUp() {
        ingredientRepository.deleteAll();
        secretBaseRepository.deleteAll();

        우유 = ingredientRepository.save(IngredientFixture.우유);
        연유 = ingredientRepository.save(IngredientFixture.연유);
    }

    @DisplayName("시크릿베이스 저장")
    @Test
    void name() {
        SecretBase secretBase = new SecretBase("꾸덕한 우유", null);
        secretBase.addComponent(40.0, 우유);
        secretBase.addComponent(10.0, 연유);
        SecretBase save = secretBaseRepository.save(secretBase);

        save.getComponents().forEach(component -> {
            assertNotNull(component.getId());
        });

    }

    @DisplayName("시크릿베이스 수정")
    @Test
    void name2() {
        SecretBase secretBase = new SecretBase("꾸덕한 우유", null);
        secretBase.addComponent(40.0, 우유);
        secretBase.addComponent(10.0, 연유);
        SecretBase save = secretBaseRepository.save(secretBase);

        save.removeComponent(우유);
        SecretBase save2 = secretBaseRepository.save(save);

        assertEquals(1, save2.getComponents().size());
    }

}
