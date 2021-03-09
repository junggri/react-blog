import { Connection, EntityManager } from "typeorm";
export declare class ContentService {
    private connection;
    private entityManager;
    constructor(connection: Connection, entityManager: EntityManager);
    getAllPosts(): Promise<any>;
}
