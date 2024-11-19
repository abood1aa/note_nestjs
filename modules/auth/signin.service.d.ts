import { User } from '../core/schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class SigninService {
    private userModel;
    private _jwtService;
    constructor(userModel: Model<User>, _jwtService: JwtService);
    signin: (user: any) => Promise<{
        message: string;
        token: string;
    }>;
}
