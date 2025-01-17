import { AuthService } from './auth.service';
import { Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: Request): Promise<any>;
}
