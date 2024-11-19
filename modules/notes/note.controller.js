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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const note_service_1 = require("./note.service");
const node_dto_1 = require("./node.dto");
const auth_guard_1 = require("../modules/core/guards/auth.guard");
let NoteController = class NoteController {
    constructor(_NoteService) {
        this._NoteService = _NoteService;
    }
    addnote(body) {
        return this._NoteService.Addnote(body);
    }
    getnote() {
        return this._NoteService.getAllnote();
    }
    update(param, body) {
        return this._NoteService.updateNote(param.id, body);
    }
    delet(param) {
        return this._NoteService.deletenote(param.id);
    }
};
exports.NoteController = NoteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [node_dto_1.notedto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "addnote", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "getnote", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [node_dto_1.paramdto, node_dto_1.notedto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [node_dto_1.paramdto]),
    __metadata("design:returntype", void 0)
], NoteController.prototype, "delet", null);
exports.NoteController = NoteController = __decorate([
    (0, common_1.Controller)('note'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
//# sourceMappingURL=note.controller.js.map