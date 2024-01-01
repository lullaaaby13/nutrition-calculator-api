package com.lullaby.nutritioncalculatorapi.dto;

import com.lullaby.nutritioncalculatorapi.domain.Receipt;
import com.lullaby.nutritioncalculatorapi.domain.ReceiptCategory;
import com.lullaby.nutritioncalculatorapi.domain.ReceiptComponent;

import java.time.LocalDateTime;
import java.util.List;

public record ReceiptResponse(
        Long id,
        String name,
        String memo,
        Integer sellingPrice,
        ReceiptCategory category,
        List<ReceiptComponentResponse> components,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
    public ReceiptResponse(Receipt receipt) {
        this(
                receipt.getId(),
                receipt.getName(),
                receipt.getMemo(),
                receipt.getSellingPrice(),
                receipt.getCategory(),
                receipt.getComponents().stream()
                        .map(ReceiptComponentResponse::new)
                        .toList(),
                receipt.getCreatedAt(),
                receipt.getUpdatedAt()
        );
    }
}
