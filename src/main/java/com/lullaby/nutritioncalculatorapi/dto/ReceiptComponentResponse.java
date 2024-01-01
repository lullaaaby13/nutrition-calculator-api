package com.lullaby.nutritioncalculatorapi.dto;

import com.lullaby.nutritioncalculatorapi.domain.ReceiptComponent;
import com.lullaby.nutritioncalculatorapi.domain.ReceiptComponentType;

public record ReceiptComponentResponse(
        ReceiptComponentType type,
        Double amount,
        IngredientResponse ingredient,
        SecretBaseResponse secretBase

) {
    public ReceiptComponentResponse(ReceiptComponent receiptComponent) {
        this(
                receiptComponent.getType(),
                receiptComponent.getAmount(),
                receiptComponent.getIngredient() == null ? null : new IngredientResponse(receiptComponent.getIngredient()),
                receiptComponent.getSecretBase() == null ? null : new SecretBaseResponse(receiptComponent.getSecretBase())
        );
    }
}
