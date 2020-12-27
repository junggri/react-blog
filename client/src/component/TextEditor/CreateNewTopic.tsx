import React, {useState} from "react";
import {
    AddTopicBtnComp,
    CreateNewTopicComp,
    CreateNewTopicListBoxComp,
    CreateNewTopicListItemComp,
    DeleteTopicIconComp
} from "../../styled-comp";
import {MdDelete} from "react-icons/md";
import {IoIosAddCircle} from "react-icons/io";
import util from "../../lib/axios";
import {ICreateNewTopicProps} from "../../interface/index.interface";


function CreateNewTopic({topic, token, onMakeOrDelteTopic}: ICreateNewTopicProps) {
    const [click, setClick] = useState<boolean>(false);
    const [newTopic, setNewtopic] = useState<string>("");

    const setNewTopicName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewtopic(e.target.value);
    };

    const previousMakeNewTopic = () => {
        setClick(!click);
    };

    const makeNewTopic = async () => {
        await util.makeNewTopic(newTopic, token);
        onMakeOrDelteTopic();
        setClick(!click);
        setNewtopic("");
    };

    const deleteTopic = async (e: React.ChangeEvent<HTMLElement>) => {
        if (window.confirm("정말로 삭제하겠습니까? 삭제하면 정보가 다사라집니다.")) {
            await util.deleteTopic((e.currentTarget.dataset.topic) as string, token);
            onMakeOrDelteTopic();
        }
    };

    //TODO 엔터 입력시 만들어버리게

    if (topic === null) return null;

    return (
        <CreateNewTopicComp>
            <h1>토픽관리하기</h1>
            <CreateNewTopicListBoxComp>
                {topic.map((v: { Tables_in_contents: string }) => (
                    <CreateNewTopicListItemComp key={v["Tables_in_contents"]}>
                        <span>{v["Tables_in_contents"]}</span>
                        <DeleteTopicIconComp onClick={deleteTopic} data-topic={v["Tables_in_contents"]}>
                            <MdDelete/>
                        </DeleteTopicIconComp>
                    </CreateNewTopicListItemComp>
                ))}
            </CreateNewTopicListBoxComp>

            {click &&
            <AddTopicBtnComp>
                <input type="text" value={newTopic} onChange={setNewTopicName}/>
                <IoIosAddCircle className="make-new-topic-btn" onClick={makeNewTopic}/>
            </AddTopicBtnComp>
            }

            <IoIosAddCircle className="add-new-topic-btn" onClick={previousMakeNewTopic}/>
        </CreateNewTopicComp>
    );
}

export default React.memo(CreateNewTopic);