package com.lullaby.nutritioncalculatorapi.dto;

import java.util.List;

public record UpdateSecretBaseRequest(
        String name,
        String memo,
        List<Component> components
) {
    public record Component (
            Double amount,
            Long ingredientId
    ) {}
}
