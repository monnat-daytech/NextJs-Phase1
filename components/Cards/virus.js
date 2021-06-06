import Card from "./card";
import { IoClose } from "react-icons/io5";

const Virus = ({ item }) => {
  console.log(item);
  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-400 mb-1.5">Covid 19</h2>
      <div className="absolute top-5 right-5">
        <button
          // onClick={onClickCloseCard}
          className="text-lg text-gray-600 focus:outline-none undefined"
        >
          <IoClose />
        </button>
      </div>
      <div className="text-center mt-8 mb-12">
        <h1 className="text-4xl font-bold undefined">{item[0].country} </h1>
        <div class="text-s text-blue-400">
          <span class="-mb-2 text-center">Confirmed : {item[0].confirmed} </span>
        </div>
        <div class="text-s text-gray-400">
          <span class="-mb-2 text-center">Critical : {item[0].critical}</span>
        </div>
        <div class="text-s text-red-400">
          <span class="-mb-2 text-center">Deaths : {item[0].deaths}</span>
        </div>
        <div class="text-s text-green-400">
          <span class="-mb-2 text-center">Recovered : {item[0].recovered}</span>
        </div>
      </div>
      <div class="mt-6 text-center">
        <div class="text-xs text-gray-400">
          <span class="-mb-2 text-center">
            LastChange : {item[0].lastChange}
          </span>
        </div>
        <div class="text-xs text-gray-400">
          <span class="-mb-2 text-center">
            LastUpdate : {item[0].lastUpdate}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Virus;
