package com.lullaby.nutritioncalculatorapi.common.exception;

public record HttpErrorResponse(
        Integer code,
        String message

) {
}
