import { DatePicker as BaseDatePicker, DatePickerProps } from "antd";
import styled from "styled-components";

export const DatePicker = (props: DatePickerProps) => {
  return <StyledDatePicker {...props} />;
};

const StyledDatePicker = styled(BaseDatePicker as any)`
  &&& {
    border: none;
    padding: 7.5px 11px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.01);
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
    }
    .ant-picker-suffix {
      color: black;
    }
  }
`;
