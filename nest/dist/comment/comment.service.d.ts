import { Connection, EntityManager } from "typeorm";
export declare class CommentService {
    private connection;
    private entityManager;
    constructor(connection: Connection, entityManager: EntityManager);
    test(): Promise<void>;
}
