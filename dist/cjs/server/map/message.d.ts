export declare class Message {
    private _id;
    private _type;
    private _createtime;
    private _fromusername;
    private _tousername;
    private _content;
    private _atList;
    private _pushcontent;
    private _binarypayload;
    constructor({ id, type, createtime, fromusername, tousername, content, atList, pushcontent, binarypayload, }?: {
        id?: string;
        type?: number;
        createtime?: number;
        fromusername?: string;
        tousername?: string;
        content?: string;
        atList?: Array<string>;
        pushcontent?: string;
        binarypayload?: Uint8Array | string;
    });
    getId(): string;
    setId(value: string): this;
    getType(): number;
    setType(value: number): this;
    getCreatetime(): number;
    setCreatetime(value: number): this;
    getFromusername(): string;
    setFromusername(value: string): this;
    getTousername(): string;
    setTousername(value: string): this;
    getContent(): string;
    setContent(value: string): this;
    getPushcontent(): string;
    setPushcontent(value: string): this;
    getBinarypayload(): Uint8Array | string;
    getBinarypayload_asU8(): Uint8Array;
    setBinarypayload(value: Uint8Array | string): this;
    clearAtList(): void;
    getAtList(): Array<string>;
    setAtList(value: Array<string>): this;
    addAt(value: string, index?: number): string;
    serializeBinary(): Uint8Array;
    static deserializeBinary(bytes: Uint8Array): Message;
    serializeBinaryToWriter(writer: any): void;
    static deserializeBinaryFromReader(message: Message, reader: any): Message;
    toObject(includeInstance?: boolean): Message.AsObject;
    static extensions: {
        [key: number]: any;
    };
    static extensionsBinary: {
        [key: number]: any;
    };
}
export declare namespace Message {
    type AsObject = {
        id: string;
        type: number;
        createtime: number;
        fromusername: string;
        tousername: string;
        content: string;
        pushcontent: string;
        binarypayload: Uint8Array | string;
        atList: any[];
    };
}
//# sourceMappingURL=message.d.ts.map