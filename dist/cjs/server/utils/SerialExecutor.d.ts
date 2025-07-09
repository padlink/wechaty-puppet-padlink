export type SerialJobFunc = () => Promise<any>;
export declare class SerialExecutor {
    private _jobs;
    private _executing;
    constructor();
    execute<T>(jobFunc: SerialJobFunc, type?: string): Promise<T>;
    clear(type?: string): void;
    private _executeNextJob;
}
//# sourceMappingURL=SerialExecutor.d.ts.map