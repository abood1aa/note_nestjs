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
exports.paramdto = exports.notedto = void 0;
const class_validator_1 = require("class-validator");
class notedto {
}
exports.notedto = notedto;
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], notedto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], notedto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], notedto.prototype, "user", void 0);
class paramdto {
}
exports.paramdto = paramdto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], paramdto.prototype, "id", void 0);
//# sourceMappingURL=node.dto.js.map