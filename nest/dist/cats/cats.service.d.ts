interface Connection {
    test: string;
}
export declare class CatsService {
    private connection;
    constructor(connection: Connection);
    test(): void;
}
export {};
