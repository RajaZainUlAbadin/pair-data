import { Controller, Get } from "@nestjs/common";
import { PairsService } from "./pairs.service";

@Controller()
export class PairsController {
    constructor(private readonly pairsService: PairsService) {}

    @Get('get-pairs') 
    async GetPairs() {
        return this.pairsService.getAll();
    }

    @Get('pairs')
    async FetchData() {
        return this.pairsService.FetchData();
    }
}