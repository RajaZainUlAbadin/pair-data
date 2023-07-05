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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairsController = void 0;
const common_1 = require("@nestjs/common");
const pairs_service_1 = require("./pairs.service");
let PairsController = exports.PairsController = class PairsController {
    constructor(pairsService) {
        this.pairsService = pairsService;
    }
    async GetPairs() {
        return this.pairsService.getAll();
    }
    async FetchData() {
        return this.pairsService.FetchData();
    }
};
__decorate([
    (0, common_1.Get)('get-pairs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PairsController.prototype, "GetPairs", null);
__decorate([
    (0, common_1.Get)('pairs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PairsController.prototype, "FetchData", null);
exports.PairsController = PairsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [pairs_service_1.PairsService])
], PairsController);
//# sourceMappingURL=pairs.controller.js.map