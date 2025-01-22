export const SearchInform = () => {
  if (process.env.NEXT_PUBLIC_SERVICE_TYPE === "JU") {
    return (
      <div className="text-xs text-customGray-700 mt-2">
        {"• 개별 종목 검색은 ‘종목정보’ > ‘종목검색’에서 가능합니다."}
      </div>
    );
  }
  return <></>;
};

export const ThemeInform = () => {
  return (
    <div className="text-xs text-customGray-700">
      {"• 테마명을 누르면 테마에 속한 종목을 볼 수 있습니다."}
    </div>
  );
};
