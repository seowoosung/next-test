import { TRoutePath } from "@/redux/services/types";
import { EOAuthProvider, EUserMembershipType } from "@/redux/services/users/enums";
import { IUser } from "@/redux/services/users/types";
import store from "@/redux/store";
import { EMarketStatus } from "@/sockets/enums";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { NextRouter } from "next/router";

dayjs.extend(utc);

export const searchParam = (key: string): null | string => {
  return new URLSearchParams(location.search).get(key);
};

export const replaceRouter = (router: NextRouter, params: Record<string, TRoutePath>): void => {
  router.replace(
    {
      query: { ...router.query, ...params },
    },
    undefined,
    {
      scroll: false,
    },
  );
};

export const getFileExtension = (filename: string): string | undefined => {
  return filename.split(".").pop();
};

export const getCurrentHost = () => {
  return `${window.location.protocol}//${window.location.host}`;
};

export const getOAuthRedirectURI = (provider: EOAuthProvider) => {
  return `${getCurrentHost()}/login/oauth?provider=${provider}`;
};

/* 모두 undefined인 value밖에 없거나 필드가 0개인 경우 true를 반환
 */
export const isEmpty = (obj: any) => {
  if (obj === undefined) return true;

  if (typeof obj === "object") {
    for (const key in obj) {
      // value가 빈 list인 경우는 empty로 봄
      if (typeof obj[key] === "object" && obj[key]?.length === 0) {
        continue;
      } else if (obj[key] !== undefined) {
        return false;
      }
    }
    return true;
  }

  return false;
};

export const mergeDict = (obj1: any, obj2: any) => {
  const merged = { ...obj1 };

  for (const key in obj2) {
    if (!merged[key]) {
      merged[key] = obj2[key];
    }
  }
  return merged;
};

export const formatDateToWeekString = (dateStr: string) => {
  const date = new Date(dateStr);
  const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

  // 금요일(숫자 5)을 기준으로 간주하기 위한 조정
  const dayAdjustment = startOfMonth.getDay() === 0 ? 0 : 5 - startOfMonth.getDay();

  // 주차 계산
  const weekNumber = Math.ceil((date.getDate() + dayAdjustment) / 7);

  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const monthName = monthNames[date.getMonth()];

  return `${monthName} ${weekNumber}주차`;
};

export const getKoreanDayOfWeek = (dateStr: string) => {
  const date = new Date(dateStr);
  const options = { weekday: "long" } as any; // 요일만 표시
  const koreanDayOfWeek = date.toLocaleDateString("ko-KR", options);

  return koreanDayOfWeek.replace("요일", "");
};

export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts && parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }
};

/* 테마 전종목, 특징주 등의 정보를 볼 수 있는 권한이 있는지 여부 */
export const hasAccessPermission = (user?: IUser) => {
  if (
    user?.current_membership_type === EUserMembershipType.FULL ||
    user?.current_membership_type === EUserMembershipType.FREE_TRIAL
  )
    return true;
  const marketStatus = store.getState().classifications.marketStatus;
  // 무료회원에게는 장마감 이후에만 공개
  if (user && marketStatus === EMarketStatus.CLOSE) return true;
  return false;
};

/* 유료 멤버십 여부 */
export const hasPaidMembership = (user?: IUser) => {
  return user?.current_membership_type === EUserMembershipType.FULL;
};

export * from "./number";
export * from "./time";
