import { IoClose } from "react-icons/io5";

const ModalSetting = ({ showSetting }) => {
  console.log(showSetting);
  return (
    <>
      {showSetting ? (
        <div class="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
          <div class="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
            <button
              absolute
              text-lg
              text-gray-600
              top-4
              right-4
              // focus:outline-none
            >
              {" "}
              <IoClose />
            </button>
            <div>
              <h2 class="text-xl mb-4">Settings</h2>
              <div class="p-5 border-1 bg-white rounded-2xl relative mb-4">
                <h2 class="text-lg font-bold text-gray-400 mb-1.5">
                  Statistics
                </h2>
                <div class="table">
                  <div class="table-row">
                    <div class="table-cell pr-4 font-semibold">
                      Total widgets:{" "}
                    </div>
                    <div class="table-cell">1</div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell pr-4 font-semibold">
                      Total Just length:{" "}
                    </div>
                    <div class="table-cell">6</div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell pr-4 font-semibold">
                      Total count:{" "}
                    </div>
                    <div class="table-cell">0</div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell pr-4 font-semibold">
                      Total time:{" "}
                    </div>
                    <div class="table-cell">00:00</div>
                  </div>
                  <div class="table-row">
                    <div class="table-cell pr-4 font-semibold">
                      Coldest cities:{" "}
                    </div>
                    <div class="table-cell">N/A</div>
                  </div>
                </div>
              </div>
              <div class="p-5 border-1 bg-white rounded-2xl relative mb-4">
                <h2 class="text-lg font-bold text-gray-400 mb-1.5">
                  JustShout text
                </h2>
                <fieldset disabled="">
                  <form class="flex">
                    <div class="flex-1 mr-1">
                      <input
                        type="text"
                        class="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                        placeholder="Enter text"
                        value=""
                      />
                    </div>
                    <div>
                      <button
                        class="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default"
                        disabled=""
                      >
                        {" "}
                        Edit
                      </button>
                    </div>
                  </form>
                </fieldset>
              </div>
              <div class="p-5 border-1 bg-white rounded-2xl relative mb-4">
                <h2 class="text-lg font-bold text-gray-400 mb-1.5">
                  Reset Zone
                </h2>
                <div class="flex items-center">
                  <select class="flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm">
                    <option value="Counter">All counters</option>
                    <option value="Timer">All timers</option>
                  </select>
                  <button class="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600">
                    {" "}
                    Set zero
                  </button>
                </div>
              </div>
              <div class="p-5 border-1 bg-white rounded-2xl relative mb-4">
                <h2 class="text-lg font-bold text-gray-400 mb-1.5">
                  Delete Zone
                </h2>
                <button class="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 w-full mb-1">
                  {" "}
                  Delete all widgets
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalSetting;
