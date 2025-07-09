export interface EmojiMessagePayload {
    type: number;
    len: number;
    md5: string;
    cdnurl: string;
    width: number;
    height: number;
    gameext?: string;
}
export declare function parseEmotionMessagePayload(message: any): Promise<EmojiMessagePayload>;
export declare function generateEmotionPayload(emojiMessagePayload: EmojiMessagePayload): string;
//# sourceMappingURL=message-emotion.d.ts.map