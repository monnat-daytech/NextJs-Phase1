import {TiWeatherPartlySunny} from "react-icons/ti"

const WidgerOpenWeather = () => {
  return (
    <div class="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer">
      <TiWeatherPartlySunny className="mx-auto text-4xl"/>
      <h3 class="mt-1 font-semibold text-sm ">Weather</h3>
    </div>
  );
};

export default WidgerOpenWeather;
