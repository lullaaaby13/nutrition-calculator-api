package com.lullaby.nutritioncalculatorapi.web;

import com.lullaby.nutritioncalculatorapi.application.SecretBaseService;
import com.lullaby.nutritioncalculatorapi.dto.CreateSecretBaseRequest;
import com.lullaby.nutritioncalculatorapi.dto.SecretBaseResponse;
import com.lullaby.nutritioncalculatorapi.dto.UpdateSecretBaseRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/secret-bases")
@RequiredArgsConstructor
@RestController
public class SecretBaseController {

    private final SecretBaseService secretBaseService;

    @GetMapping
    public List<SecretBaseResponse> getSecretBases() {
        return secretBaseService.getSecretBases();
    }

    @PostMapping
    public SecretBaseResponse createSecretBase(@RequestBody CreateSecretBaseRequest request) {
        return secretBaseService.createSecretBase(request);
    }

    @DeleteMapping("{id}")
    public void deleteSecretBase(@PathVariable Long id) {
        secretBaseService.deleteSecretBase(id);
    }

    @PutMapping("{id}")
    public SecretBaseResponse updateSecretBase(@PathVariable Long id, @RequestBody UpdateSecretBaseRequest request) {
        return secretBaseService.updateSecretBase(id, request);
    }

}
