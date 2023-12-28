package com.lullaby.nutritioncalculatorapi.domain;

import com.lullaby.nutritioncalculatorapi.common.jpa.BaseEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@EntityListeners(AuditingEntityListener.class)
@Entity
public class Ingredient extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredient_id")
    private Long id;
    private String name;
    private String memo;
    private Integer unitPrice;
    private Double calories;
    private Double protein;
    private Double fat;
    private Double carbohydrates;
    private Double sugar;
    private Double fiber;
    private Double caffeine;
    private Double saturatedFat;
    @Enumerated(EnumType.STRING)
    private IngredientCategory category;

    protected Ingredient() {}
    public Ingredient(String name, String memo, Integer unitPrice, Double calories, Double protein, Double fat, Double carbohydrates, Double sugar, Double fiber, Double caffeine, Double saturatedFat, IngredientCategory category) {
        setName(name);
        setUnitPrice(unitPrice);
        setCalories(calories);
        setProtein(protein);
        setFat(fat);
        setCarbohydrates(carbohydrates);
        setSugar(sugar);
        setFiber(fiber);
        setCaffeine(caffeine);
        setSaturatedFat(saturatedFat);
        setMemo(memo);
        setCategory(category);
    }
    public void setName(String name) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("이름은 필수입니다.");
        }
        this.name = name;
    }

    public void setUnitPrice(Integer unitPrice) {
        if (unitPrice == null || unitPrice < 0) {
            throw new IllegalArgumentException("단위 가격은 0이상 이어야 합니다.");
        }
        this.unitPrice = unitPrice;
    }

    public void setCalories(Double calories) {
        if (calories == null || calories < 0) {
            throw new IllegalArgumentException("칼로리는 0이상 이어야 합니다.");
        }
        this.calories = calories;
    }

    public void setProtein(Double protein) {
        if (protein == null || protein < 0) {
            throw new IllegalArgumentException("단백질은 0이상 이어야 합니다.");
        }
        this.protein = protein;
    }

    public void setFat(Double fat) {
        if (fat == null || fat < 0) {
            throw new IllegalArgumentException("지방은 0이상 이어야 합니다.");
        }
        this.fat = fat;
    }

    public void setCarbohydrates(Double carbohydrates) {
        if (carbohydrates == null || carbohydrates < 0) {
            throw new IllegalArgumentException("탄수화물은 0이상 이어야 합니다.");
        }
        this.carbohydrates = carbohydrates;
    }

    public void setSugar(Double sugar) {
        if (sugar == null || sugar < 0) {
            throw new IllegalArgumentException("당류는 0이상 이어야 합니다.");
        }
        this.sugar = sugar;
    }

    public void setFiber(Double fiber) {
        if (fiber == null || fiber < 0) {
            throw new IllegalArgumentException("식이섬유는 0이상 이어야 합니다.");
        }
        this.fiber = fiber;
    }

    public void setCaffeine(Double caffeine) {
        if (caffeine == null || caffeine < 0) {
            throw new IllegalArgumentException("카페인은 0이상 이어야 합니다.");
        }
        this.caffeine = caffeine;
    }

    public void setSaturatedFat(Double saturatedFat) {
        if (saturatedFat == null || saturatedFat < 0) {
            throw new IllegalArgumentException("포화지방은 0이상 이어야 합니다.");
        }
        this.saturatedFat = saturatedFat;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public void setCategory(IngredientCategory category) {
        if (category == null) {
            throw new IllegalArgumentException("카테고리는 필수입니다.");
        }
        this.category = category;
    }
}

