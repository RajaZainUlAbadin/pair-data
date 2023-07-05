import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import { AxiosError } from "axios";
import { catchError, map, tap } from "rxjs";
import { Pairs } from "src/core/entiites/pairs.entity";
import { Repository } from "typeorm";

@Injectable()
export class PairsService {
    private readonly logger = new Logger(PairsService.name);

    constructor(private readonly httpService: HttpService, @InjectRepository(Pairs) private repo: Repository<Pairs>) {}

    async getAll(): Promise<Pairs[]> {
        return await this.repo.find()
    }

    async updatePairs(pairs: Pairs[]): Promise<Pairs[]> {
        return await this.repo.save(pairs);
    }

    @Cron(CronExpression.EVERY_5_SECONDS)
    async FetchData() {
        const pairsData: Pairs[] = [];
        
        var pairElement: Pairs;

        let query = JSON.stringify({
          query: `{
          pairs{
            id, token0 { id }, token1 { id }
          }
        }`,
          variables: {}
        });

        const response = this.httpService
        .post('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', query)
        .pipe(
            map((res) => res.data),
            map((obj) => {
                // this.updatePairs(obj.data)
                this.logger.log(obj.data);
                return obj.data;
            }),
        )
        .pipe(
            catchError((error: AxiosError) => {
                throw this.handleError(error);
            }),
            );
            
            this.logger.log(response);
            this.logger.log("******");
            return response;
        }
        
      private handleError(error: AxiosError) {
        this.logger.error(error.message);
        throw error.message;
      }
    
}