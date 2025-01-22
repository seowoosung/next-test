import { Input as BaseInput } from "antd";
import { InputProps } from "antd/lib/input";
import React from "react";
import styled from "styled-components";

type ISearchInput = InputProps;
export const SearchInput: React.FC<ISearchInput> = ({ ...rest }) => {
  return (
    <SearchInputWrapper
      {...rest}
      size="large"
      data-testid="search"
      suffix={<img src="/icons/search-icon.svg" width={16} />}
    />
  );
};

const SearchInputWrapper = styled(BaseInput)<ISearchInput>`
  &&& {
    font-size: 14px;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
