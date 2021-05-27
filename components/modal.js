import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Modal = ({
  showModal,
  children,
  modalCode,
  onClickBtnAddJustSay,
  onClickBtnAddCounter,
  validate,
  onClickIconCancle = () => {},
}) => {
  const [input, setInput] = useState();
  
  return (
    <>
      {showModal ? (
        <div class="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div class="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              onClick={onClickIconCancle}
              class="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
            >
              <IoClose />
            </button>
            {children}
          </div>
        </div>
      ) : null}

      {modalCode.JustSayCode ? (
        <div class="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div class="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              class="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              onClick={onClickIconCancle}
            >
              <IoClose />
            </button>
            <div>
              <fieldset>
                <h2 class="text-xl mb-2"> Add Just Say</h2>
                <form class="flex" onSubmit={(e) => e.preventDefault()}>
                  <div class="flex-1 mr-1">
                    <input
                      onChange={(event) => setInput(event.target.value)}
                      type="text"
                      class="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                      placeholder="Enter text"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => onClickBtnAddJustSay(input)}
                      class="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      Add
                    </button>
                  </div>
                </form>
                {validate.JustSay ? (
                  <div class="text-red-600 text-xs mt-1">
                    Please enter at least 3 characters.
                  </div>
                ) : null}
              </fieldset>
            </div>
          </div>
        </div>
      ) : null}

      {modalCode.CounterCode ? (
        <div class="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div class="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              class="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              onClick={onClickIconCancle}
            >
              <IoClose />
            </button>
            <div>
              <fieldset onSubmit={(e) => e.preventDefault()}>
                <h2 class="text-xl mb-2"> Add Counter</h2>
                <form class="flex">
                  <div class="flex-1 mr-1">
                    <input
                      onChange={(e) => setInput(e.target.value)}
                      type="number"
                      class="w-full px-2.5 py-1 focus:outline-none rounded-md"
                      placeholder="Enter the initial value"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => onClickBtnAddCounter(input)}
                      class="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      {" "}
                      Add
                    </button>
                  </div>
                </form>
                {validate.Counter == 2 ? (
                  <div class="text-red-600 text-xs mt-1">
                    Please provide some value.
                  </div>
                ) : null}
                {validate.Counter == 1 ? (
                  <div class="text-red-600 text-xs mt-1">
                    Please enter at least 0.
                  </div>
                ) : null}
              </fieldset>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
