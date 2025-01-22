import { Button as BaseButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import React from "react";
import styled, { css } from "styled-components";

interface IButton extends ButtonProps {
  active: boolean;
}
export const SubMenu: React.FC<IButton> = ({ active, ...rest }) => {
  return <ButtonWrapper active={String(active)} {...rest} />;
};

const ButtonWrapper = styled(BaseButton)<{ active: string }>`
  &&& {
    width: fit-content;
    font-size: 13.5px;
    border-radius: 15px;
    padding: 19px 6px;
    flex-direction: column;
    justify-content: center;
    span {
      top: 2px;
      position: relative;
    }
    ${(props) =>
      String(props.active) === "true"
        ? css`
            border-color: #333;
            color: #fff;
            background-color: #333;
            font-weight: 700;
            &:hover {
              color: #fff !important;
              background-color: #666 !important;
              border-color: #666 !important;
            }
          `
        : css`
            border-color: #666;
            color: #666;
            &:hover {
              color: #000 !important;
              border-color: #000 !important;
            }
          `}
  }
`;
