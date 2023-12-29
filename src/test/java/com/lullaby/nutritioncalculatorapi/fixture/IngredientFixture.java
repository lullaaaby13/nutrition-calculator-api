package com.lullaby.nutritioncalculatorapi.fixture;

import com.lullaby.nutritioncalculatorapi.domain.Ingredient;
import com.lullaby.nutritioncalculatorapi.domain.IngredientCategory;

public class IngredientFixture {
    public static final Ingredient 우유 = new Ingredient(
            "우유",
            "서울우유",
            260,
            42.0,
            3.6,
            1.8,
            4.7,
            4.7,
            0.0,
            0.0,
            0.0,
            IngredientCategory.fresh
    );

    public static final Ingredient 연유 = new Ingredient(
            "연유",
            "서울우유",
            1130,
            330.0,
            7.0,
            8.0,
            60.0,
            60.0,
            0.0,
            0.0,
            5.0,
            IngredientCategory.fresh
    );

}
