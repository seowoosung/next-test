import { useTheme } from "@/definitions/styled-components";
import { CHeaderHeight, CMaxWebWidth } from "@/styles/globalStyles";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
  const { styles } = useTheme();
  return (
    <HeaderWrapper
      data-testid="header"
      className={`flex-wrap flex items-center justify-between ${styles.common.class.headerBG}`}
      width={CMaxWebWidth}
    >
      <div className="flex justify-start">
        <Link href="/">
          <img src="/logo.png" height={40} width={80} />
        </Link>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div<{ width: number }>`
  height: ${CHeaderHeight}px;
  position: fixed;
  padding: 0px 15px;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  max-width: ${(props) => props.width}px;
  width: 100%;
  margin: auto;
`;
