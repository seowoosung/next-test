/**
 * 인증된 사용자 정보를 얻거나 로그인 페이지로 이동
 */
import { useMeQuery } from "@/redux/services/users/apis";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";

const beforeLoginPageList = ["/login", "/signup", "/login/oauth"];

const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { data: currentUser, isLoading } = useMeQuery();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (currentUser && beforeLoginPageList.includes(router.pathname)) {
      router.push("/");
    }
  }, [router, currentUser]);

  return <>{children}</>;
};

export default AuthProvider;
