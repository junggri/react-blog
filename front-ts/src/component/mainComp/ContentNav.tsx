import React from "react";
import { Link } from "react-router-dom";
import { ContentNavComp, ContentBoxComp, ContentItemsComp } from "../../styled-comp";
interface Props {
  list: string[];
}
const ContentNav = ({ list }: Props) => {
  return (
    <ContentNavComp>
      <ContentBoxComp>
        {list.map((e, i) => (
          <Link to={`/content/${e}`} key={i}>
            <ContentItemsComp>
              <span className="list-num">{i}</span>
              {e}
            </ContentItemsComp>
          </Link>
        ))}
      </ContentBoxComp>
    </ContentNavComp>
  );
};

export default ContentNav;
