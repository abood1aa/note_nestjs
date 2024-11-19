import { SignUpdto } from './dto/sign.dto';
import { SignupService } from './signup.service';
export declare class SignupController {
    private _SignupService;
    constructor(_SignupService: SignupService);
    signup(body: SignUpdto): Promise<{
        message: string;
    }>;
}
