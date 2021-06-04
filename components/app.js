import WidgetCounter from "./WidgetCards/widgetCounter";
import WidgetJustSay from "./WidgetCards/widgetJustSay";
import WidgetTimer from "./WidgetCards/widgetTimer";
import WidgetJustShout from "./WidgetCards/widgetJustShout";
import WidgetOpenWeather from "./WidgetCards/widgetOpenWeather";
import { useState } from "react";
import Modal from "./modal";
import Allcard from "./Cards/allcard";
import ModalSetting from "./modalSetting";
import { RiAddCircleLine, RiSettings3Line } from "react-icons/ri";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [numOfJustShout, setNumOfJustShout] = useState(0);
  const [sumOfJustShout, setSumOfJustShout] = useState(0);
  const [countJustShout, setCountJustShout] = useState(0);
  const [settingJustShout, setSettingJustShout] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [countCounter, setCountCounter] = useState(0);
  const [newInputJustSay, setNewInputJustSay] = useState();
  const [newInputOpenWeather, setNewInputOpenWeather] = useState();
  const [countAddJustSay, setCountAddJustSay] = useState(0);
  const [cardList, setCardList] = useState([
    {
      content: "",
      check: "",
      id: "",
    },
  ]);
  const [validate, setValidate] = useState({
    JustSay: false,
    Counter: false,
    OpenWeather: false,
  });
  const [modalCode, setModalCode] = useState({
    JustSayCode: false,
    EditJustSayCode: false,
    CounterCode: false,
    JustShoutCode: false,
    EditJustShoutCode: false,
    OpenWeatherCode: false,
    EditOpenWeatherCode: false,
  });

  const BtnIncreaseCounter = (number) => {
    setCountCounter(countCounter + 1);
    console.log(number);
  };

  const BtnDecreaseCounter = (number) => {
    setCountCounter(countCounter - 1);
    console.log(number);
  };

  const BtnSetZero = (number) => {
    console.log(number);
    setCountCounter(countCounter - number);
  };

  const onClickIconCloseSetting = () => {
    setShowSetting(false);
  };

  const onClickDeleteAll = () => {
    setShowSetting(false);
    setCardList([0]);
    setCountCounter(0);
    setCountAddJustSay(0);
  };

  const onClickBtnSetZero = () => {
    setShowSetting(false);
    setCardList(
      cardList.map((card) => {
        if (card.check === "Counter") {
          card.content = 0;
          return card;
        } else {
          return card;
        }
      })
    );
  };

  const onClickBtnEditJustSay = (input) => {
    if (input.length > 2) {
      setModalCode({ EditJustSayCode: false });
      setCardList(
        cardList.map((card) => {
          if (card.id === newInputJustSay.id) {
            //3 + 4 - 4 + 4
            //ตัวที่รับเข้ามา + ตัวเก่า - ตัวเก่า + (ตัวทั้งหมด - ตัวเก่า)
            // 3 + 4 - 4 + (8-4)
            // 4 + 3 - 4
            // 3 + (8-4)
            const num = input.length + (countAddJustSay - card.content.length);
            setCountAddJustSay(num);
            newInputJustSay.content = input;
            return newInputJustSay;
          } else {
            return card;
          }
        })
      );
      setValidate({ JustSay: false });
    } else {
      setValidate({ JustSay: true });
    }
  };
  const onClickIconEditJustSay = (item) => {
    setNewInputJustSay(item);
    setModalCode({ EditJustSayCode: true, asd: item.content });
  };

  const onClickCloseCard = (item) => {
    setCardList(cardList.filter((_item) => _item.id !== item.id));
    cardList.map((card) => {
      if (card.id === item.id) {
        setCountAddJustSay(countAddJustSay - item.content.length);
      }
    });
  };

  const onClickWidgetCounter = () => {
    setModalCode({ CounterCode: true });
    setShowModal(false);
  };

  const onClickWidgetJustSay = () => {
    setModalCode({ JustSayCode: true });
    setShowModal(false);
  };

  const onClickWidgetJustShout = () => {
    setModalCode({ JustShoutCode: true });
    setShowModal(false);
  };

  const onClickWidgetOpenWeather = () => {
    setModalCode({ OpenWeatherCode: true });
    setShowModal(false);
  };

  const onClickAddWidget = () => {
    setShowModal(true);
  };

  const onClickSetting = () => {
    setSumOfJustShout(numOfJustShout * countJustShout);
    setShowSetting(true);
    var a = 100;
    cardList.map((card) => {
      if (card.check === "OpenWeather") {
        try {
          if (card.content.main.temp < a) {
            a = card.content.main.temp;
            setCity(card.content.name);
          }
        } catch {}
      }
    });
  };

  const onClickIconCancle = () => {
    setValidate(false);
    setShowModal(false);
    setModalCode(false);
  };

  const onClickBtnAddCounter = (input) => {
    const test = parseInt(input);
    if (input > 0) {
      const idr = Math.floor(Math.random() * 1000) + 1;
      setShowModal(false);
      setModalCode(false);
      console.log(typeof test);
      // console.log(typeof (countCounter))
      setCountCounter(parseInt(test + parseInt(countCounter)));
      const newData = [
        ...cardList,
        { content: input, check: "Counter", id: idr },
      ];
      setCardList(newData);
    } else if (input < 0) {
      setValidate({ Counter: 1 });
    } else if (input == 0) {
      setValidate({ Counter: 2 });
    }
  };

  const onClickBtnAddJustSay = (input) => {
    if (input != null) {
      if (input.length > 2) {
        const idr = Math.floor(Math.random() * 1000) + 1;
        setShowModal(false);
        setModalCode(false);
        const num = countAddJustSay + input.length;
        setCountAddJustSay(num);
        const newData = [
          ...cardList,
          { content: input, check: "JustSay", id: idr },
        ];
        setCardList(newData);
        setValidate({ JustSay: false });
      }
      else{
        setValidate({ JustSay: true });
      }
    } else {
      setValidate({ JustSay: true });
    }
  };

  const onClickWidgetTimer = () => {
    const idr = Math.floor(Math.random() * 1000) + 1;
    setShowModal(false);
    setModalCode(false);
    const newData = [...cardList, { check: "Timer", id: idr }];
    setCardList(newData);
  };

  const onClickBtnAddJustShout = (input) => {
    if (input.length > 2) {
      const idr = Math.floor(Math.random() * 1000) + 1;
      setShowModal(false);
      setModalCode(false);
      setCountJustShout(input.length);
      const newData = [
        ...cardList,
        { content: input, check: "JustShout", id: idr },
      ];
      setCardList(newData);
    } else {
      setValidate({ JustShout: true });
    }
  };

  const MapJustShout = (itemJustShout) => {
    setCardList(
      cardList.map((card) => {
        if (card.check === "JustShout") {
          card.content = itemJustShout;
          setNumOfJustShout(numOfJustShout + 1);
          return card;
        } else {
          return card;
        }
      })
    );
  };

  const onClickIconEditJustShout = () => {
    // setnewInputJustSay(item);
    setModalCode({ EditJustShoutCode: true });
  };
  const onClickBtnEditJustShout = (input) => {
    setCountJustShout(input.length);
    setModalCode({ EditJustSayCode: false });
    setCardList(
      cardList.map((card) => {
        if (card.check === "JustShout") {
          card.content = input;
          return card;
        } else {
          return card;
        }
      })
    );
  };
  const onClickBtnEditJustShoutSetting = () => {
    setCountJustShout(settingJustShout.length);
    setCardList(
      cardList.map((card) => {
        if (card.check === "JustShout") {
          card.content = settingJustShout;
          return card;
        } else {
          return card;
        }
      })
    );
    setShowSetting(false);
  };

  const onClickBtnAddOpenWeather = async (input) => {
    if (input.length > 2) {
      try {
        const dateFormat = require("dateformat");
        const now = new Date();
        const idr = Math.floor(Math.random() * 1000) + 1;
        setShowModal(false);
        setModalCode(false);
        const filter = {
          api: "http://api.openweathermap.org/data/2.5/weather",
          appid: "e2251b632eb8595e223a0f0fb1e79ad2",
          units: "metric",
        };

        const url = `${filter.api}?q=${input}&appid=${filter.appid}&units=${filter.units}`;
        const result = await axios.get(url);
        const newDatas = [
          ...cardList,
          {
            content: result.data,
            check: "OpenWeather",
            id: idr,
            time: dateFormat(now, "dddd, mmmm d, yy, h:MM:ss TT"),
          },
        ];
        setCardList(newDatas);
        setValidate({ OpenWeather: false });
      } catch (err) {
        const idr = Math.floor(Math.random() * 1000) + 1;
        const dateFormat = require("dateformat");
        const now = new Date();
        const newDatas = [
          ...cardList,
          {
            content: { input: input, valid: true },
            check: "OpenWeather",
            id: idr,
            time: dateFormat(now, "dddd, mmmm d, yy, h:MM:ss TT"),
          },
        ];
        setCardList(newDatas);
        console.log(err.response);
      }
    } else {
      setValidate({ OpenWeather: true });
    }
  };

  const onClickOpenWeatherRefresh = async (item) => {
    try {
      const dateFormat = require("dateformat");
      const now = new Date();
      const filter = {
        api: "http://api.openweathermap.org/data/2.5/weather",
        appid: "e2251b632eb8595e223a0f0fb1e79ad2",
        units: "metric",
      };
      const url = `${filter.api}?q=${item.content.name}&appid=${filter.appid}&units=${filter.units}`;
      const result = await axios.get(url);
      setCardList(
        cardList.map((card) => {
          if (card.id === item.id) {
            card.content = result.data;
            card.time = dateFormat(now, "dddd, mmmm d, yy, h:MM:ss TT");
            return card;
          } else {
            return card;
          }
        })
      );
    } catch (err) {
      console.log(err.response);
    }
  };

  const onClickIconEditOpenWeather = (item) => {
    setNewInputOpenWeather(item);
    setModalCode({ EditOpenWeatherCode: true });
  };

  const onClickBtnEditOpenWeather = async (input) => {
    if (input.length > 2) {
      try {
        const dateFormat = require("dateformat");
        const now = new Date();
        const filter = {
          api: "http://api.openweathermap.org/data/2.5/weather",
          appid: "e2251b632eb8595e223a0f0fb1e79ad2",
          units: "metric",
        };
        const url = `${filter.api}?q=${input}&appid=${filter.appid}&units=${filter.units}`;
        const result = await axios.get(url);
        setCardList(
          cardList.map((card) => {
            if (card.id === newInputOpenWeather.id) {
              card.content = result.data;
              card.time = dateFormat(now, "dddd, mmmm d, yy, h:MM:ss TT");
              return card;
            } else {
              return card;
            }
          })
        );

        setModalCode({ EditOpenWeatherCode: false });
        setValidate({ OpenWeather: false });
      } catch (err) {
        const dateFormat = require("dateformat");
        const now = new Date();
        setCardList(
          cardList.map((card) => {
            if (card.id === newInputOpenWeather.id) {
              card.content = { input: input, valid: true };
              card.time = dateFormat(now, "dddd, mmmm d, yy, h:MM:ss TT");
              return card;
            } else {
              return card;
            }
          })
        );
        setModalCode({ EditOpenWeatherCode: false });
        setValidate({ OpenWeather: false });
        console.log(err.response);
      }
    } else {
      setValidate({ OpenWeather: true });
    }
  };

  return (
    <div className="pt-3">
      <div className="mb-4">
        <Modal
          showModal={showModal}
          onClickIconCancle={onClickIconCancle}
          modalCode={modalCode}
          onClickBtnAddJustSay={onClickBtnAddJustSay}
          onClickBtnAddCounter={onClickBtnAddCounter}
          validate={validate}
          onClickBtnEditJustSay={onClickBtnEditJustSay}
          onClickBtnEditJustShout={onClickBtnEditJustShout}
          onClickBtnAddJustShout={onClickBtnAddJustShout}
          onClickBtnAddOpenWeather={onClickBtnAddOpenWeather}
          onClickBtnEditOpenWeather={onClickBtnEditOpenWeather}
        >
          <div>
            <h2 className="text-xl undefined"> Add widget</h2>
            <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
              <div
                onClick={onClickWidgetJustSay}
                className="w-1/3 pt-1.5 pl-1.5"
              >
                <WidgetJustSay />
              </div>
              <div
                onClick={onClickWidgetJustShout}
                className="w-1/3 pt-1.5 pl-1.5"
              >
                <WidgetJustShout />
              </div>
              <div
                onClick={onClickWidgetCounter}
                className="w-1/3 pt-1.5 pl-1.5"
              >
                <WidgetCounter />
              </div>
              <div onClick={onClickWidgetTimer} className="w-1/3 pt-1.5 pl-1.5">
                <WidgetTimer />
              </div>
              <div
                onClick={onClickWidgetOpenWeather}
                className="w-1/3 pt-1.5 pl-1.5"
              >
                <WidgetOpenWeather />
              </div>
              <div className="w-1/3 pt-1.5 pl-1.5">c</div>
            </div>
          </div>
        </Modal>
        <ModalSetting
          showSetting={showSetting}
          onClickIconCloseSetting={onClickIconCloseSetting}
        >
          <div>
            <h2 className="text-xl mb-4">Settings</h2>
            <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
              <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                Statistics
              </h2>
              <div className="table">
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">
                    Total widgets:{" "}
                  </div>
                  <div className="table-cell">{cardList.length - 1}</div>
                </div>
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">
                    Total Just length: 
                  </div>
                  <div className="table-cell">{countAddJustSay + sumOfJustShout}</div>
                </div>
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">
                    Total count:{" "}
                  </div>
                  <div className="table-cell">{countCounter}</div>
                </div>
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">
                    Total time:{" "}
                  </div>
                  <div className="table-cell">00:00</div>
                </div>
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">
                    Coldest cities:
                  </div>
                  <div className="table-cell">{city}</div>
                </div>
              </div>
            </div>
            <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
              <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                JustShout text
              </h2>
              <fieldset
              // disabled=""
              >
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-1 mr-1">
                    <input
                      onChange={(event) =>
                        setSettingJustShout(event.target.value)
                      }
                      type="text"
                      className="w-full px-2.5 py-1 border 
                
                      rounded-md"
                      placeholder="Enter text"
                      // value=""
                      // focus:outline-none
                    />
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        onClickBtnEditJustShoutSetting(settingJustShout)
                      }
                      className="text-whitepx-4 py-1 rounded-md bg-gray-300"
                      //  cursor-default
                      // focus:outline-none
                      // disabled=""
                    >
                      {" "}
                      Edit
                    </button>
                  </div>
                </form>
              </fieldset>
            </div>
            <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
              <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                Reset Zone
              </h2>
              <div className="flex items-center">
                <select className="flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm">
                  <option value="Counter">All counters</option>
                  <option value="Timer">All timers</option>
                </select>
                <button
                  onClick={onClickBtnSetZero}
                  className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600"
                >
                  {" "}
                  Set zero
                </button>
              </div>
            </div>
            <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
              <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                Delete Zone
              </h2>
              <button
                onClick={onClickDeleteAll}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 w-full mb-1"
              >
                {" "}
                Delete all widgets
              </button>
            </div>
          </div>
        </ModalSetting>
        <button
          onClick={onClickAddWidget}
          className="text-white focus:outline-none mr-1 px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
        >
          <RiAddCircleLine className="inline-block text-xl relative -top-0.5" />
          Add Widget
        </button>
        <button
          onClick={onClickSetting}
          className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-500 hover:bg-gray-600"
        >
          <RiSettings3Line className="inline-block text-xl relative -top-0.5" />
          Setting
        </button>
      </div>
      <div className="md:flex md:flex-wrap md:-mr-4 ">
        {cardList.length == 1 ? (
          <div className="md:inner md:w-1/2 pb-4 md:pr-4">
            <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
              {" "}
              <h2 className="text-lg font-bold text-gray-400 mb-1.5"></h2>
              <div className="text-center text-gray-400 my-8 font-light">
                <p className="text-4xl mb-2">No widgets at all</p>
                <p>
                  {"Click"}
                  <button className="font-normal text-blue-400 focus:outline-none">
                    HERE
                  </button>
                  to add a new one
                </p>
              </div>
            </div>
          </div>
        ) : null}
        {cardList.length > 1 ? (
          <Allcard
            cardList={cardList}
            onClickCloseCard={onClickCloseCard}
            onClickIconEditJustSay={onClickIconEditJustSay}
            onClickIconEditJustShout={onClickIconEditJustShout}
            BtnIncreaseCounter={BtnIncreaseCounter}
            BtnDecreaseCounter={BtnDecreaseCounter}
            BtnSetZero={BtnSetZero}
            MapJustShout={MapJustShout}
            onClickOpenWeatherRefresh={onClickOpenWeatherRefresh}
            onClickIconEditOpenWeather={onClickIconEditOpenWeather}
          />
        ) : null}

        {/* {showListCard} */}

        {/* {widgetShowCards.JustSayCard ? (
       
        ) : null} */}
      </div>
    </div>
  );
};

export default App;
