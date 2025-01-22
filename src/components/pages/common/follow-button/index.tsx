import { FlexRowWrapper } from "@/components/layout/flex-wrapper";
import { MessageContext } from "@/lib/contexts/message-provider";
import { useFollowAnalystMutation, useMeQuery } from "@/redux/services/users/apis";
import FollowSVG from "public/icons/follow.svg";
import UnFollowSVG from "public/icons/unfollow.svg";
import { useContext, useEffect, useState } from "react";

interface IFollowButton {
  isFollowed: boolean;
  numFollowers: number;
  stockAnalystId?: number;
}
export const FollowButton = ({ isFollowed, numFollowers, stockAnalystId }: IFollowButton) => {
  const [followAnalyst] = useFollowAnalystMutation();
  const { data: currentUser } = useMeQuery();
  const [followed, setFollowed] = useState(false);
  const { messageApi } = useContext(MessageContext);

  useEffect(() => {
    setFollowed(isFollowed);
  }, [stockAnalystId, isFollowed]);

  const handleClickFollow = () => {
    if (!stockAnalystId) return;
    if (!currentUser) {
      return messageApi.warning("로그인 후에 이용가능합니다.");
    }

    followAnalyst({ is_followed: !followed, stock_analyst_id: stockAnalystId });
    setFollowed(!followed);
  };

  return (
    <div className="cursor-pointer" onClick={handleClickFollow}>
      <FlexRowWrapper>
        {isFollowed ? <FollowSVG width={22} /> : <UnFollowSVG width={22} />}
        <div className="ml-1 mt-1 text-customGray-900">{numFollowers}</div>
      </FlexRowWrapper>
    </div>
  );
};
