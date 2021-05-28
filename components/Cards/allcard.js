import { useState } from "react";
import JustSay from "./justSay";
import Counter from "./counter";
import Timer from "./timer";

const Allcard = ({ cardList, onClickCloseCard ,onClickIconEditJustSay }) => {
  const showListCard = cardList.map((item) => {
    if (item.check === "JustSay") {
      return (
        <JustSay
          key={item.id}
          item={item.content}
          onClickCloseCard={() => onClickCloseCard(item)}
          onClickIconEditJustSay={() => onClickIconEditJustSay(item)}
        />
      );
    } else if (item.check === "Counter")
      return (
        <Counter
          key={item.id}
          item={item.content}
          onClickCloseCard={() => onClickCloseCard(item)}
        />
      );
    else if (item.check === "Timer")
      return <Timer key={item.id} onClickCloseCard={() => onClickCloseCard(item)}/>;
  });

  return <>{showListCard}</>;
};
export default Allcard;
