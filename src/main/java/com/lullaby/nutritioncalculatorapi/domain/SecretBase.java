package com.lullaby.nutritioncalculatorapi.domain;

import com.lullaby.nutritioncalculatorapi.common.jpa.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.ArrayList;
import java.util.List;

@Getter
@EntityListeners(AuditingEntityListener.class)
@Entity
public class SecretBase extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "secret_base_id")
    private Long id;

    private String name;

    private String memo;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "secretBase", cascade = CascadeType.ALL)
    private List<SecretBaseComponent> components = new ArrayList<>();

    protected SecretBase() {}

    public SecretBase(String name, String memo) {
        setName(name);
        setMemo(memo);
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

    public void addComponent(Double amount, Ingredient ingredient) {
        SecretBaseComponent secretBaseComponent = SecretBaseComponent.create(amount, ingredient);
        this.components.add(secretBaseComponent);
    }

    public void removeComponent(Ingredient ingredient) {
        this.components.removeIf(component -> component.getIngredient().equals(ingredient));
    }

}
