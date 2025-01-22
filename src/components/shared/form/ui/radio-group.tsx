import { Radio } from "antd";
import styled from "styled-components";

export const RadioGroup = styled(Radio.Group)`
  &&& {
    label span {
      font-size: 12.5px;
      white-space: nowrap;
    }
    .ant-radio-button-wrapper.ant-radio-button-wrapper-checked {
      font-weight: 700;
    }
    .ant-radio-button-wrapper {
      border-inline-start-width: 1px;
      border-radius: 5px;
    }
    .ant-radio-button-wrapper:not(:first-child)::before {
      width: 0px;
    }
  }
`;
