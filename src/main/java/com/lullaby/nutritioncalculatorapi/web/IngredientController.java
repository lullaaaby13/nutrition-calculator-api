package com.lullaby.nutritioncalculatorapi.web;

import com.lullaby.nutritioncalculatorapi.application.IngredientService;
import com.lullaby.nutritioncalculatorapi.dto.CreateIngredientRequest;
import com.lullaby.nutritioncalculatorapi.dto.IngredientResponse;
import com.lullaby.nutritioncalculatorapi.dto.UpdateIngredientRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = "*")
@RequestMapping("ingredients")
@RequiredArgsConstructor
@RestController
public class IngredientController {

    private final IngredientService ingredientService;

    @GetMapping
    public List<IngredientResponse> getIngredients() {
        return ingredientService.getIngredients();
    }

    @PostMapping
    public void createIngredient(@RequestBody CreateIngredientRequest request) {
        ingredientService.createIngredient(request);
    }

    @DeleteMapping("{id}")
    public void deleteIngredient(@PathVariable Long id) {
        ingredientService.deleteIngredient(id);
    }

    @PutMapping("{id}")
    public void updateIngredient(@PathVariable Long id, @RequestBody UpdateIngredientRequest request) {
        ingredientService.updateIngredient(id, request);
    }

}