import { getDefaultLayout } from "@/components/layout/default-layout";
import { increment, reset } from "@/redux/slices";
import { TRootState } from "@/redux/store";
import { Switch } from "antd";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const Question3 = () => {
  const dispatch = useDispatch();
  const seconds = useSelector((state: TRootState) => state.counter.count, shallowEqual);
  const [refreshActive, setRefreshActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(increment());
    }, 1000); // 1초마다 시간 증가

    return () => clearInterval(interval);
  }, []);

  const onChange = (checked: boolean) => {
    setRefreshActive(checked);
  };

  const refresh = () => {
    if (refreshActive) {
      dispatch(reset());
    }
  };

  return (
    <div>
      <div className="text-base text-customGray-800">Q. 이 코드에서 고쳐야 할 부분은?</div>
      <div className="text-sm mb-4 text-customGray-800">
        * 1초마다 시간이 증가하고 있고, 10초마다 초기화 시켜줄 예정 <br />* 스위치가 꺼지면 10초마다
        초기화를 안함
      </div>
      <Switch onChange={onChange} value={refreshActive} />
      <div className="text-lg">
        <ResetTimer onRefresh={refresh} />
        <div>시간: {seconds}초</div>
      </div>
    </div>
  );
};

interface IResetTimerProps {
  onRefresh: () => void;
}
const ResetTimer: React.FC<IResetTimerProps> = ({ onRefresh }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      onRefresh();
    }, 10000); // 10초마다 초기화

    return () => clearInterval(interval);
  }, []);

  return <div className="text-blue">Refresh Timer</div>;
};

Question3.getLayout = getDefaultLayout;
export default Question3;
