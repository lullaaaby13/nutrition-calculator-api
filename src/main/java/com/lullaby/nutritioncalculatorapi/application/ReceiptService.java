package com.lullaby.nutritioncalculatorapi.application;

import com.lullaby.nutritioncalculatorapi.common.exception.NotFoundException;
import com.lullaby.nutritioncalculatorapi.domain.Receipt;
import com.lullaby.nutritioncalculatorapi.domain.ReceiptComponentType;
import com.lullaby.nutritioncalculatorapi.domain.ReceiptRepository;
import com.lullaby.nutritioncalculatorapi.dto.CreateReceiptRequest;
import com.lullaby.nutritioncalculatorapi.dto.ReceiptResponse;
import com.lullaby.nutritioncalculatorapi.dto.UpdateReceiptRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class ReceiptService {

    private final ReceiptRepository receiptRepository;
    private final IngredientService ingredientService;
    private final SecretBaseService secretBaseService;

    public List<ReceiptResponse> getReceipts() {
        return receiptRepository.findReceipts().stream()
                .map(ReceiptResponse::new)
                .toList();
    }

    public ReceiptResponse getReceipt(Long id) {
        return new ReceiptResponse(receiptRepository.findById(id).orElseThrow());
    }

    public void deleteReceipt(Long id) {
        receiptRepository.deleteById(id);
    }

    public ReceiptResponse createReceipt(CreateReceiptRequest request) {

        if(receiptRepository.existsByName("비밀 레시피")) {
            throw new IllegalArgumentException("같은 이름의 레시피가 존재 합니다.(이름 = 비밀 레시피)");
        }

        Receipt receipt = new Receipt(request.name(), request.memo(), request.sellingPrice(), request.category());

        request.components().forEach(component ->{
            if (component.type() == ReceiptComponentType.INGREDIENT) {
                receipt.addComponent(
                        component.amount(),
                        ingredientService.findEntityById(component.id()).orElseThrow()
                );
            } else {
                receipt.addComponent(
                        component.amount(),
                        secretBaseService.findEntityById(component.id()).orElseThrow()
                );
            }
        });

        return new ReceiptResponse(receiptRepository.save(receipt));
    }

    public ReceiptResponse updateReceipt(Long id, UpdateReceiptRequest request) {
        Receipt receipt = receiptRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다."));

        receipt.setName(request.name());
        receipt.setMemo(request.memo());
        receipt.setSellingPrice(request.sellingPrice());
        receipt.setCategory(request.category());

        receipt.clearComponents();

        request.components().forEach(component ->{
            if (component.type() == ReceiptComponentType.INGREDIENT) {
                receipt.addComponent(
                        component.amount(),
                        ingredientService.findEntityById(component.id()).orElseThrow()
                );
            } else {
                receipt.addComponent(
                        component.amount(),
                        secretBaseService.findEntityById(component.id()).orElseThrow()
                );
            }
        });

        return new ReceiptResponse(receiptRepository.save(receipt));
    }
}
