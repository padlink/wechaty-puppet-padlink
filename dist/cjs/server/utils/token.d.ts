export declare class TokenManager {
    private tokenStore?;
    private baseDir;
    constructor();
    init(): Promise<void>;
    getUUID(token: string): Promise<any | undefined>;
    setUUID(token: string, options: any): Promise<void>;
    deleteToken(token: string): Promise<void>;
    close(): Promise<void>;
}
//# sourceMappingURL=token.d.ts.map