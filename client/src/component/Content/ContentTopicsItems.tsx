import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {ContentTopicListComp} from "../../styled-comp";
import usePosts from "../../useHooks/usePosts";
import {AiFillNotification} from "react-icons/ai";

interface IPostsModuleProps {
    posts: IPostProps<IPostItemProps>
    post: IPostProps<IPostItemProps>
    getPosts: (params: string) => void
}

interface IPostProps<T> {
    data: T[] | null
    loading: boolean | null
    error: Error | null
}

interface IPostItemProps {
    comments: string | null
    uid: string
    content_name: string
    created: string
    file: string,
    detail: string
    kindofPosts: string
    modified: string | null
}

interface ITopicItemsProps {
    match: any
}

function ContentTopicItems({match}: ITopicItemsProps) {
    // const {posts, getPosts}: IPostsModuleProps<IPostProps<IPostItemProps>> = usePosts();
    const {posts, getPosts}: IPostsModuleProps = usePosts();

    const {data, loading, error}: IPostProps<IPostItemProps> = posts;

    const params = match.params.topic;

    useEffect(() => {
        getPosts(params);
    }, [params]);

    if (loading) return (<ContentTopicListComp>...로딩중</ContentTopicListComp>);
    if (data === null) return null;

    return (
        <>
            {data.map((v) => (
                <Link to={`/content/${params}/${v.uid}`} key={v.uid}>
                    <div data-uid={v.uid}>
                        <ContentTopicListComp>
                            <div className="content-meta-data">
                                <div className="posts-contentName-box">
                                    {v.kindofPosts === "notice"
                                        ? <div className="posts-notice-icon">
                                            <AiFillNotification/>
                                        </div>
                                        : ""}
                                    <h1>{v.content_name}</h1>
                                </div>
                                <div className="content-detail-meta-data">
                                    <span>{v.detail}</span>
                                </div>
                                <div className="content-create">{v.created}</div>
                            </div>
                        </ContentTopicListComp>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default React.memo(ContentTopicItems);