import { useState } from "react";
import Card from "./card";
import { IoClose } from "react-icons/io5";
import { MdRefresh } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const OpenWeather = ({
  item,
  onClickOpenWeatherRefresh = () => {},
  onClickIconEditOpenWeather = () => {},
  onClickCloseCard = () => {},
}) => {
  const [itemList, setItemList] = useState([item]);
  const showItem = itemList.map((item) => {
    return (
      <Card>
        {item.content.valid ? (
          <>  {" "}
          <h2 class="text-lg font-bold text-gray-400 mb-1.5">Weather</h2>
          <div class="absolute top-5 right-5">
            <button class="text-lg text-gray-600 focus:outline-none mr-2">
         
            </button>
            <button
              onClick={onClickIconEditOpenWeather}
              class="text-lg text-gray-600 focus:outline-none mr-2"
            >
              <MdEdit />
            </button>
            <button
              onClick={onClickCloseCard}
              class="text-lg text-gray-600 focus:outline-none undefined"
            >
              <IoClose />
            </button>
          </div>
          <div class="text-center">
            <h3 class="text-xl text-red-500 font-bold capitalize">{item.content.input}</h3>
            <h4 class="text-red-500 -mt-1">
              <span class="align-middle">
                City not found
              </span>
            </h4>
            <h2 class="text-red-500 mt-1 text-5xl font-extralight">
              {" "}
              _ _
            </h2>
          </div>
          <div class="mt-6 ">
            <div class="text-xs text-gray-400">
              <div class="-mb-2 text-center">{item.time}</div>
            </div>
          </div></>
        ) : (
          <>
            {" "}
            <h2 class="text-lg font-bold text-gray-400 mb-1.5">Weather</h2>
            <div class="absolute top-5 right-5">
              <button class="text-lg text-gray-600 focus:outline-none mr-2">
                <MdRefresh onClick={onClickOpenWeatherRefresh} />
              </button>
              <button
                onClick={onClickIconEditOpenWeather}
                class="text-lg text-gray-600 focus:outline-none mr-2"
              >
                <MdEdit />
              </button>
              <button
                onClick={onClickCloseCard}
                class="text-lg text-gray-600 focus:outline-none undefined"
              >
                <IoClose />
              </button>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold capitalize">{item.content.name}</h3>
              <h4 class="text-gray-400 -mt-1">
                <img
                  className="h-9 w-9 align-middle text-2xl mr-1.5"
                  src={`http://openweathermap.org/img/wn/${item.content.weather[0].icon}@2x.png`}
                  alt="logo"
                />
                <span class="align-middle">
                  {item.content.weather[0].description}
                </span>
              </h4>
              <h2 class="text-gray-500 mt-1 text-5xl font-extralight">
                {" "}
                {item.content.main.temp}° <br></br>
              </h2>
            </div>
            <div class="mt-6 ">
              <div class="text-xs text-gray-400">
                <div class="-mb-2 text-center">{item.time}</div>
              </div>
            </div>
          </>
        )}
      </Card>
    );
  });
  return <>{showItem}</>;
};

export default OpenWeather;
