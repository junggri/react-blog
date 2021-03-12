import { ITextEditSaveProps } from "../interace";
declare const contentModel: {
    getAllPosts(): Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
    getTemporaryPost(uid: string): Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader") | {
        state: boolean;
    }>;
    getPost(topic: string, uid: string): Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader") | {
        state: boolean;
    }>;
    getTopicAndTemporaryPost(): Promise<{
        tables: import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader") | {
            state: boolean;
        };
        posts: import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader") | {
            state: boolean;
        };
        state?: undefined;
    } | {
        state: boolean;
        tables?: undefined;
        posts?: undefined;
    }>;
    increaseCmtCount<T, U>(topic: T, postid: U): Promise<void>;
    decreaseCmtCount<T_1, U_1>(topic: T_1, postid: U_1, length: number): Promise<void>;
    savePost(data: ITextEditSaveProps): Promise<{
        state: boolean;
    }>;
    saveTemporaryPost(data: ITextEditSaveProps, uid?: string): Promise<{
        state: boolean;
    }>;
    deleteTemporaryPostAndSavePost(params: any, data: ITextEditSaveProps): Promise<{
        state: boolean;
    }>;
    createNewTopic(topicName: string): Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader") | {
        state: boolean;
    }>;
    updatePost(params: any, data: ITextEditSaveProps): Promise<{
        state: boolean;
    }>;
    deletePost: ({ uid, topic }: {
        uid: string;
        topic: string;
    }) => Promise<{
        state: boolean;
    }>;
    deleteTemporaryPost(uid: string): Promise<{
        state: boolean;
        statet?: undefined;
    } | {
        statet: boolean;
        state?: undefined;
    }>;
    deleteTopic(topic: string): Promise<{
        state: boolean;
    }>;
};
export default contentModel;
