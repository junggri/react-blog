export interface ITopCommonSectionProps {//top
   width: number
   onGetHeight: (payload: HTMLDivElement) => void
}

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
}

export interface IKindsOfPostsProps {//kindofPosts
   onCheck: (payload: string) => void
}

export interface ICreateNewTopicProps {//createNewtopic-write
   topic: any[] | null
   token: string
   onMakeOrDelteTopic: () => void
}

export interface ITextEditBtnBoxProps {//wirte BtnBox
   onSubmit: any
   onTemporaryPost: () => void
}

export interface IPostsDetailProps {//postssDetia
   onChangeDetail: (payload: string) => void
}

export interface ITempPost {
   uid: string,
   topic: string,
   content_name: string,
   created: string,
   detail: string,
   file: string
}

