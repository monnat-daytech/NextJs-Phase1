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
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">Weather</h2>
          <div className="absolute top-5 right-5">
            <button className="text-lg text-gray-600 focus:outline-none mr-2">
         
            </button>
            <button
              onClick={onClickIconEditOpenWeather}
              className="text-lg text-gray-600 focus:outline-none mr-2"
            >
              <MdEdit />
            </button>
            <button
              onClick={onClickCloseCard}
              className="text-lg text-gray-600 focus:outline-none undefined"
            >
              <IoClose />
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-xl text-red-500 font-bold capitalize">{item.content.input}</h3>
            <h4 className="text-red-500 -mt-1">
              <span className="align-middle">
                City not found
              </span>
            </h4>
            <h2 className="text-red-500 mt-1 text-5xl font-extralight">
              {" "}
              _ _
            </h2>
          </div>
          <div className="mt-6 ">
            <div className="text-xs text-gray-400">
              <div className="-mb-2 text-center">{item.time}</div>
            </div>
          </div></>
        ) : (
          <>
            {" "}
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">Weather</h2>
            <div className="absolute top-5 right-5">
              <button className="text-lg text-gray-600 focus:outline-none mr-2">
                <MdRefresh onClick={onClickOpenWeatherRefresh} />
              </button>
              <button
                onClick={onClickIconEditOpenWeather}
                className="text-lg text-gray-600 focus:outline-none mr-2"
              >
                <MdEdit />
              </button>
              <button
                onClick={onClickCloseCard}
                className="text-lg text-gray-600 focus:outline-none undefined"
              >
                <IoClose />
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold capitalize">{item.content.name}</h3>
              <h4 className="text-gray-400 -mt-1">
                <img
                  className="h-9 w-9 align-middle text-2xl mr-1.5"
                  src={`http://openweathermap.org/img/wn/${item.content.weather[0].icon}@2x.png`}
                  alt="logo"
                />
                <span className="align-middle">
                  {item.content.weather[0].description}
                </span>
              </h4>
              <h2 className="text-gray-500 mt-1 text-5xl font-extralight">
                {" "}
                {item.content.main.temp}° <br></br>
              </h2>
            </div>
            <div className="mt-6 ">
              <div className="text-xs text-gray-400">
                <div className="-mb-2 text-center">{item.time}</div>
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
