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
exports.SigninService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../core/schema/user.schema");
const mongoose_2 = require("mongoose");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let SigninService = class SigninService {
    constructor(userModel, _jwtService) {
        this.userModel = userModel;
        this._jwtService = _jwtService;
        this.signin = async (user) => {
            let isUser = await this.userModel.findOne({ email: user.email });
            if (!(isUser && (0, bcrypt_1.compareSync)(user.password, isUser.password)))
                throw new common_1.HttpException('Forbidden ', common_1.HttpStatus.UNAUTHORIZED);
            let token = this._jwtService.sign({ name: isUser.name, userid: isUser.id }, { secret: "aliu" });
            return { message: "done ", token: token };
        };
    }
};
exports.SigninService = SigninService;
exports.SigninService = SigninService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, jwt_1.JwtService])
], SigninService);
//# sourceMappingURL=signin.service.js.map