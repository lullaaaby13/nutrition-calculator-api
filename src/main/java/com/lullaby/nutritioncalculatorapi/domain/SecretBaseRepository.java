package com.lullaby.nutritioncalculatorapi.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SecretBaseRepository extends JpaRepository<SecretBase, Long> {

    boolean existsByName(String name);
}
