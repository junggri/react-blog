import { ICommentDeletDataProps, ISaveCommentProps, ISaveReplyProps } from "../interace";
declare const indexModel: {
    createNewCommetTable(ref: string): Promise<void>;
    getComment(postid: string): Promise<{
        state: boolean;
        data: import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader");
    } | {
        state: boolean;
        data?: undefined;
    }>;
    saveComment({ ...props }: ISaveCommentProps): Promise<{
        state: boolean;
    }>;
    saveReply({ ...props }: ISaveReplyProps): Promise<{
        state: boolean;
        data: any;
    } | {
        state: boolean;
        data?: undefined;
    }>;
    deleteComment(data: ICommentDeletDataProps): Promise<{
        state: boolean;
    }>;
    deleteCmtTable(postid: string): Promise<void>;
    login(data: {
        id: string;
        pwd: string;
    }): Promise<boolean>;
};
export default indexModel;
