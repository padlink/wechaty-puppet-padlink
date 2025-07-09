import type * as PadPlus from "../../server/map/index.js";
import type { PatMessagePayload } from "./sysmsg/message-pat";
import type { SysmsgTemplateMessagePayload } from "./sysmsg/message-sysmsgtemplate";
import type { TodoMessagePayload } from "./sysmsg/message-todo.js";
import type { RevokeMsgMessagePayload } from "./sysmsg/message-revokemsg";
type SysMsgType = "pat" | "sysmsgtemplate" | "roomtoolstips" | "revokemsg";
type SysMsgPayload = PatMessagePayload | SysmsgTemplateMessagePayload | TodoMessagePayload | RevokeMsgMessagePayload;
export interface SysmsgMessagePayload {
    type: SysMsgType;
    payload: SysMsgPayload;
}
export declare function parseSysmsgMessagePayload(message: PadPlus.Message.AsObject): Promise<SysmsgMessagePayload | null>;
export declare function parseSysmsgPatMessagePayload(message: PadPlus.Message.AsObject): Promise<PatMessagePayload | null>;
export declare function parseSysmsgSysmsgTemplateMessagePayload(message: PadPlus.Message.AsObject): Promise<SysmsgTemplateMessagePayload | null>;
export declare function parseSysmsgTodoMessagePayload(message: PadPlus.Message.AsObject): Promise<TodoMessagePayload | null>;
export declare function parseSysmsgRevokeMsgMessagePayload(message: PadPlus.Message.AsObject): Promise<RevokeMsgMessagePayload | null>;
export {};
//# sourceMappingURL=message-sysmsg.d.ts.map