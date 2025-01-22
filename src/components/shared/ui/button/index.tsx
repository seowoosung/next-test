import { Button as BaseButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import { colors } from "colors";
import React from "react";
import styled, { css } from "styled-components";

type IButton = ButtonProps;
export const Button: React.FC<IButton> = ({ ...rest }) => {
  return <ButtonWrapper {...rest} data-testid="btn" />;
};

const ButtonWrapper = styled(BaseButton)<IButton>`
  &&& {
    height: fit-content;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    padding: 12px 0px;
    svg {
      display: inline-block;
      margin-right: 8px;
    }
    span {
      position: relative;
      top: 2px;
      font-size: 14px;
      font-weight: 700;
    }
  }
  ${(props) =>
    props.type === "default" &&
    css`
      &:not([disabled]):hover {
        background: ${colors.primary};
        span {
          color: #fff;
        }
      }
      span {
        color: ${colors.primary};
      }
    `}

  ${(props) =>
    props.type === "ghost" &&
    css`
      background: #f9f9f9;
      color: ${colors.primary};
    `}
`;
