import { EditorAction, ITextInitialProps } from "./textEdit.interface";
export declare const onSetContent: (content: string) => {
    type: "textEdit/SET_CONTENT";
    payload: string;
};
export declare const onSetContentName: (contentName: string) => {
    type: "textEdit/SET_CONTENT_NAME";
    payload: string;
};
export declare const onSetTopic: (topic: string) => {
    type: "textEdit/SET_TOPIC";
    payload: string;
};
export declare const onSetKindOfPosts: (kindOfPosts: string) => {
    type: "textEdit/SET_KIND_OF_POSTS";
    payload: string;
};
export declare const onSetDetail: (detail: string) => {
    type: "textEdit/SET_DETAIL";
    payload: string;
};
export declare const onSetThumbNail: (thumbnail: string) => {
    type: "textEdit/SET_THUMBNAIL";
    payload: string;
};
export declare const onSetTempData: (data: ITextInitialProps) => {
    type: "textEdit/SET_TEMP_DATA";
    payload: ITextInitialProps;
};
declare function TextEditor(state: ITextInitialProps, action: EditorAction): ITextInitialProps;
export default TextEditor;
