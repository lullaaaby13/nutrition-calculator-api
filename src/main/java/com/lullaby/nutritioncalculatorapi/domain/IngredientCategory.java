package com.lullaby.nutritioncalculatorapi.domain;

public enum IngredientCategory {
    fresh("신선 식품"),
    fruits("과일 & 채소"),
    flour("가루류 & 곡류"),
    coffee("커피 원두 & 차"),
    topping("토핑 재료"),
    additives("식품 첨가물"),
    packaging("포장 용품");
    private String label;

    IngredientCategory(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
