export declare namespace MessageRevokeInfo {
    type AsObject = {
        clientmsgid: string;
        newclientmsgid: string;
        createtime: number;
    };
}
export declare class MessageRevokeInfo {
    private _clientmsgid;
    private _newclientmsgid;
    private _createtime;
    getClientmsgid(): string;
    setClientmsgid(value: string): this;
    getNewclientmsgid(): string;
    setNewclientmsgid(value: string): this;
    getCreatetime(): number;
    setCreatetime(value: number): this;
    toObject(includeInstance?: boolean): MessageRevokeInfo.AsObject;
}
export declare class Response {
    private _msgid;
    private _messagerevokeinfo?;
    getMsgid(): string;
    setMsgid(value: string): this;
    hasMessagerevokeinfo(): boolean;
    clearMessagerevokeinfo(): void;
    getMessagerevokeinfo(): MessageRevokeInfo | undefined;
    setMessagerevokeinfo(value: MessageRevokeInfo.AsObject): this;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): any;
}
export declare namespace SendAppMessageResponse {
    type AsObject = {
        msgid: string;
        messagerevokeinfo?: MessageRevokeInfo.AsObject;
        msgcontent: string;
    };
}
export declare class SendAppMessageResponse extends Response {
    private _msgcontent;
    constructor();
    getMsgcontent(): string;
    setMsgcontent(value: string): this;
}
//# sourceMappingURL=response.d.ts.map