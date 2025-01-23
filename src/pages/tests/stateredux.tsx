import { getDefaultLayout } from "@/components/layout/default-layout";
import { MessageContext } from "@/lib/contexts/message-provider";
import { increment } from "@/redux/slices";
import store, { TRootState } from "@/redux/store";
import { Button } from "antd";
import { useContext, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const StateReduxTest = () => {
  const [stateCount, setStateCount] = useState(0);
  const dispatch = useDispatch();
  const reduxCount = useSelector((state: TRootState) => state.counter.count, shallowEqual);
  const { messageApi } = useContext(MessageContext);

  const handleReactStateUpdate = () => {
    setStateCount(stateCount + 1);
    messageApi.info(`React State: ${stateCount}`);
  };

  const handleReduxStateUpdate1 = () => {
    dispatch(increment());
    messageApi.info(`[Redux State1]: ${reduxCount}`);
  };

  const handleReduxStateUpdate2 = () => {
    dispatch(increment());
    messageApi.info(`[Redux State2]: ${store.getState().counter.count}`);
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q1. React State 버튼을 클릭했을 때, 출력되는 값은?
        <br />
        Q2. Redux State1,2 버튼을 클릭했을 때, 출력되는 값은?
      </div>

      <div className="text-lg font-semibold mb-4">
        <p>React State: {stateCount}</p>
        <p>Redux State: {reduxCount}</p>
      </div>

      <Button onClick={handleReactStateUpdate} type="primary" className="mr-2">
        Increment React State
      </Button>
      <Button onClick={handleReduxStateUpdate1} type="primary" className="mr-2">
        Increment Redux State1
      </Button>
      <Button onClick={handleReduxStateUpdate2} type="primary">
        Increment Redux State2
      </Button>
    </div>
  );
};

StateReduxTest.getLayout = getDefaultLayout;
export default StateReduxTest;
