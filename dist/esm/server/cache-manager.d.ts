export declare class CacheManager {
    private readonly _userName;
    private _tokenCache?;
    private _roomCache?;
    private _roomMemberCache?;
    constructor(userName: string);
    init(): Promise<void>;
    close(): Promise<void>;
    getRoom(roomId: string): Promise<any | undefined>;
    setRoom(roomId: string, payload: any): Promise<void>;
    deleteRoom(roomId: string): Promise<void>;
    getRoomIds(): Promise<string[]>;
    getRoomCount(): Promise<number>;
    hasRoom(roomId: string): Promise<boolean>;
    getRoomMember(roomId: string): Promise<any | undefined>;
    setRoomMember(roomId: string, payload: any): Promise<void>;
    deleteRoomMember(roomId: string): Promise<void>;
    getUUID(token: string): Promise<any | undefined>;
    setUUID(token: string, options: any): Promise<void>;
    deleteToken(token: string): Promise<void>;
}
//# sourceMappingURL=cache-manager.d.ts.map