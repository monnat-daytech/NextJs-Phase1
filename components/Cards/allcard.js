import JustSay from "./justSay";
import Counter from "./counter";
import Timer from "./timer";
import JustShout from "./justShout";
import OpenWeather from "./openWeather";

const Allcard = ({
  cardList,
  onClickCloseCard,
  onClickIconEditJustSay,
  onClickIconEditJustShout,
  BtnIncreaseCounter,
  BtnDecreaseCounter,
  BtnSetZero,
  MapJustShout,
  onClickOpenWeatherRefresh,
  onClickIconEditOpenWeather,
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
    } else if (item.check === "JustShout") {
      return (
        <JustShout
          key={item.id}
          item={item.content}
          onClickCloseCard={() => onClickCloseCard(item)}
          MapJustShout={MapJustShout}
          onClickIconEditJustShout={() => onClickIconEditJustShout(item)}
        />
      );
    } else if (item.check == "OpenWeather") {
      return (
        <OpenWeather
          key={item.id}
          item={item}
          onClickOpenWeatherRefresh={() => onClickOpenWeatherRefresh(item)}
          onClickIconEditOpenWeather={() => onClickIconEditOpenWeather (item)}
          onClickCloseCard={() => onClickCloseCard(item)}
        />
      );
    }
  });

  return <>{showListCard}</>;
};
export default Allcard;
