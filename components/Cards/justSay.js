import Card from "./card";
import { IoClose } from "react-icons/io5";

const JustSay = ({item,onClickCloseCard = () => {}, onClickIconEditJustSay = () => {}}) => {
  return (
    <Card>
      <h2 class="text-lg font-bold text-gray-400 mb-1.5"> Just Say</h2>
      <div class="absolute top-5 right-5">
      <button onClick={onClickIconEditJustSay} class="text-lg text-gray-600 focus:outline-none mr-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></button>
        <button onClick={onClickCloseCard} class="text-lg text-gray-600 focus:outline-none undefined"><IoClose/></button>
      </div>
      <div class="text-center mt-8 mb-12">
        <h1 class="text-4xl font-bold undefined"> {item}</h1>
      </div>
    </Card>
  );
};

export default JustSay;
