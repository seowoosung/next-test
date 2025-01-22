import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { FormInstance } from "antd";
import { MessageInstance } from "antd/es/message/interface";
import { get } from "lodash";

export const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError =>
  typeof error === "object" && error != null && "status" in error;

export const isErrorWithMessage = (error: unknown): error is { message: string } =>
  typeof error === "object" &&
  error != null &&
  "message" in error &&
  typeof (error as { message: unknown }).message === "string";

/**
 * FormItem에 server로부터 받은 field error를 설정해줌
 */
export const getFieldError = (
  form: FormInstance,
  error: FetchBaseQueryError | SerializedError | undefined,
): { name: string; errors: string[] }[] => {
  const fieldDataList = [];
  const errorInfo = get(error, "data") as any;
  if (!errorInfo || !isFetchBaseQueryError(error)) return [];

  for (const errorField in errorInfo) {
    if (form.getFieldValue(errorField)) {
      fieldDataList.push({
        name: errorField,
        errors: [errorInfo[errorField][0]],
      });
    }
  }
  return fieldDataList;
};

/**
 * FormItem에 server로부터 받은 field error를 설정해줌
 */
export const setFieldError = (
  form: FormInstance,
  error: FetchBaseQueryError | SerializedError | undefined,
  messageApi: MessageInstance,
) => {
  const errorList = getFieldError(form, error);
  if (errorList.length > 0) {
    return form.setFields(errorList);
  }
  messageApi.error("에러가 발생했습니다");
};

/**
 * Server에서 온 에러 번역
 */
export const setTranslatedError = (
  form: FormInstance,
  errorList: { name: string; errors: string[] }[],
) => {
  for (let i = 0; i < errorList.length; i++) {
    const errItem = errorList[i];
    for (let j = 0; j < errItem.errors.length; j++) {
      const errorMsg = errItem.errors[j];
      if (errorMsg.includes("사용자 with this") && errorMsg.includes("already exists.")) {
        const extractedField = errorMsg.split("사용자 with this ")[1].split(" already exists.")[0];
        errItem.errors[j] = `${extractedField}이(가) 이미 존재합니다.`;
      }
    }
  }
  form.setFields(errorList);
};
