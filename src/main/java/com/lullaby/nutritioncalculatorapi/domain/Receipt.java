package com.lullaby.nutritioncalculatorapi.domain;

import com.lullaby.nutritioncalculatorapi.common.jpa.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.ArrayList;
import java.util.List;

@Getter
@EntityListeners(AuditingEntityListener.class)
@Entity
public class Receipt extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "receipt_id")
    private Long id;
    private String name;
    private String memo;

    @Enumerated(EnumType.STRING)
    private ReceiptCategory category;

    private Integer sellingPrice;

    @OneToMany(mappedBy = "receipt", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReceiptComponent> components = new ArrayList<>();

    public Receipt() {}
    public Receipt(String name, String memo, Integer sellingPrice, ReceiptCategory category) {
        setName(name);
        setMemo(memo);
        setSellingPrice(sellingPrice);
        setCategory(category);
    }

    public void setName(String name) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("이름은 필수값입니다.");
        }
        this.name = name;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public void setSellingPrice(Integer sellingPrice) {
        if (sellingPrice == null || sellingPrice < 0) {
            throw new IllegalArgumentException("판매가격은 필수값이며 0보다 커야합니다.");
        }
        this.sellingPrice = sellingPrice;
    }

    public void setCategory(ReceiptCategory category) {
        if (category == null) {
            throw new IllegalArgumentException("카테고리는 필수값입니다.");
        }
        this.category = category;
    }

    public void addComponent(Double amount, Ingredient ingredient) {
        ReceiptComponent receiptComponent = ReceiptComponent.ofIngredient(this, amount, ingredient);
        this.components.add(receiptComponent);
    }

    public void addComponent(Double amount, SecretBase secretBase) {
        ReceiptComponent receiptComponent = ReceiptComponent.ofSecretBase(this, amount, secretBase);
        this.components.add(receiptComponent);
    }

    public void clearComponents() {
        this.components.clear();
    }


}
