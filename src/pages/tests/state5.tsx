import { getDefaultLayout } from "@/components/layout/default-layout";
import { MessageContext } from "@/lib/contexts/message-provider";
import { Button } from "antd";
import { memo, useContext, useState } from "react";

const State5Test = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q1. Increment 버튼을 1번 클릭하면 message Render는 출력될까? <br />
      </div>
      <div className="text-lg font-semibold mb-2">Count: {count}</div>
      <Button onClick={() => setCount(count + 1)} type="primary">
        Increment
      </Button>
      <MemoizedChildComponent name={`child: ${count}`} />
    </div>
  );
};

State5Test.getLayout = getDefaultLayout;
export default State5Test;

interface IChildComponentProps {
  name: string;
}
const ChildComponent: React.FC<IChildComponentProps> = ({ name }) => {
  const { messageApi } = useContext(MessageContext);
  messageApi.info("Child Render: " + name);
  return <div>Child Component</div>;
};

const MemoizedChildComponent = memo(ChildComponent);
