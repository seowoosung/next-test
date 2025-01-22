import { FlexColWrapper } from "@/components/layout/flex-wrapper";
import { CAdminEmail } from "@/constants";
import { useTheme } from "@/definitions/styled-components";
import { UpOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import styled from "styled-components";
import { EscrowInfo } from "./escrow-info";

export const CompanyInfo = () => {
  const { styles } = useTheme();
  const customExpandIcon = ({ isActive }: { isActive: boolean | undefined }) => {
    return (
      <UpOutlined
        className={`transition-transform duration-300 ${isActive ? "transform rotate-180" : ""}`}
      />
    );
  };

  return (
    <CollapseWrapper
      bordered={false}
      expandIconPosition="end"
      expandIcon={({ isActive }: any) => customExpandIcon({ isActive })}
      color={styles.common.colors.grayText}
    >
      <Collapse.Panel
        header={
          process.env.NEXT_PUBLIC_SERVICE_TYPE === "JU"
            ? "주식다방(주) 사업자정보"
            : "에프에프 주식회사 사업자정보"
        }
        key="1"
        className={`text-left ${styles.common.class.headerBG}`}
      >
        <FooterContent />
      </Collapse.Panel>
    </CollapseWrapper>
  );
};

const FooterContent = () => {
  const { styles } = useTheme();
  return (
    <>
      {process.env.NEXT_PUBLIC_SERVICE_TYPE === "JU" ? (
        <div className="w-full text-xs">
          <FlexColWrapper className="text-black mb-4">
            <div>주식다방 주식회사</div>
            <div>사업자등록번호: 643-81-02745</div>
            <div>벤처등록번호 : 제 20230920010010 호</div>
            <div>상표등록번호 : 제 40-2118064 호</div>
            <div>경기도 구리시 갈매중앙로 185-3 유로피안스튜디오210 A동 403호</div>
          </FlexColWrapper>
          <FlexColWrapper className="text-gray-500">
            <div>대표 : 이병국 ㅣ 통신판매업신고: 2024-경기구리-0617</div>
            <div>개인정보관리책임자: 이병국 ㅣ </div>
            <div>
              문의 이메일: <a href="mailto:jusikdabang@gmail.com">jusikdabang@gmail.com</a>
            </div>
          </FlexColWrapper>
          <EscrowInfo />
        </div>
      ) : (
        <div className="w-full text-xs">
          <FlexColWrapper className={`${styles.common.class.grayText} mb-4`}>
            <div>에프에프 주식회사</div>
            <div>사업자등록번호: 677-88-01127</div>
            <div>통신판매업신고 번호 : 제 2024-경기하남-2831 호</div>
            <div>상표출원번호 : 40-2024-0139618</div>
            <div>경기도 하남시 미사대로 540, 에이동 6층 609호</div>
          </FlexColWrapper>
          <FlexColWrapper className={`${styles.common.class.grayText}`}>
            <div>대표 : 윤경진</div>
            <div>개인정보관리책임자: 윤경진 ㅣ </div>
            <div>
              문의 이메일:{" "}
              <a href={`mailto:${CAdminEmail}`} className={`${styles.common.class.grayText}`}>
                {CAdminEmail}
              </a>
            </div>
          </FlexColWrapper>
        </div>
      )}
    </>
  );
};
const CollapseWrapper = styled(Collapse)<{ color: string }>`
  &&& {
    margin-top: 20px;
    .ant-collapse-header {
      padding: 0px;
    }
    .ant-collapse-header-text {
      font-size: 12px;
      font-weight: bold;
      color: ${(props) => props.color};
    }
    .ant-collapse-content-box {
      padding: 0px;
    }
  }
`;
