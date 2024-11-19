import { SigninService } from './signin.service';
import { Signindto } from './dto/sign.dto';
export declare class SigninController {
    private _SigninService;
    constructor(_SigninService: SigninService);
    signin(body: Signindto): Promise<{
        message: string;
        token: string;
    }>;
}
