package com.lullaby.nutritioncalculatorapi.web;

import com.lullaby.nutritioncalculatorapi.application.ReceiptService;
import com.lullaby.nutritioncalculatorapi.dto.CreateReceiptRequest;
import com.lullaby.nutritioncalculatorapi.dto.ReceiptResponse;
import com.lullaby.nutritioncalculatorapi.dto.UpdateReceiptRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = "*")
@RequestMapping("receipts")
@RequiredArgsConstructor
@RestController
public class ReceiptController {

    private final ReceiptService receiptService;

    @GetMapping
    public List<ReceiptResponse> getReceipts() {
        return receiptService.getReceipts();
    }

    @PostMapping
    public ReceiptResponse createReceipt(@RequestBody CreateReceiptRequest request) {
        return receiptService.createReceipt(request);
    }

    @DeleteMapping("{id}")
    public void deleteReceipt(@PathVariable Long id) {
        receiptService.deleteReceipt(id);
    }

    @PutMapping("{id}")
    public ReceiptResponse updateReceipt(@PathVariable Long id, @RequestBody UpdateReceiptRequest request) {
        return receiptService.updateReceipt(id, request);
    }


}
