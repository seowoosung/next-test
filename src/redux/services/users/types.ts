
export interface IUser {
  id: number;
  userid: string;
  username: string;
  nickname: string;
}


export interface ILoginArgs {
  userid: string;
  password: string;
}

export interface ISignupArgs {
  userid: string;
  phone: string;
  country_code: number;
  email: string;
  encrypted_phone: string; // 휴대전화 인증 뒤에 받는 암호화 값.
  username: string;
  nickname: string;
  password: string;
  agreement_kakao: boolean;
  agreement_sms: boolean;
  agreement_phone: boolean;
  agreement_email: boolean;
  referral?: string;
}
