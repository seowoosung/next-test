import { getDefaultLayout } from "@/components/layout/default-layout";
import { useEffect, useState } from "react";

const Question2 = () => {
  const [count, setCount] = useState(0);
  const [end, setEnd] = useState(false);

  const addCount = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    } else {
      setEnd(true);
    }
  };

  return (
    <div>
      <div className="text-base text-customGray-800">Q. 이 코드에서 고쳐야 할 부분은?</div>
      <div className="text-sm mb-4 text-customGray-800">
        * 시간을 재는 Timer가 있고, 10초가 지나면 종료를 시켜줄 예정
      </div>
      {!end ? (
        <div className="text-lg">
          <Timer onAdd={addCount} />
          <div>시간: {count}초</div>
        </div>
      ) : (
        <div className="text-red text-lg">종료</div>
      )}
    </div>
  );
};

interface ITimerProps {
  onAdd: () => void;
}
const Timer: React.FC<ITimerProps> = ({ onAdd }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      onAdd();
    }, 1000); // 1초

    return () => clearInterval(interval);
  }, []);

  return <div className="text-blue">Timer</div>;
};

Question2.getLayout = getDefaultLayout;
export default Question2;
