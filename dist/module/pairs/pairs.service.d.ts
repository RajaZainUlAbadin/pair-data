import { HttpService } from "@nestjs/axios";
import { Pairs } from "src/core/entiites/pairs.entity";
import { Repository } from "typeorm";
export declare class PairsService {
    private readonly httpService;
    private repo;
    private readonly logger;
    constructor(httpService: HttpService, repo: Repository<Pairs>);
    getAll(): Promise<Pairs[]>;
    updatePairs(pairs: Pairs[]): Promise<Pairs[]>;
    FetchData(): Promise<import("rxjs").Observable<any>>;
    private handleError;
}
