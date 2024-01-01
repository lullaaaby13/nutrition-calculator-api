package com.lullaby.nutritioncalculatorapi.domain;

import com.lullaby.nutritioncalculatorapi.common.jpa.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@EntityListeners(AuditingEntityListener.class)
@Entity
public class ReceiptComponent extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "receipt_component_id")
    private Long id;

    private Double amount;

    @Enumerated(EnumType.STRING)
    private ReceiptComponentType type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receipt_id")
    private Receipt receipt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "secret_base_id")
    private SecretBase secretBase;

    public ReceiptComponent() {}

    private ReceiptComponent(ReceiptComponentType type, Receipt receipt, Double amount, Ingredient ingredient, SecretBase secretBase) {
        this.type = type;
        this.receipt = receipt;
        this.amount = amount;
        this.ingredient = ingredient;
        this.secretBase = secretBase;
    }


    public static ReceiptComponent ofIngredient(Receipt receipt, Double amount, Ingredient ingredient) {
        return new ReceiptComponent(ReceiptComponentType.INGREDIENT, receipt, amount, ingredient, null);
    }

    public static ReceiptComponent ofSecretBase(Receipt receipt, Double amount, SecretBase secretBase) {
        return new ReceiptComponent(ReceiptComponentType.SECRET_BASE, receipt, amount, null, secretBase);
    }


}
