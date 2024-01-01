package com.lullaby.nutritioncalculatorapi.domain;

public enum ReceiptCategory {
    coffee("커피"),
    tea("차"),
    bread("빵 & 케이크"),
    beverage("음료"),
    shavedIce("빙수"),
    other("기타");

    private String label;


    ReceiptCategory(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
