declare class topicModel {
    static getDataFromMode(identifier: string, topic: string | undefined): Promise<{
        result: any;
        content: string;
    }>;
    static getTemporaryContent(uid: string): Promise<{
        content: string;
    }>;
    static getPostDataForUpdate(uid: string): Promise<{
        content: string;
    }>;
    static createTopic(input: {
        topic: string;
    }): Promise<{
        state: boolean;
    }>;
    static deletePost({ topic, identifier }: {
        topic: string;
        identifier: string;
    }): Promise<{
        state: boolean;
    }>;
    static deleteTemporaryPost(input: {
        identifier: string;
    }): Promise<{
        state: boolean;
    }>;
}
export default topicModel;
