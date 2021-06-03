import { useState } from "react";
import JustSay from "./justSay";
import Counter from "./counter";
import Timer from "./timer";
import JustShout from "./justShout";

const Allcard = ({
  cardList,
  onClickCloseCard,
  onClickIconEditJustSay,
  onClickIconEditJustShout,
  BtnIncreaseCounter,
  BtnDecreaseCounter,
  BtnSetZero,
  MapJustShout,
}) => {
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
    } else if (item.check === "Counter") {
      return (
        <Counter
          key={item.id}
          item={item.content}
          onClickCloseCard={() => onClickCloseCard(item)}
          BtnIncreaseCounter={BtnIncreaseCounter}
          BtnDecreaseCounter={BtnDecreaseCounter}
          BtnSetZero={BtnSetZero}
        />
      );
    } else if (item.check === "Timer") {
      return (
        <Timer key={item.id} onClickCloseCard={() => onClickCloseCard(item)} />
      );
    } else if (item.check === "JustShout"){
      return (
        <JustShout
          key={item.id}
          item={item.content}
          onClickCloseCard={() => onClickCloseCard(item)}
          MapJustShout={MapJustShout}
          onClickIconEditJustShout={() => onClickIconEditJustShout(item)}
        />
      );
    }
  });

  return <>{showListCard}</>;
};
export default Allcard;
