import { Button as BaseButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import React from "react";
import styled from "styled-components";

type IButton = ButtonProps;
export const SmallButton: React.FC<IButton> = ({ ...rest }) => {
  return <ButtonWrapper {...rest} data-testid="btn" />;
};

const ButtonWrapper = styled(BaseButton)<IButton>`
  &&& {
    height: 40px;
    width: 60px;
    font-size: 12px;
    padding: 0px;
    border-color: #666;
    span {
      position: relative;
      top: 2px;
    }
  }
`;
