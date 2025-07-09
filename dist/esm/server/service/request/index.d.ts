import type { AxiosInstance } from "axios";
import type { SyRequestConfig } from "./type";
declare class SyRequest {
    instance: AxiosInstance;
    constructor(pubConfig: any);
    request<T>(uniConfig: SyRequestConfig<T>): Promise<T>;
    get<T = any>(uniConfig: SyRequestConfig<T>): Promise<T>;
    post<T = any>(uniConfig: SyRequestConfig<T>): Promise<T>;
    patch<T = any>(uniConfig: SyRequestConfig<T>): Promise<T>;
    delete<T = any>(uniConfig: SyRequestConfig<T>): Promise<T>;
}
export default SyRequest;
//# sourceMappingURL=index.d.ts.map