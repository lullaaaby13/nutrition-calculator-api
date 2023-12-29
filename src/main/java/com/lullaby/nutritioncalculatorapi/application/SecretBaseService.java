package com.lullaby.nutritioncalculatorapi.application;

import com.lullaby.nutritioncalculatorapi.common.exception.NotFoundException;
import com.lullaby.nutritioncalculatorapi.domain.SecretBase;
import com.lullaby.nutritioncalculatorapi.domain.SecretBaseRepository;
import com.lullaby.nutritioncalculatorapi.dto.CreateSecretBaseRequest;
import com.lullaby.nutritioncalculatorapi.dto.SecretBaseResponse;
import com.lullaby.nutritioncalculatorapi.dto.UpdateSecretBaseRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
public class SecretBaseService {

    private final SecretBaseRepository secretBaseRepository;
    private final IngredientService ingredientService;

    public List<SecretBaseResponse> getSecretBases() {
        return secretBaseRepository.findSecretBases().stream()
                .map(SecretBaseResponse::new)
                .toList();
    }

    public SecretBaseResponse getSecretBase(Long id) {
        return new SecretBaseResponse(secretBaseRepository.findById(id).orElseThrow());
    }

    public SecretBaseResponse createSecretBase(CreateSecretBaseRequest request) {

        if (secretBaseRepository.existsByName(request.name())) {
            throw new IllegalArgumentException("같은 이름의 시크릿 베이스가 존재 합니다.(이름 = " + request.name() + ")");
        }

        SecretBase secretBase = new SecretBase(request.name(), request.memo());

        request.components().forEach(component ->
                secretBase.addComponent(
                        component.amount(),
                        ingredientService.findEntityById(component.ingredientId()).orElseThrow()
        ));

        return new SecretBaseResponse(secretBaseRepository.save(secretBase));
    }

    public void deleteSecretBase(Long id) {
        secretBaseRepository.deleteById(id);
    }

    public Optional<SecretBase> findEntityById(Long id) {
        return secretBaseRepository.findById(id);
    }

    public SecretBaseResponse updateSecretBase(Long id, UpdateSecretBaseRequest request) {
        SecretBase secretBase = findEntityById(id)
                .orElseThrow(() -> new NotFoundException("시크릿 베이스를 찾을 수 없습니다."));

        secretBase.setName(request.name());
        secretBase.setMemo(request.memo());
        secretBase.clearComponents();

        request.components().forEach(component ->
                secretBase.addComponent(
                        component.amount(),
                        ingredientService.findEntityById(component.ingredientId()).orElseThrow()
                ));

        return new SecretBaseResponse(secretBaseRepository.save(secretBase));
    }
}
