import { getDefaultLayout } from "@/components/layout/default-layout";
import { increment } from "@/redux/slices";
import store, { TRootState } from "@/redux/store";
import { Button } from "antd";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const StateReduxTest = () => {
  const [stateCount, setStateCount] = useState(0);
  const dispatch = useDispatch();
  const reduxCount = useSelector((state: TRootState) => state.counter.count, shallowEqual);

  const handleReactStateUpdate = () => {
    setStateCount(stateCount + 1);
    alert(`React State: ${stateCount}`);
  };

  const handleReduxStateUpdate = () => {
    dispatch(increment());
    alert(`[Redux State1]: ${reduxCount},   [Redux State2]: ${store.getState().counter.count}`);
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q1. React State 버튼을 클릭했을 때, 출력되는 값은?
        <br />
        Q2. Redux State 버튼을 클릭했을 때, 출력되는 값은?
      </div>

      <div className="text-lg font-semibold mb-4">
        <p>React State: {stateCount}</p>
        <p>Redux State: {reduxCount}</p>
      </div>

      <Button onClick={handleReactStateUpdate} type="primary" className="mr-2">
        Increment React State
      </Button>
      <Button onClick={handleReduxStateUpdate} type="primary">
        Increment Redux State
      </Button>
    </div>
  );
};

StateReduxTest.getLayout = getDefaultLayout;
export default StateReduxTest;
