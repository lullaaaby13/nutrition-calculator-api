package com.lullaby.nutritioncalculatorapi.domain;


import jakarta.persistence.*;
import lombok.Getter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@EntityListeners(AuditingEntityListener.class)
@Entity
public class SecretBaseComponent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "secret_base_component_id")
    private Long id;

    private Double amount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "secret_base_id")
    private SecretBase secretBase;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    static SecretBaseComponent create(Double amount, Ingredient ingredient) {
        SecretBaseComponent component = new SecretBaseComponent();
        component.amount = amount;
        component.ingredient = ingredient;
        return component;
    }

}
