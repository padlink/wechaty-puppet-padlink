export declare class PackageManager {
    private platform;
    private isInitialized;
    constructor();
    initialize(): Promise<void>;
    private checkBinaryServiceReady;
    private checkRedisRunning;
    isReady(): boolean;
}
//# sourceMappingURL=PackageManager.d.ts.map