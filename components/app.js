import Counter from "./counter";
import JustShout from "./justshout";
import Timer from "./timer";

const App = () => {
  return (
      <div class="pt-3">
        <div class="md:flex md:flex-wrap md:-mr-4 ">
          <Counter />

          <JustShout />

          <Timer />
        </div>
      </div>
  );
};

export default App;
