package com.lullaby.nutritioncalculatorapi.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReceiptRepository extends JpaRepository<Receipt, Long> {

    @Query("select distinct r from Receipt r " +
            "join fetch r.components c " +
            "left join fetch c.ingredient i " +
            "left join fetch c.secretBase s")
    List<Receipt> findReceipts();

    boolean existsByName(String name);
}
