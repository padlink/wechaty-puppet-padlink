type PollingOptions = {
    interval: number;
    retries: number;
};
export declare function poll<T>(task: () => Promise<T>, options: PollingOptions): Promise<T>;
export {};
//# sourceMappingURL=polling.d.ts.map