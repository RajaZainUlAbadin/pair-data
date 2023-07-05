"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PairsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairsService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const pairs_entity_1 = require("../../core/entiites/pairs.entity");
const typeorm_2 = require("typeorm");
let PairsService = exports.PairsService = PairsService_1 = class PairsService {
    constructor(httpService, repo) {
        this.httpService = httpService;
        this.repo = repo;
        this.logger = new common_1.Logger(PairsService_1.name);
    }
    async getAll() {
        return await this.repo.find();
    }
    async updatePairs(pairs) {
        return await this.repo.save(pairs);
    }
    async FetchData() {
        const pairsData = [];
        var pairElement;
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
            .pipe((0, rxjs_1.map)((res) => res.data), (0, rxjs_1.map)((obj) => {
            this.logger.log(obj.data);
            return obj.data;
        }))
            .pipe((0, rxjs_1.catchError)((error) => {
            throw this.handleError(error);
        }));
        this.logger.log(response);
        this.logger.log("******");
        return response;
    }
    handleError(error) {
        this.logger.error(error.message);
        throw error.message;
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PairsService.prototype, "FetchData", null);
exports.PairsService = PairsService = PairsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(pairs_entity_1.Pairs)),
    __metadata("design:paramtypes", [axios_1.HttpService, typeorm_2.Repository])
], PairsService);
//# sourceMappingURL=pairs.service.js.map