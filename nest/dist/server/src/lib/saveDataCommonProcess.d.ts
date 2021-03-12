import { ITextInitialProps } from "../../../front/src/modules/TextEditor/textEdit.interface";
export default function savePost(folderName: string, data: ITextInitialProps): {
    uid: string;
    today: Date;
    dateString: string;
    filePath: string;
    query: any;
    dep: any;
};
