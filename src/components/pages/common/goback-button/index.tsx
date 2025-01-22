import { Button, ButtonProps } from "antd";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

type IGobackButtonProps = ButtonProps;
export const GobackButton = ({ children, ...props }: PropsWithChildren<IGobackButtonProps>) => {
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back(); // 브라우저 히스토리에서 한 단계 뒤로 이동
    } else {
      router.push("/"); // 히스토리가 없는 경우 홈으로 이동
    }
  };

  return (
    <Button onClick={goBack} {...props}>
      {children}
    </Button>
  );
};
