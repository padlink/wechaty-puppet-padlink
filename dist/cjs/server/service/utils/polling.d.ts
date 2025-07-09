export declare class Polling {
    private isPolling;
    constructor();
    poll(interval: number, task: () => Promise<any>): Promise<void>;
    stop(): void;
    start(): void;
}
//# sourceMappingURL=polling.d.ts.map