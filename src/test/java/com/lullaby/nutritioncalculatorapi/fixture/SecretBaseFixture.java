package com.lullaby.nutritioncalculatorapi.fixture;

import com.lullaby.nutritioncalculatorapi.domain.SecretBase;

public class SecretBaseFixture {

    private static SecretBase 꾸덕한_우유;

    public static SecretBase 꾸덕한_우유() {
        if (꾸덕한_우유 == null) {
            꾸덕한_우유 = new SecretBase("꾸덕한 우유", null);
            꾸덕한_우유.addComponent(40.0, IngredientFixture.우유);
            꾸덕한_우유.addComponent(10.0, IngredientFixture.연유);
        }
        return 꾸덕한_우유;
    }

}
