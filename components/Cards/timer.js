import { useState } from "react";
import Card from "./card";

const Timer = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  var upDateMs = time.ms;
  var upDateS = time.s;
  var upDateM = time.m;
  var upDateH = time.h;

  const run = () => {
    if (upDateM === 60) {
      upDateH++;
      upDateM = 0;
    }
    if (upDateS === 60) {
      upDateM++;
      upDateS = 0;
    }
    if (upDateMs === 100) {
      upDateS++;
      upDateMs = 0;
    }
    upDateMs++;
    setTime({ ms: upDateMs, s: upDateS, m: upDateM, h: upDateH });
  };

  const onClickBtnStartTimer = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  const onClickBtnPauseTimer = () => {
    clearInterval(interv);
    setStatus(0);
  };
  const onClickBtnResetTimer = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  return (
    <Card>
        <h2 class="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
        <div class="absolute top-5 right-5">
          <button class="text-lg text-gray-600 focus:outline-none undefined"></button>
        </div>
        <div class="text-center">
          <div class="flex items-center justify-center mt-4 mb-6">
            <div class="text-6xl mx-7">
              <span>{time.m >= 10 ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
              <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
            </div>
          </div>
          {status === 0 ? (
            <div>
              <button
                onClick={onClickBtnStartTimer}
                class="text-white focus:outline-none mx-1 px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Start
              </button>
              {
                time.ms === 0 ? (
                  <button
                  onClick={onClickBtnResetTimer}
                  class="text-white focus:outline-none mx-1 px-4 py-1 rounded-md bg-gray-300 cursor-default"
                >
                  Reset
                </button>
                ) : (
                  <button
                  onClick={onClickBtnResetTimer}
                  class="text-white focus:outline-none mx-1 px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                >
                  Reset
                </button>
                )
              }
          
            </div>
          ) : (
            ""
          )}

          {status === 1 ? (
            <div>
              <button
                onClick={onClickBtnPauseTimer}
                class="text-white focus:outline-none mx-1 px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Pause
              </button>
              <button
                onClick={onClickBtnResetTimer}
                class="text-white focus:outline-none mx-1 px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Reset
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
    </Card>
  );
};

export default Timer;
