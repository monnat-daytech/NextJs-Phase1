import Card from "./card";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { MdEdit } from "react-icons/md";

const JustShout = ({
  item,
  onClickCloseCard = () => {},
  MapJustShout,
  onClickIconEditJustShout = () => {},
}) => {
    
    useEffect(() => {
        MapJustShout(item)
    }, [])

  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-400 mb-1.5"> Just Shout</h2>
      <div className="absolute top-5 right-5">
        <button
          onClick={onClickIconEditJustShout}
          className="text-lg text-gray-600 focus:outline-none mr-2"
        >
             <MdEdit/>
        </button>
        <button
          onClick={onClickCloseCard}
          className="text-lg text-gray-600 focus:outline-none undefined"
        >
            <IoClose/>
        </button>
      </div>
      <div className="text-center mt-8 mb-12">
        <h1 className="text-4xl font-bold undefined"> {item}</h1>
      </div>
    </Card>
  );
};

export default JustShout;
