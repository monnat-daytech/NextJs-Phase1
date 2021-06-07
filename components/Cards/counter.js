import { useState } from "react";
import Card from "./card";
import { IoClose } from "react-icons/io5";

const Counter = ({
  item,
  BtnIncreaseCounter,
  BtnDecreaseCounter,
  onClickCloseCard,
  BtnSetZero,
}) => {

  const [number, setNumber] = useState(parseInt(item));
  const onClickBtIncrease = () => {
    setNumber(number + 1);
    BtnIncreaseCounter(number);
    console.log(typeof number);
  };
  const onClickBtnDecrease = () => {
    setNumber(number - 1);
    BtnDecreaseCounter(number);
  };
  const onClickBtnSetZero = () => {
    BtnSetZero(number);
    setNumber(0);
  };

  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-400 mb-1.5"> Counter</h2>
      <div className="absolute top-5 right-5">
        <button
          onClick={onClickCloseCard}
          className="text-lg text-gray-600 focus:outline-none undefined"
        >
          <IoClose />
        </button>
      </div>
      <div className="text-center">
        {number > 0 ? (
          <>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                onClick={onClickBtnDecrease}
                className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
              >
                -
              </button>
              <div className="text-6xl mx-7">{number}</div>
              <button
                onClick={onClickBtIncrease}
                className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
              >
                +
              </button>
            </div>
            <button
              onClick={onClickBtnSetZero}
              className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 "
            >
              set zero
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                onClick={onClickBtnDecrease}
                className="text-5xl rounded-full w-10 text-center focus:outline-none text-gray-300 cursor-default"
                disabled
              >
                -
              </button>
              <div className="text-6xl mx-7">{number}</div>
              <button
                onClick={onClickBtIncrease}
                className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
              >
                +
              </button>
            </div>
            <button
              onClick={onClickBtnSetZero}
              className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default"
              disabled
            >
              set zero
            </button>
          </>
        )}
      </div>
    </Card>
  );
};

export default Counter;
