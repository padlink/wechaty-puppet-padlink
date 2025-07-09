export declare class ChatRoomMember {
    private _username;
    private _nickname;
    private _displayname;
    private _avatar;
    private _inviterusername;
    getUsername(): string;
    setUsername(value: string): ChatRoomMember;
    getNickname(): string;
    setNickname(value: string): ChatRoomMember;
    getDisplayname(): string;
    setDisplayname(value: string): ChatRoomMember;
    getAvatar(): string;
    setAvatar(value: string): ChatRoomMember;
    getInviterusername(): string;
    setInviterusername(value: string): ChatRoomMember;
    toObject(): ChatRoomMember.AsObject;
}
export declare namespace ChatRoomMember {
    type AsObject = {
        username: string;
        nickname: string;
        displayname: string;
        avatar: string;
        inviterusername: string;
    };
}
export interface GetChatRoomMembersResponse {
    memberList: ChatRoomMember[];
}
//# sourceMappingURL=RoomMemberList.d.ts.map