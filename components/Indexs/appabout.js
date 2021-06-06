const Appabout = () => {
  
  return (
    <>
      <h2 className="text-xl undefined"> About </h2>
      <div className="pt-3">
        <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">
            I love {"<programming />"}{" "}
          </h2>
          <p className="mb-2">
            {"We have "}
            <strong>JustSay</strong>
            {", "}
            <strong>Counter</strong>
            {", "}
            <strong>Timer</strong>
            {", "}
            <strong>Weather</strong>
            {" and super hard "}
            <strong>TicTacToe</strong>
            {
              "widgets! You can now add / modify / delete widgets or even destroy all of them, also view super great useless statistics! Now bundled with state persistence, that remember your widgets eternally, except you wipe up your browser data :P"
            }
          </p>
          <p>
            {"Crafted with "}
            <span className="text-red-600"> ♥ </span>
            {"by Nammon"}
          </p>
        </div>
      </div>
    </>
  );
};
export default Appabout;
