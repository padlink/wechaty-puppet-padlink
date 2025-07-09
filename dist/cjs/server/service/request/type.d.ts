import type { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface SyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: {
        requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
        requestFailFn?: (err: any) => any;
        responseSuccessFn?: (res: T) => T;
        responseFailFn?: (err: any) => any;
    };
}
//# sourceMappingURL=type.d.ts.map