import { getDefaultLayout } from "@/components/layout/default-layout";
import { MessageContext } from "@/lib/contexts/message-provider";
import { Button, Switch } from "antd";
import { memo, useContext, useState } from "react";

const MemoTest = () => {
  const [count, setCount] = useState(0);
  const [isMemoized, setIsMemoized] = useState(false);

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  const onChange = (checked: boolean) => {
    setIsMemoized(checked);
  };

  return (
    <div>
      <div className="text-base mb-10 text-customGray-800">
        Q. 버튼 클릭시 Render message는 호출될까?
      </div>
      <div className="text-lg">
        <div className="mb-10">
          <div>Count: {count}</div>
          <div className="mb-1">Memoized On: {String(isMemoized)}</div>
          <Switch onChange={onChange} />
        </div>
        <div>
          {isMemoized ? (
            <MemoizedChildButton onClick={onClick} name="MemoizedChildButton Click" />
          ) : (
            <ChildButton onClick={onClick} name="ChildButton Click" />
          )}
        </div>
      </div>
    </div>
  );
};

interface IChildButtonProps {
  onClick: () => void;
  name: string;
}

const ChildButton: React.FC<IChildButtonProps> = ({ onClick, name }) => {
  const { messageApi } = useContext(MessageContext);
  messageApi.info("Render");
  return (
    <Button onClick={onClick} type="primary">
      {name}
    </Button>
  );
};

const MemoizedChildButton = memo(ChildButton);

MemoTest.getLayout = getDefaultLayout;
export default MemoTest;
