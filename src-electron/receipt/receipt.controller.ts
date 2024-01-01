import {Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import ReceiptService from 'app/src-electron/receipt/receipt.service';


@Controller('receipts')
export default class ReceiptController {

    constructor(
        @Inject(ReceiptService) private readonly receiptService: ReceiptService,
    ) {
    }

    @Get()
    list() {
        return this.receiptService.list();
    }

    @Post()
    save(@Body() request: any) {
        return this.receiptService.save(request);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.receiptService.delete(id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() request: any) {
        return this.receiptService.update(id, request);
    }
}
