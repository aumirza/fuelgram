import { useEffect, useState } from "react";
import { UpvoteIcon } from "./ui/upvote";
import AnimatedCount from "./AnimatedCount";

function FuelLikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLikedByMe, setIsLikedByMe] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    console.log(likes);
  };

  useEffect(() => {
    setIsLikedByMe(Boolean(likes));
  }, [likes]);

  return (
    <div className="flex items-center justify-center flex-grow gap-1">
      <div onClick={handleLike}>
        <UpvoteIcon
          filled={isLikedByMe}
          className={isLikedByMe ? "text-blue-500" : ""}
        />
      </div>
      <AnimatedCount count={likes} />
    </div>
  );
}

export default FuelLikeButton;
