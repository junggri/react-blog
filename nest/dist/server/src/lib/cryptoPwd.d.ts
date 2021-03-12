export interface ICommnet {
    board: number;
    bgroup: number;
    parent: number;
    sorts: number;
    depth: number;
    cmt: string;
    writer: string;
    created: string;
    pwd: string;
    salt: string;
}
export declare function cryptoPwd(pwd: string): Promise<{
    salt: string;
    _pwd: string;
}>;
export declare function decryptoPwd(data: ICommnet, pwd: string, writer: string): Promise<boolean>;
