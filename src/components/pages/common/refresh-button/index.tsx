import { FlexRowWrapper } from "@/components/layout/flex-wrapper";
import { Button as BaseButton } from "antd";
import { colors } from "colors";
import ReloadSVG from "public/icons/reload.svg";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface IRefreshButtonProps {
  onRefresh: () => void;
}

export const RefreshButton: React.FC<IRefreshButtonProps> = ({ onRefresh }) => {
  const [isRotating, setIsRotating] = useState(false);

  const handleRefresh = () => {
    setIsRotating(true);
    onRefresh();
    setTimeout(() => {
      setIsRotating(false);
    }, 1500);
  };

  return (
    <Button shape="round" onClick={handleRefresh}>
      <FlexRowWrapper>
        <ReloadIcon isRotating={isRotating} />
        <span className="ml-1 text-xs">새로고침</span>
      </FlexRowWrapper>
    </Button>
  );
};

const Button = styled(BaseButton)`
  &&& {
    border: 0.1px solid ${colors.customGray["100"]};
  }
`;

// 회전 애니메이션 정의
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ReloadIcon = styled(({ isRotating, ...props }) => <ReloadSVG {...props} />)`
  animation: ${({ isRotating }) => (isRotating ? rotate : "none")} 1s linear;
`;
