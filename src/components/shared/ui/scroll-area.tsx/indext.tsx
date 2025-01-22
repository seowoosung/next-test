import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const ScrollArea: React.FC<PropsWithChildren> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth);
  };

  const scroll = (direction: string) => {
    if (!scrollContainerRef.current) return;
    const { current } = scrollContainerRef;
    const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="relative">
      {showLeftButton && (
        <FloatButton
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 flex justify-center"
          onClick={() => scroll("left")}
        >
          <LeftOutlined />
        </FloatButton>
      )}
      {showRightButton && (
        <FloatButton
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 flex justify-center"
          onClick={() => scroll("right")}
        >
          <RightOutlined />
        </FloatButton>
      )}
      <div className="overflow-x-auto scrollbar-hide" ref={scrollContainerRef}>
        {children}
      </div>
    </div>
  );
};

const FloatButton = styled.div`
  background: white;
  border-radius: 100px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;
