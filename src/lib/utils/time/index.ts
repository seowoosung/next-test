import { CDateFormat } from "@/constants";
import dayjs from "dayjs";
import { get } from "lodash";

export const formatDate = (timestamp: number, dateFormat = "YY년 M월 D일"): string => {
  dayjs.locale("ko");
  return dayjs(new Date(timestamp * 1000)).format(dateFormat);
};

// obj에 dayjs 필드가 있으면 string으로 변환
export const convertDateFields = (obj: object) => {
  const newObj = {} as Record<string, unknown>;

  for (const [key, value] of Object.entries(obj)) {
    if (dayjs.isDayjs(value)) {
      newObj[key] = value.format(CDateFormat);
    } else {
      if (value === null) {
        newObj[key] = undefined;
      } else {
        newObj[key] = value;
      }
    }
  }

  return newObj;
};

// fieldName에 해당하는 값을 기준으로 그룹화
export const groupByDate = <T, K extends keyof T>(data: T[], fieldName: K): Record<string, T[]> => {
  return data.reduce((acc: Record<string, T[]>, item: T) => {
    const key = item[fieldName] as unknown as string;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, T[]>);
};

// datetime필드의 date 값을 기준으로 그룹화
export const groupByDateTime = <T, K extends keyof T>(
  data: T[],
  fieldName: K | string,
): Record<string, T[]> => {
  return data.reduce((acc: Record<string, T[]>, item: T) => {
    const dateAt = String(get(item, fieldName)).split("T")[0];
    const key = dateAt;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, T[]>);
};
