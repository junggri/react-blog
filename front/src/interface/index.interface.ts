export interface IHomeMainSectionProps {//HomeMainSection
   width: any;
   list: any;
   height: any;
}

export interface IContentSectionProps {//ContentContainer
   width: number;
   list: any
   height: number;
   match: any
}

export interface IContentNavProps {//contet-nav-bar
   list: string[];
   height: number;
}

export interface ITopicItemsProps {//ContentTopicItems
   match: any
}

export interface IPostContainerProps {//PostContainer
   match: any
}

export interface IGetPostFromPostId {//axios getPostFromPostId
   topic: string,
   postsId: string
}

export interface ISelectopicProps {//SelectTopic
   onIsChecked: any
   topic: any[] | null
   checked: string
}

export interface IKindsOfPostsProps {//kindofPosts
   onCheck: (payload: string) => void
   checked: string
}

export interface ICreateNewTopicProps {//createNewtopic-write
   topic: any[] | null
   token: string
   onMakeOrDelteTopic: () => void
}

export interface ITextEditBtnBoxProps {//wirte BtnBox
   onSubmit: any
   onSaveTemporaryPost: () => void
}

export interface IPostsDetailProps {//postssDetia
   onChangeDetail: (payload: string) => void
   detailValue: string
}

export interface ITempPost {
   uid: string,
   topic: string,
   content_name: string,
   created: string,
   detail: string,
   file: string
}

