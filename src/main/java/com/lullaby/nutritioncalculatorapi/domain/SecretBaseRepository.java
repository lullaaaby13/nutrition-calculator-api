package com.lullaby.nutritioncalculatorapi.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SecretBaseRepository extends JpaRepository<SecretBase, Long> {

    @Query("select distinct s from SecretBase s " +
            "join fetch s.components c")
    List<SecretBase> findSecretBases();

    boolean existsByName(String name);
}
