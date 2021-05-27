import { useState } from "react";
import Card from "./card";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const onClickBtIncreast = () => {
    setNumber(number + 1);
  };
  const onClickBtnDecreast = () => {
    setNumber(number - 1);
  };
  const onClickBtnSetZero = () => {
    setNumber(0);
  };

  

  return (
    <Card>
        <h2 class="text-lg font-bold text-gray-400 mb-1.5"> Counter</h2>
        <div class="absolute top-5 right-5">
          <button class="text-lg text-gray-600 focus:outline-none undefined"></button>
        </div>
        <div class="text-center">
          {number > 0 ? (
            <>
              <div class="flex items-center justify-center mt-4 mb-6">
                <button
                  onClick={onClickBtnDecreast}
                  class="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
                >
                  -
                </button>
                <div class="text-6xl mx-7">{number}</div>
                <button
                  onClick={onClickBtIncreast}
                  class="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
                >
                  +
                </button>
              </div>
              <button
                onClick={onClickBtnSetZero}
                class="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 "
              >
                set zero
              </button>
            </>
          ) : (
            <>
              <div class="flex items-center justify-center mt-4 mb-6">
                <button
                  onClick={onClickBtnDecreast}
                  class="text-5xl rounded-full w-10 text-center focus:outline-none text-gray-300 cursor-default"
                  disabled
                >
                  -
                </button>
                <div class="text-6xl mx-7">{number}</div>
                <button
                  onClick={onClickBtIncreast}
                  class="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
                >
                  +
                </button>
              </div>
              <button
                onClick={onClickBtnSetZero}
                class="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default"
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
