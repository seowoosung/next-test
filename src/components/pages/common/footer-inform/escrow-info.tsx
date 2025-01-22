export const EscrowInfo = () => {
  // 이벤트 핸들러 함수
  const onPopKBAuthMark = () => {
    window.open(
      "",
      "KB_AUTHMARK",
      "height=604, width=648, status=yes, toolbar=no, menubar=no, location=no",
    );
    const form = document.getElementById("KB_AUTHMARK_FORM") as any;
    form.action = "https://okbfex.kbstar.com/quics";
    form.target = "KB_AUTHMARK";
    form.submit();
  };

  return (
    <div className="w-[50px] mt-2">
      <form id="KB_AUTHMARK_FORM" method="get">
        <input type="hidden" name="page" value="C021590" />
        <input type="hidden" name="cc" value="b034066:b035526" />
        <input type="hidden" name="mHValue" value="c80ead9889fa1bbde0fa2f41c6c1e043" />
      </form>
      <a href="#" onClick={onPopKBAuthMark}>
        <img src="http://img1.kbstar.com/img/escrow/escrowcmark.gif" />
      </a>
    </div>
  );
};
