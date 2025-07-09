/// <reference types="node" />
export type PromiseResolveFunc = (val: any) => void;
export type PromiseRejectFunc = (error: Error) => void;
export declare class PromiseCallback {
    private readonly _resolve;
    private readonly _reject;
    private _timeoutId?;
    constructor(resolve: PromiseResolveFunc, reject: PromiseRejectFunc, timeoutId?: NodeJS.Timeout);
    resolve(val?: any): void;
    reject(error: Error): void;
    private _invalidateTimeout;
}
//# sourceMappingURL=PromiseUtils.d.ts.map