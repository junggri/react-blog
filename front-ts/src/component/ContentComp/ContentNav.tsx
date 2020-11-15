import React from "react";
import { Link } from "react-router-dom";
import { ContentNavComp, ContentBoxComp, ContentItemsComp } from "../../styled-comp";
interface Props {
  list: string[];
}
const ContentNav = ({ list }: Props) => {
  window.addEventListener("scroll", () => {
    let top = (document.querySelector("html") as any).scrollTop;
    if (top >= 320) {
      (document.querySelector(".content-nav") as HTMLElement).style.position = "fixed";
      (document.querySelector(".content-nav") as HTMLElement).style.top = "0";
    } else {
      (document.querySelector(".content-nav") as HTMLElement).style.position = "relative";
    }
  });
  return (
    <ContentNavComp className="content-nav">
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
