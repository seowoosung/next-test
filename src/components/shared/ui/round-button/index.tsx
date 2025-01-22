import { Button as BaseButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import React from "react";
import styled from "styled-components";

type IButton = ButtonProps;
export const RoundButton: React.FC<IButton> = ({ ...rest }) => {
  return <ButtonWrapper {...rest} data-testid="btn" />;
};

const ButtonWrapper = styled(BaseButton)<IButton>`
  &&& {
    width: fit-content;
    font-size: 12px;
    font-weight: 700;
    border-radius: 100px;
    padding: 18px 10px;
    border-color: #333;
    flex-direction: column;
    justify-content: center;
    span {
      top: 1px;
      position: relative;
    }
  }
`;
