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
exports.NoteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const note_schema_1 = require("../modules/core/schema/note.schema");
const mongoose_2 = require("mongoose");
let NoteService = class NoteService {
    constructor(noteModel) {
        this.noteModel = noteModel;
        this.Addnote = async (notes) => {
            let note = await this.noteModel.insertMany(notes);
            return { message: "done", note };
        };
        this.getAllnote = async () => {
            let note = await this.noteModel.find();
            return { message: "done", note };
        };
        this.deletenote = async (id) => {
            let note = await this.noteModel.findByIdAndDelete(id, { new: true });
            return { message: "done", note };
        };
        this.updateNote = async (id, notse) => {
            let note = await this.noteModel.findByIdAndUpdate(id, notse, { new: true });
            return { message: "done", note };
        };
    }
};
exports.NoteService = NoteService;
exports.NoteService = NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(note_schema_1.Note.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NoteService);
//# sourceMappingURL=note.service.js.map