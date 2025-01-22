import { Select as BaseSelect, SelectProps } from "antd";
import React from "react";
import styled from "styled-components";

export const FilterSelect = ({ ...props }: SelectProps) => {
  return (
    <Select
      size="large"
      mode="multiple"
      dropdownRender={(originNode: React.ReactNode) => (
        <SelectDropdown>{originNode}</SelectDropdown>
      )}
      style={{ width: "100%" }}
      optionLabelProp="label"
      maxTagCount="responsive"
      {...props}
    />
  );
};

const SelectDropdown = styled.div`
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: #eee;
  }
  .ant-select-item {
    padding: 13px 20px;
    &:last-child {
      border: none;
    }
  }
`;

const Select = styled(BaseSelect)`
  &&& {
    .ant-select-selector {
      font-size: 13px;
    }
  }
` as typeof BaseSelect;
