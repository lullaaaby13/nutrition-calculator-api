package com.lullaby.nutritioncalculatorapi.dto;

import com.lullaby.nutritioncalculatorapi.domain.SecretBase;

import java.time.LocalDateTime;
import java.util.List;

public record SecretBaseResponse(
        Long id,
        String name,
        String memo,
        List<SecretBaseComponentResponse> components,
        LocalDateTime createdAt,
        LocalDateTime updatedAt

) {
    public SecretBaseResponse(SecretBase secretBase) {
        this(
                secretBase.getId(),
                secretBase.getName(),
                secretBase.getMemo(),
                secretBase.getComponents().stream()
                        .map(SecretBaseComponentResponse::new)
                        .toList(),
                secretBase.getCreatedAt(),
                secretBase.getUpdatedAt()
        );
    }

}
