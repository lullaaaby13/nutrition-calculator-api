package com.lullaby.nutritioncalculatorapi.dto;

import com.lullaby.nutritioncalculatorapi.domain.Ingredient;
import com.lullaby.nutritioncalculatorapi.domain.IngredientCategory;

import java.time.LocalDateTime;

public record IngredientResponse(
        Long id,
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
        IngredientCategory category,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
    public IngredientResponse(Ingredient ingredient) {
        this(
                ingredient.getId(),
                ingredient.getName(),
                ingredient.getMemo(),
                ingredient.getUnitPrice(),
                ingredient.getCalories(),
                ingredient.getProtein(),
                ingredient.getFat(),
                ingredient.getCarbohydrates(),
                ingredient.getSugar(),
                ingredient.getFiber(),
                ingredient.getCaffeine(),
                ingredient.getSaturatedFat(),
                ingredient.getCategory(),
                ingredient.getCreatedAt(),
                ingredient.getUpdatedAt()
        );
    }
}
