import { IDefaultLayoutPage } from "@/components/layout/default-layout";
import SeoHead from "@/components/layout/seo-head";
import { StyledThemeProvider } from "@/definitions/styled-components";
import { MessageProvider } from "@/lib/contexts/message-provider";
import store from "@/redux/store";
import "@/styles/globals.css";
import GlobalStyles from "@/styles/globalStyles";
import { ConfigProvider } from "antd";
import koKR from "antd/locale/ko_KR";
import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  const getLayout =
    (Component as IDefaultLayoutPage).getLayout ||
    ((Page: NextComponentType, props: Record<string, unknown>) => <Page {...props} />);

  return (
    <>
      <SeoHead
        title={(Component as IDefaultLayoutPage).pageHeader?.title}
        subTitle={(Component as IDefaultLayoutPage).pageHeader?.subTitle}
      />
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png`} />
      </Head>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: process.env.NEXT_PUBLIC_PRIMARY_COLOR,
            colorLink: "#000000",
            colorLinkHover: "#767676",
            fontFamily: "Pretendard",
            colorText: "#000000",
          },
          components: {
            Button: {
              fontSizeLG: 14,
            },
            Table: {
              colorTextHeading: "#767676",
            },
            Form: {
              colorTextLabel: "black",
            },
          },
        }}
        renderEmpty={() => <></>}
        locale={koKR}
      >
        <StyledThemeProvider>
          {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* prettier-ignore */ /* @ts-ignore  */}
          <Provider store={store}>
            {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* prettier-ignore */ /* @ts-ignore  */}
            <GlobalStyles />
            <MessageProvider>
              {getLayout(Component, pageProps)}
            </MessageProvider>
          </Provider>
        </StyledThemeProvider>
      </ConfigProvider>
    </>
  );
}
