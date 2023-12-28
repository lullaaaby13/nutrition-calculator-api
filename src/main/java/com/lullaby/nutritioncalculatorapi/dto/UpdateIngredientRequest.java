package com.lullaby.nutritioncalculatorapi.dto;

import com.lullaby.nutritioncalculatorapi.domain.IngredientCategory;

public record UpdateIngredientRequest(
        String name,
        String memo,
        Integer unitPrice,
        Double calories,
        Double protein,
        Double fat,
        Double carbohydrates,
        Double sugar,
        Double fiber,
        Double caffeine,
        Double saturatedFat,
        IngredientCategory category
) {
}
