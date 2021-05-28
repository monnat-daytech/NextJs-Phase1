import WidgetCounter from "./WidgetCards/widgetCounter";
import WidgetJustSay from "./WidgetCards/widgetJustSay";
import WidgetTimer from "./WidgetCards/widgetTimer";
import { useState } from "react";
import Modal from "./modal";
import Allcard from "./Cards/allcard";
import ModalSetting from './modalSetting'

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [newInput, setNewInput] = useState();
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
    EditJustSayCode : false,
    CounterCode: false,
  });

  const onClickBtnEditJustSay =(input) =>{
    setModalCode({EditJustSayCode : false})
    setCardList(
      cardList.map((card) => {
              if (card.id === newInput.id) {
                  newInput.content = input
                  return newInput
              } else {
                  return card; 
              }
          }),
      );

  }
  const onClickIconEditJustSay = (item) => {
    alert("asdsd")
    console.log(item.id)
    setNewInput(item)
    setModalCode({EditJustSayCode : true})
  }

  const onClickCloseCard = (item) => {
      setCardList(cardList.filter((_item) => _item.id !== item.id))
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
    setShowSetting(true)
  }

  const onClickIconCancle = () => {
    setShowModal(false);
    setModalCode(false);
  };

  const onClickBtnAddCounter = (input) => {
    if (input > 0) {
      const idr = Math.floor(Math.random() * 1000) + 1;
      setShowModal(false);
      setModalCode(false);
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
    <div class="pt-3">
      <div class="mb-4">
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
            <h2 class="text-xl undefined"> Add widget</h2>
            <div class="flex flex-wrap text-center mt-1.5 -ml-1.5">
              <div onClick={onClickWidgetJustSay} class="w-1/3 pt-1.5 pl-1.5">
                <WidgetJustSay />
              </div>
              <div onClick={onClickWidgetCounter} class="w-1/3 pt-1.5 pl-1.5">
                <WidgetCounter />
              </div>
              <div onClick={onClickWidgetTimer} class="w-1/3 pt-1.5 pl-1.5">
                <WidgetTimer />
              </div>
              <div class="w-1/3 pt-1.5 pl-1.5">a</div>
              <div class="w-1/3 pt-1.5 pl-1.5">b</div>
              <div class="w-1/3 pt-1.5 pl-1.5">c</div>
            </div>
          </div>
        </Modal>
        <ModalSetting showSetting={showSetting}>
    
        </ModalSetting>
        <button
          onClick={onClickAddWidget}
          class="text-white focus:outline-none mr-1 px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="inline-block text-xl relative -top-0.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
            </g>
          </svg>
          Add Widget
        </button> 
        <button onClick={onClickSetting} class="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-500 hover:bg-gray-600">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="inline-block text-xl relative -top-0.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            </g>
          </svg>
          Setting
        </button>
      </div>
      <div class="md:flex md:flex-wrap md:-mr-4 ">
        {cardList.length == 1 ? (
          <div class="md:inner md:w-1/2 pb-4 md:pr-4">
            <div class="p-5 border-1 bg-white rounded-2xl relative undefined">
              {" "}
              <h2 class="text-lg font-bold text-gray-400 mb-1.5"></h2>
              <div class="text-center text-gray-400 my-8 font-light">
                <p class="text-4xl mb-2">No widgets at all</p>
                <p>
                  {"Click"}
                  <button class="font-normal text-blue-400 focus:outline-none">
                    HERE
                  </button>
                  to add a new one
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {cardList.length > 1 ? (
          <Allcard cardList={cardList} onClickCloseCard={onClickCloseCard} onClickIconEditJustSay={onClickIconEditJustSay} />
        ) : null}

        {/* {showListCard} */}

        {/* {widgetShowCards.JustSayCard ? (
       
        ) : null} */}
      </div>
    </div>
  );
};

export default App;
