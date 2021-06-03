import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Modal = ({
  showModal,
  children,
  modalCode,
  onClickBtnAddJustSay,
  onClickBtnAddCounter,
  validate,
  onClickBtnEditJustSay,
  onClickBtnAddJustShout,
  onClickBtnEditJustShout,
  onClickIconCancle = () => {},
}) => {
  const [input, setInput] = useState();

  return (
    <>
      {showModal ? (
        <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              onClick={onClickIconCancle}
              className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
            >
              <IoClose />
            </button>
            {children}
          </div>
        </div>
      ) : null}

      {modalCode.JustSayCode ? (
        <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              onClick={onClickIconCancle}
            >
              <IoClose />
            </button>
            <div>
              <fieldset>
                <h2 className="text-xl mb-2"> Add Just Say</h2>
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-1 mr-1">
                    <input
                      onChange={(event) => setInput(event.target.value)}
                      type="text"
                      className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                      placeholder="Enter text"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => onClickBtnAddJustSay(input)}
                      className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      Add
                    </button>
                  </div>
                </form>
                {validate.JustSay ? (
                  <div className="text-red-600 text-xs mt-1">
                    Please enter at least 3 characters.
                  </div>
                ) : null}
              </fieldset>
            </div>
          </div>
        </div>
      ) : null}

      {modalCode.EditJustSayCode ? (
        <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              onClick={onClickIconCancle}
            >
              <IoClose />
            </button>
            <div>
              <fieldset>
                <h2 className="text-xl mb-2"> Edit Just Say</h2>
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-1 mr-1">
                    <input
                      value={modalCode.asd}
                      onChange={(event) => setInput(event.target.value)}
                      type="text"
                      className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                      placeholder="Enter text"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => onClickBtnEditJustSay(input)}
                      className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  </div>
                </form>
                {validate.JustSay ? (
                  <div className="text-red-600 text-xs mt-1">
                    Please enter at least 3 characters.
                  </div>
                ) : null}
              </fieldset>
            </div>
          </div>
        </div>
      ) : null}

      {modalCode.CounterCode ? (
        <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              onClick={onClickIconCancle}
            >
              <IoClose />
            </button>
            <div>
              <fieldset onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-xl mb-2"> Add Counter</h2>
                <form className="flex">
                  <div className="flex-1 mr-1">
                    <input
                      onChange={(e) => setInput(e.target.value)}
                      type="number"
                      className="w-full px-2.5 py-1 focus:outline-none rounded-md"
                      placeholder="Enter the initial value"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => onClickBtnAddCounter(input)}
                      className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      {" "}
                      Add
                    </button>
                  </div>
                </form>
                {validate.Counter == 2 ? (
                  <div className="text-red-600 text-xs mt-1">
                    Please provide some value.
                  </div>
                ) : null}
                {validate.Counter == 1 ? (
                  <div className="text-red-600 text-xs mt-1">
                    Please enter at least 0.
                  </div>
                ) : null}
              </fieldset>
            </div>
          </div>
        </div>
      ) : null}

      {modalCode.JustShoutCode ? (
        <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              onClick={onClickIconCancle}
            >
              <IoClose />
            </button>
            <div>
              <fieldset>
                <h2 className="text-xl mb-2"> Add Just Shout</h2>
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-1 mr-1">
                    <input
                      onChange={(event) => setInput(event.target.value)}
                      type="text"
                      className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                      placeholder="Enter text"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => onClickBtnAddJustShout(input)}
                      className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      Add
                    </button>
                  </div>
                </form>
                {/* {validate.JustSay ? (
                  <div className="text-red-600 text-xs mt-1">
                    Please enter at least 3 characters.
                  </div>
                ) : null} */}
              </fieldset>
            </div>
          </div>
        </div>
      ) : null}

      {modalCode.EditJustShoutCode ? (
        <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              onClick={onClickIconCancle}
            >
              <IoClose />
            </button>
            <div>
              <fieldset>
                <h2 className="text-xl mb-2"> Edit Just Shout</h2>
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex-1 mr-1">
                    <input
                      onChange={(event) => setInput(event.target.value)}
                      type="text"
                      className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                      placeholder="Enter text"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => onClickBtnEditJustShout(input)}
                      className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  </div>
                </form>
                {validate.JustSay ? (
                  <div className="text-red-600 text-xs mt-1">
                    Please enter at least 3 characters.
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
