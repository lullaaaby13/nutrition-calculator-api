import {Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import SecretBaseService from 'app/src-electron/secret-base/secret-base.service';

@Controller('secret-bases')
export default class SecretBaseController {

    constructor(
        @Inject(SecretBaseService) private readonly secretBaseService: SecretBaseService,
    ) {
    }

    @Get()
    async list() {
        return this.secretBaseService.list();
    }

    @Post()
    async save(@Body() request: any) {
        return this.secretBaseService.save(request);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.secretBaseService.delete(id)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() request: any) {
        return this.secretBaseService.update(id, request);
    }

}
