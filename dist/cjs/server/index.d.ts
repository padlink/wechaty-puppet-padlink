/// <reference types="node" />
import { EventEmitter } from "events";
import { Api } from "./service/api/index3.js";
import type { Contact } from "./map/index.js";
export type localClientEvent = "kickout" | "contact" | "message";
export declare class LocalClient extends EventEmitter {
    selfContact?: Contact;
    readonly token: string;
    readonly proxy: any;
    readonly arr: any;
    readonly api: Api;
    constructor(options: any);
    emit(event: localClientEvent, ...args: any[]): boolean;
}
//# sourceMappingURL=index.d.ts.map