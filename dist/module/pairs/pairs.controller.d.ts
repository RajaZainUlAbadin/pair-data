import { PairsService } from "./pairs.service";
export declare class PairsController {
    private readonly pairsService;
    constructor(pairsService: PairsService);
    GetPairs(): Promise<import("../../core/entiites/pairs.entity").Pairs[]>;
    FetchData(): Promise<import("rxjs").Observable<any>>;
}
