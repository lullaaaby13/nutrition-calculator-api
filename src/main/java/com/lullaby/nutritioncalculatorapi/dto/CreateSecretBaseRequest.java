package com.lullaby.nutritioncalculatorapi.dto;

import com.lullaby.nutritioncalculatorapi.domain.SecretBase;

import java.util.List;

public record CreateSecretBaseRequest(
        String name,
        String memo,
        List<Component> components

) {
    public record Component (
            Double amount,
            Long ingredientId
    ) {}

}
