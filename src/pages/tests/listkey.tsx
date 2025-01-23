import { getDefaultLayout } from "@/components/layout/default-layout";
import { MessageContext } from "@/lib/contexts/message-provider";
import { Button, Switch } from "antd";
import { useContext, useState } from "react";

const ListKeyTest = () => {
  const [useKey, setUseKey] = useState(false);
  const [count, setCount] = useState(0);

  const toggleUseKey = (checked: boolean) => {
    setUseKey(checked);
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q. 버튼 클릭 시(리렌더링 시) ChildButton은 Render message가 호출될까?
      </div>
      <div className="text-lg">
        <div className="mb-10">
          <div className="mb-1">Use Key: {String(useKey)}</div>
          <Switch onChange={toggleUseKey} />
        </div>
        <div>
          {Array.from({ length: 2 }).map((_, index) => (
            <ChildButton key={useKey ? index : undefined} name={`Key: ${index}`} />
          ))}
        </div>
        <div className="mt-10">
          <Button type="primary" onClick={() => setCount(count + 1)}>
            Increment
          </Button>
          <div>Count: {count}</div>
        </div>
      </div>
    </div>
  );
};

interface IChildButtonProps {
  name: string;
}

const ChildButton: React.FC<IChildButtonProps> = ({ name }) => {
  const { messageApi } = useContext(MessageContext);
  messageApi.info(`Render Child: ${name}`);
  return <div className="my-1 border-black border p-1 rounded w-fit">Child: {name}</div>;
};

ListKeyTest.getLayout = getDefaultLayout;
export default ListKeyTest;
