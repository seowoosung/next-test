import { TextProps } from "antd/es/typography/Text";
import React, { useEffect, useState } from "react";

interface ITimerProps extends TextProps {
  endTimestamp: number;
}
const Timer: React.FC<ITimerProps> = ({ endTimestamp, ...textProps }) => {
  const [timeLeft, setTimeLeft] = useState("00:00");

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;
    const updateTimer = () => {
      const nowTimestamp = Date.now();
      const distance = endTimestamp - nowTimestamp; // 종료 시간까지 남은 밀리초

      if (distance < 0) {
        // 타이머 종료
        setTimeLeft("00:00");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // HH:MM:SS 포맷으로 변환
      setTimeLeft(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    };

    updateTimer();
    interval = setInterval(updateTimer, 1000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(interval);
  }, [endTimestamp]);

  return (
    <span {...textProps} className="text-orange">
      {timeLeft}
    </span>
  );
};

export default Timer;
