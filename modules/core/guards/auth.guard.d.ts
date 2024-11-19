import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class AuthGuard implements CanActivate {
    private _jwtService;
    constructor(_jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
