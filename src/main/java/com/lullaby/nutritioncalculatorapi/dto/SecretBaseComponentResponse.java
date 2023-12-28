package com.lullaby.nutritioncalculatorapi.dto;

import com.lullaby.nutritioncalculatorapi.domain.SecretBaseComponent;

public record SecretBaseComponentResponse(
        Long id,
        Double amount,
        IngredientResponse ingredient
) {
    public SecretBaseComponentResponse(SecretBaseComponent component) {
        this(
                component.getId(),
                component.getAmount(),
                new IngredientResponse(component.getIngredient())
        );
    }
}