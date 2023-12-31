package com.lullaby.nutritioncalculatorapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class NutritionCalculatorApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(NutritionCalculatorApiApplication.class, args);
    }

}
