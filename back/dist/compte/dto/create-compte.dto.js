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
exports.CreateCompteDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCompteDto {
}
exports.CreateCompteDto = CreateCompteDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Le champ "username" ne doit pas être vide.' }),
    (0, class_validator_1.IsString)({ message: 'Le champ "username" doit être une chaîne de caractères.' }),
    __metadata("design:type", String)
], CreateCompteDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Le champ "password" ne doit pas être vide.' }),
    (0, class_validator_1.IsString)({ message: 'Le champ "password" doit être une chaîne de caractères.' }),
    __metadata("design:type", String)
], CreateCompteDto.prototype, "password", void 0);
//# sourceMappingURL=create-compte.dto.js.map