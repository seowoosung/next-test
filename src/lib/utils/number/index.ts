import { CPriceMaxScale } from "@/constants";
import { first, isEmpty, isFinite, isNaN, replace } from "lodash";

/**
 * 정수를 comma 형태로 변환
 */
export const integerCommifyFormatter = (value: string | number | undefined): string => {
  if (isNaN(Number(value)) === true || isFinite(Number(value)) === false) {
    return "0";
  }
  return replace(`${Number(value)}`, /\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * 소수점 있는 숫자를 comma 형태로 변환
 */
export const decimalCommifyFormatter = (
  value: string | number | undefined | null,
  decimalNumber = CPriceMaxScale,
): string => {
  if (
    isNaN(Number(value)) === true ||
    isFinite(Number(value)) === false ||
    isEmpty(String(value)) === true
  ) {
    return "0";
  }

  const obj = String(parseFloat(String(value)));
  const bExists = obj.indexOf(".", 0);
  const strArr = obj.split(".");
  strArr[0] = integerCommifyFormatter(first(strArr));

  let decimalPart = "";
  if (bExists > -1 && decimalNumber > 0) {
    decimalPart = strArr[1]?.substring(0, decimalNumber).replace(/[0]+$/, ""); // remove trailing zero
    if (decimalPart) decimalPart = `.${decimalPart}`;
  }

  return strArr[0] + decimalPart;
};

/**
 * comma가 붙은 숫자형태에서 comma 제거
 */
export const commifyParser = (value: string | undefined): string => {
  value = value ? value : "0";

  return replace(value, /\$\s?|(,*)/g, "");
};

const getMaxDecimalNumber = (x: number, y: number): number => {
  const arr1 = x.toString();
  const arr2 = y.toString();

  let dotPos1 = arr1.indexOf(".");
  if (dotPos1 < 0) dotPos1 = arr1.length - 1;
  let dotPos2 = arr2.indexOf(".");
  if (dotPos2 < 0) dotPos2 = arr2.length - 1;

  return Math.max(arr1.length - dotPos1 - 1, arr2.length - dotPos2 - 1);
};

/**
 * Float type 숫자들의 뺄셈 계산
 */
export const subtractFloatNumbers = (x: number, y: number): number => {
  let decimalNumber = getMaxDecimalNumber(x, y);
  if (decimalNumber <= 0) decimalNumber = 1;

  const result = x - y;
  return parseFloat(result.toFixed(decimalNumber));
};

/**
 * Float type 숫자들의 덧셈 계산
 */
export const addFloatNumbers = (x: number, y: number): number => {
  let decimalNumber = getMaxDecimalNumber(x, y);
  if (decimalNumber <= 0) decimalNumber = 1;

  const result = x + y;
  return parseFloat(result.toFixed(decimalNumber));
};

/**
 * Price의 tick size로부터 화면에 표기할 소수점 이하 자리수를 구한 뒤 변환
 */
export const getPriceWithDecimalFromTick = (price: number, tickSize: number): string => {
  // TODO tickSize가 0.5 같은 경우 처리해주기(예시: 21.5와 21.0의 return 값이 다르도록)
  let decimalNumber = 0;
  if (tickSize < 1 && tickSize > 0) {
    const strArr = tickSize.toString().split(".");
    decimalNumber = strArr[1].length;
  }
  return decimalCommifyFormatter(price, decimalNumber);
};

export const largeNumFormat = (value: string | number | undefined | null): string => {
  if (
    isNaN(Number(value)) === true ||
    isFinite(Number(value)) === false ||
    isEmpty(String(value)) === true
  ) {
    return "0";
  }

  if (Number(value) < 1000) {
    return String(parseFloat(Number(value).toFixed(CPriceMaxScale)));
  }
  value = Number(String(value).replace(/[^0-9.]/g, ""));
  const si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (value >= si[index].v) {
      break;
    }
  }
  return (value / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
};
