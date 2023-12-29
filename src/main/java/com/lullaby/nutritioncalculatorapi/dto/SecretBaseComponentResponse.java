package com.lullaby.nutritioncalculatorapi.dto;

import com.lullaby.nutritioncalculatorapi.domain.SecretBaseComponent;

public record SecretBaseComponentResponse(
        Double amount,
        IngredientResponse ingredient
) {
    public SecretBaseComponentResponse(SecretBaseComponent component) {
        this(
                component.getAmount(),
                new IngredientResponse(component.getIngredient())
        );
    }
}
