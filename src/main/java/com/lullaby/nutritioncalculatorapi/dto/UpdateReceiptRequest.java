package com.lullaby.nutritioncalculatorapi.dto;

import com.lullaby.nutritioncalculatorapi.domain.ReceiptCategory;
import com.lullaby.nutritioncalculatorapi.domain.ReceiptComponentType;

import java.util.List;

public record UpdateReceiptRequest(
        String name,
        String memo,
        Integer sellingPrice,
        ReceiptCategory category,
        List<Component> components) {

    public record Component(
            ReceiptComponentType type,
            Double amount,
            Long id
    ) {}
}
