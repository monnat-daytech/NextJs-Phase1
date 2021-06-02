import WidgetCounter from "./WidgetCards/widgetCounter";
import WidgetJustSay from "./WidgetCards/widgetJustSay";
import WidgetTimer from "./WidgetCards/widgetTimer";
import { useState } from "react";
import Modal from "./modal";
import Allcard from "./Cards/allcard";
import ModalSetting from "./modalSetting";
import { RiAddCircleLine,RiSettings3Line } from "react-icons/ri";


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [countCounter , setCountCounter] = useState(0)
  const [newInput, setNewInput] = useState();
  const [countAddJustSay , setCountAddJustSay] = useState(0)
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
  });
  const [modalCode, setModalCode] = useState({
    JustSayCode: false,
    EditJustSayCode: false,
    CounterCode: false,
  });
  
  const BtnIncreaseCounter = (number) => {
    setCountCounter(countCounter + 1)
    console.log(number)
  }

  const BtnDecreaseCounter = (number) => {
    setCountCounter(countCounter - 1)
    console.log(number)
  }

  const BtnSetZero = (number) => {
    console.log(number)
    setCountCounter(countCounter - number)
  }
  
  const onClickIconCloseSetting = () => {
    setShowSetting(false);
  };

  const onClickDeleteAll = () => {
    setShowSetting(false);
    setCardList([0]);
    setCountCounter(0);
    setCountAddJustSay(0)
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
    setModalCode({ EditJustSayCode: false });
    setCardList(
      cardList.map((card) => {
        if (card.id === newInput.id) {
          //3 + 4 - 4 + 4
          //ตัวที่รับเข้ามา + ตัวเก่า - ตัวเก่า + (ตัวทั้งหมด - ตัวเก่า)
          // 3 + 4 - 4 + (8-4) 
          // 4 + 3 - 4
          // 3 + (8-4)
          const num = input.length  + (countAddJustSay - card.content.length)
          setCountAddJustSay(num)
          newInput.content = input;
          return newInput;
        } else {
          return card;
        }
      })
    );
  };
  const onClickIconEditJustSay = (item) => {
    setNewInput(item);
    setModalCode({ EditJustSayCode: true });
  };

  const onClickCloseCard = (item) => {
    setCardList(cardList.filter((_item) => _item.id !== item.id));
    cardList.map((card) => {
      if(card.id === item.id){
        setCountAddJustSay(countAddJustSay  - item.content.length)
      }
    })
  };

  const onClickWidgetCounter = () => {
    setModalCode({ CounterCode: true });
    setShowModal(false);
  };

  const onClickWidgetJustSay = () => {
    setModalCode({ JustSayCode: true });
    setShowModal(false);
  };

  const onClickAddWidget = () => {
    setShowModal(true);
  };

  const onClickSetting = () => {
    setShowSetting(true);
  };

  const onClickIconCancle = () => {
    setShowModal(false);
    setModalCode(false);
  };

  const onClickBtnAddCounter = (input) => {
    const test = parseInt(input)
    if (input > 0) {
      const idr = Math.floor(Math.random() * 1000) + 1;
      setShowModal(false);
      setModalCode(false);
      console.log(typeof (test))
      // console.log(typeof (countCounter))
      setCountCounter(parseInt(test + parseInt( countCounter)))
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
    if (input.length > 2) {
      const idr = Math.floor(Math.random() * 1000) + 1;
      setShowModal(false);
      setModalCode(false);
      const num = countAddJustSay + input.length
      setCountAddJustSay(num)
      const newData = [
        ...cardList,
        { content: input, check: "JustSay", id: idr },
      ];
      setCardList(newData);
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
        >
          <div>
            <h2 className="text-xl undefined"> Add widget</h2>
            <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
              <div onClick={onClickWidgetJustSay} className="w-1/3 pt-1.5 pl-1.5">
                <WidgetJustSay />
              </div>
              <div onClick={onClickWidgetCounter} className="w-1/3 pt-1.5 pl-1.5">
                <WidgetCounter />
              </div>
              <div onClick={onClickWidgetTimer} className="w-1/3 pt-1.5 pl-1.5">
                <WidgetTimer />
              </div>
              <div className="w-1/3 pt-1.5 pl-1.5">a</div>
              <div className="w-1/3 pt-1.5 pl-1.5">b</div>
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
              <h2 className="text-lg font-bold text-gray-400 mb-1.5">Statistics</h2>
              <div className="table">
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">
                    Total widgets:{" "}
                  </div>
                  <div className="table-cell">{cardList.length - 1}</div>
                </div>
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">
                    Total Just length:   {countAddJustSay}
                  </div>
                  <div className="table-cell">{}</div>
                </div>
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">Total count: </div>
                  <div className="table-cell">{countCounter}</div>
                </div>
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">Total time: </div>
                  <div className="table-cell">00:00</div>
                </div>
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">
                    Coldest cities:{" "}
                  </div>
                  <div className="table-cell">N/A</div>
                </div>
              </div>
            </div>
            <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
              <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                JustShout text
              </h2>
              <fieldset disabled="">
                <form className="flex">
                  <div className="flex-1 mr-1">
                    <input
                      type="text"
                      className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                      placeholder="Enter text"
                      value=""
                    />
                  </div>
                  <div>
                    <button
                      className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default"
                      disabled=""
                    >
                      {" "}
                      Edit
                    </button>
                  </div>
                </form>
              </fieldset>
            </div>
            <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
              <h2 className="text-lg font-bold text-gray-400 mb-1.5">Reset Zone</h2>
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
          {/* <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="inline-block text-xl relative -top-0.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
            </g>
          </svg> */}

          <RiAddCircleLine className="inline-block text-xl relative -top-0.5"/>
          Add Widget
        </button>
        <button
          onClick={onClickSetting}
          className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-500 hover:bg-gray-600"
        >
          {/* <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="inline-block text-xl relative -top-0.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            </g>
          </svg> */}
          <RiSettings3Line className="inline-block text-xl relative -top-0.5"/>
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
            BtnIncreaseCounter={BtnIncreaseCounter}
            BtnDecreaseCounter={BtnDecreaseCounter}
            BtnSetZero={BtnSetZero}
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
