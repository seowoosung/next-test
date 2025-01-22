import { Form, FormProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const DefaultForm = <T,>({ ...formProps }: PropsWithChildren<FormProps>) => {
  return (
    <FormWrapper>
      <Form<T> colon={false} layout="vertical" preserve={true} {...formProps}>
        {formProps.children}
      </Form>
    </FormWrapper>
  );
};

export default DefaultForm as typeof DefaultForm;

const FormWrapper = styled.div`
  &&& {
    .ant-form-item {
      margin-bottom: 20px;
    }
  }
`;
