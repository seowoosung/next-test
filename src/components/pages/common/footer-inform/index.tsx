import { FlexColWrapper, FlexRowWrapper } from "@/components/layout/flex-wrapper";
import { useTheme } from "@/definitions/styled-components";
import { useIsIos } from "@/lib/hooks/use-is-ios";
import { useModalWithHistory } from "@/lib/hooks/use-modal-with-history";
import { CHeaderHeight, CMaxWebWidth, CMaxWidth } from "@/styles/globalStyles";
import { QRCode } from "antd";
import LogoSVG from "public/icons/logo-icon.svg";
import AppstoreSVG from "public/themalab/appstore.svg";
import PlaystoreSVG from "public/themalab/playstore.svg";
import styled from "styled-components";
import { ExemptionModal } from "../../signup/exemption-modal";
import { PrivacyModal } from "../../signup/privacy-modal";
import { RefundModal } from "../../signup/refund-modal";
import { TermsModal } from "../../signup/terms-modal";
import { AnnouncementModal } from "../../users/mypage/announcement/modal";
import { FAQModal } from "../../users/mypage/faq/modal";
import { InquirementCreateModal } from "../../users/mypage/inquirements/modal";
import { CompanyInfo } from "./company-info";

const CThemePlaystore = "https://play.google.com/store/apps/details?id=com.nachocode.themelab2";
const CThemeAppstore = "https://apps.apple.com/in/app/%ED%85%8C%EB%A7%88%EB%9E%A9/id6670773023";
interface IFooterInformProps {
  isMobile: boolean;
  useNav: boolean;
}
export const FooterInform: React.FC<IFooterInformProps> = ({ isMobile, useNav }) => {
  const [requestVisible, openRequestModal, closeRequestModal] = useModalWithHistory("request");
  const [faqVisible, openFAQModal, closeFAQModal] = useModalWithHistory("faq");
  const [announcementVisible, openAnnouncementModal, closeAnnouncementModal] =
    useModalWithHistory("announcement");
  const isIos = useIsIos();
  const { styles } = useTheme();

  return (
    <FooterWrapper
      useNav={useNav}
      className={`pt-10 px-3 w-full ${styles.common.class.headerBG}`}
      style={{ maxWidth: isMobile ? `${CMaxWidth}px` : `${CMaxWebWidth}px` }}
    >
      {process.env.NEXT_PUBLIC_SERVICE_TYPE === "TH" && (
        <FlexRowWrapper className="justify-center gap-10 mb-6">
          <FlexColWrapper className="w-fit gap-2 items-center">
            <a href={CThemePlaystore} target="_blank">
              <PlaystoreSVG className="h-10 cursor-pointer hover:scale-105" />
            </a>
            <QRCode
              value={CThemePlaystore}
              size={100}
              className="border border-amber-300 border-4"
            />
          </FlexColWrapper>
          <FlexColWrapper className="w-fit gap-2 items-center">
            <a href={CThemeAppstore} target="_blank">
              <AppstoreSVG className="h-10 cursor-pointer hover:scale-105" />
            </a>
            <QRCode value={CThemeAppstore} size={100} className="border border-rose-600 border-4" />
          </FlexColWrapper>
        </FlexRowWrapper>
      )}
      <div className="justify-center flex">
        {process.env.NEXT_PUBLIC_SERVICE_TYPE === "JU" ? (
          <LogoSVG className="my-5" />
        ) : (
          <img src="/themalab/logo.png" width={130} className="my-5" />
        )}
      </div>
      {process.env.NEXT_PUBLIC_SERVICE_TYPE === "JU" ? (
        <div>
          주식다방은 주식투자에 꼭 필요한 투자정보와 테마주, 추천종목을 매일 요약해 드리고 있습니다.
          바쁜 일상에서도 주식다방을 이용해서 최근 트랜드와 핫 한 테마주에 대한 흐름을 놓치지
          마세요.
          <br />
          <br />
          #개장전이슈 #오늘의특징주 #시간외특징주 #미국주요주식 #뉴스/공시 #주요일정 #테마주
          #증권사리포트 #증권방송종목추천 #추천종목 #공모주청약 #신규상장
          <br />
          <br />
          주식다방은 금융투자업자가 아닌 유사투자자문업자로, 개별적인 투자상담과 자금운용이
          불가합니다. 또한 투자결과에 따라 투자원금의 손실이 발생할 수 있으며, 그 손실과 책임은
          투자자에게 귀속됩니다. <br />
          <br />
          주식다방에서 제공하는 수익률은 기준에 따라 다른 결과값을 나타낼 수 있으며, 주식다방에서
          제공하는 종목 및 목표가는 투자의 참고자료일 뿐 투자의 최종판단은 이용자 본인의 책임하에
          이루어져야 하며{" "}
          <span className="font-bold text-black">
            투자의 결과에 대해서는 주식다방은 어떠한 경우에도 책임지지 않습니다.
          </span>
        </div>
      ) : (
        <div className={`${styles.common.class.grayText}`}>
          서비스에서 제공되는 실시간, 비 실시간 증권시세 정보는 “
          <span className="font-bold">KRX가 지적재산권을 보유</span>”하고 있으며 코스콤과의 합당한
          계약을 통해 이용자에게 제공하는 정보 입니다
          <br />
          <br />
          <div>
            (1) 비회원 또는 무료 회원에게는{" "}
            <span className="font-bold">시세 정보가 20분 이상 지연되어 제공</span> 됩니다.
          </div>
          <div>
            (2) 코스콤과 회사는 시세정보의 정확성이나 신뢰성에 대해 책임지지 아니하며, 정보
            이용으로부터 발생하는 어떠한 손실 또는 손해에 대해서도 책임지지 아니합니다.
          </div>
          <div>
            (3) 서비스에서 제공하는 증권시세는 이용자 자신의 내부적 용도로만 정보를 이용할 수
            있으며, 코스콤의 사전 서면 승인 없는 상업적 판매 또는 제3자에 대한 정보의 제공은
            금지됩니다.
          </div>
          <div>
            (4) (3)항에 대해 정확성을 기하자면, 이용자는 서비스에서 제공되는 시세정보에 대해 크롤링,
            수기작업, 자동 시세정보 수집, 해킹 등 어떠한 형태로도 시세정보를 수집하여 판매하거나
            이용자 본인 이외의 제 3자에게(블로그, 카페, SNS, 텔레그램, 홈페이지 등) 노출, 전시,
            제공하는 행위는 저작권법 위반으로 민.형사상 책임의 대상이 됩니다.
          </div>
          <br />
          테마랩에서 제공하는 증권시세 및 콘텐츠는 단순 참고자료용으로 적시성 및 정확성을 보장하지
          않으며, 불가피한 사유로 인하여 정보의 오류, 누락, 지연 등이 발생할 수 있습니다.
          <br />
          이러한 경우, 그로 인한 이용자의 손실 및 손해에 대하여 회사는 책임을 지지 않습니다. <br />
          투자의 최종판단은 이용자 본인의 책임하에 이루어져야 하며 투자의 결과에 대해서는 테마랩은
          어떠한 경우에도 책임지지 않습니다.
        </div>
      )}
      <CompanyInfo />
      <div className="mt-4">
        All rights reserved. Copyright © 2024 by {process.env.NEXT_PUBLIC_SITENAME}
      </div>
      <FlexRowWrapper className="gap-4 mt-10 mb-6 flex-wrap">
        <ExemptionModal nameShow={true} />
        <TermsModal nameShow={true} />
        <PrivacyModal nameShow={true} />
        {!isIos && <RefundModal nameShow={true} />}
        <a onClick={openRequestModal}>
          <span className="text-sm text-customGray-700 whitespace-nowrap">제휴 ∙ 이용문의</span>
        </a>
        {process.env.NEXT_PUBLIC_SERVICE_TYPE === "JU" && (
          <>
            <a onClick={openAnnouncementModal}>
              <span className="text-sm text-customGray-700 whitespace-nowrap">공지사항</span>
            </a>
            {!isIos && (
              <a onClick={openFAQModal}>
                <span className="text-sm text-customGray-700 whitespace-nowrap">FAQ</span>
              </a>
            )}
          </>
        )}
      </FlexRowWrapper>
      {requestVisible && <InquirementCreateModal onClose={closeRequestModal} />}
      {faqVisible && <FAQModal onClose={closeFAQModal} />}
      {announcementVisible && <AnnouncementModal onClose={closeAnnouncementModal} />}
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div<{ useNav: boolean }>`
  font-size: 11px;
  color: #666;
  margin: auto;
  margin-bottom: ${(props) => (props.useNav ? CHeaderHeight : 0)}px;
  padding-bottom: 6px;
`;
