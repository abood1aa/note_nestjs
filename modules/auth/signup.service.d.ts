import { Model } from 'mongoose';
import { User } from '../core/schema/user.schema';
export declare class SignupService {
    private userModel;
    constructor(userModel: Model<User>);
    signup: (user: any) => Promise<{
        message: string;
    }>;
}
