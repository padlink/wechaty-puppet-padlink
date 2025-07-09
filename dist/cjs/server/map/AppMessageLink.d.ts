export declare class AppMessageLink {
    private title;
    private description;
    private url;
    private thumbImage;
    private thumbURL;
    getTitle(): string;
    setTitle(value: string): this;
    getDescription(): string;
    setDescription(value: string): this;
    getUrl(): string;
    setUrl(value: string): this;
    getThumbImage_asU8(): Uint8Array;
    getThumbImage_asB64(): string;
    setThumbImage(value: Uint8Array | string): this;
    getThumburl(): string;
    setThumburl(value: string): this;
    private decodeBase64;
    private encodeBase64;
    toObject(): AppMessageLink.AsObject;
}
export declare namespace AppMessageLink {
    interface AsObject {
        title: string;
        description: string;
        url: string;
        thumbImage: string;
        thumbURL: string;
    }
}
//# sourceMappingURL=AppMessageLink.d.ts.map