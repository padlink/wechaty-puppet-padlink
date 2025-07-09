import type * as PUPPET from "wechaty-puppet";
import type { AppMessagePayload } from "../../messages/message-appmsg";
export type MessageParserContext = {
    puppet: PUPPET.Puppet;
    isRoomMessage: boolean;
    appMessagePayload?: AppMessagePayload;
};
export type MessageParser = (padPlusMessage: any, ret: PUPPET.payloads.Message, context: MessageParserContext) => Promise<PUPPET.payloads.Message>;
export declare function addMessageParser(parser: MessageParser): void;
export declare function executeMessageParsers(puppet: PUPPET.Puppet, padPlusMessage: any, ret: PUPPET.payloads.Message): Promise<PUPPET.payloads.Message>;
export declare const LOGPRE = "message-parser";
//# sourceMappingURL=message-parser.d.ts.map