package com.lullaby.nutritioncalculatorapi.application;

import com.lullaby.nutritioncalculatorapi.common.exception.NotFoundException;
import com.lullaby.nutritioncalculatorapi.domain.Ingredient;
import com.lullaby.nutritioncalculatorapi.domain.IngredientRepository;
import com.lullaby.nutritioncalculatorapi.dto.CreateIngredientRequest;
import com.lullaby.nutritioncalculatorapi.dto.IngredientResponse;
import com.lullaby.nutritioncalculatorapi.dto.UpdateIngredientRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@RequiredArgsConstructor
@Service
public class IngredientService {

    private final IngredientRepository ingredientRepository;

    public List<IngredientResponse> getIngredients() {
        return ingredientRepository.findAll().stream()
                .map(IngredientResponse::new)
                .collect(Collectors.toList());
    }

    public IngredientResponse getIngredient(Long id) {
        return new IngredientResponse(ingredientRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("재료를 찾을 수 없습니다.")));
    }

    public IngredientResponse createIngredient(CreateIngredientRequest request) {

        if (ingredientRepository.existsByName(request.name())) {
            throw new IllegalArgumentException("같은 이름의 재료가 존재 합니다.(이름 = " + request.name() + ")");
        }

        Ingredient ingredient = new Ingredient(
                request.name(),
                request.memo(),
                request.unitPrice(),
                request.calories(),
                request.protein(),
                request.fat(),
                request.carbohydrates(),
                request.sugar(),
                request.fiber(),
                request.caffeine(),
                request.saturatedFat(),
                request.category()
        );

        return new IngredientResponse(ingredientRepository.save(ingredient));
    }

    public void deleteIngredient(Long id) {
        ingredientRepository.deleteById(id);
    }

    public Optional<Ingredient> findEntityById(Long id) {
        return ingredientRepository.findById(id);
    }

    public IngredientResponse updateIngredient(Long id, UpdateIngredientRequest request) {
        Ingredient ingredient = findEntityById(id)
                .orElseThrow(() -> new NotFoundException("재료를 찾을 수 없습니다."));
        ingredient.setName(request.name());
        ingredient.setMemo(request.memo());
        ingredient.setUnitPrice(request.unitPrice());
        ingredient.setCalories(request.calories());
        ingredient.setProtein(request.protein());
        ingredient.setFat(request.fat());
        ingredient.setCarbohydrates(request.carbohydrates());
        ingredient.setSugar(request.sugar());
        ingredient.setFiber(request.fiber());
        ingredient.setCaffeine(request.caffeine());
        ingredient.setSaturatedFat(request.saturatedFat());
        ingredient.setCategory(request.category());
        return new IngredientResponse(ingredientRepository.save(ingredient));
    }
}
