import {RiIncreaseDecreaseLine} from "react-icons/ri"

const WidgetCounter = () => {
  return (
    <div className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
      <RiIncreaseDecreaseLine className="mx-auto text-4xl"/>
      <h3 className="mt-1 font-semibold text-sm ">Counter</h3>
    </div>
  );
};

export default WidgetCounter;
