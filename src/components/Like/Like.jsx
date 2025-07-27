import cls from "./like.module.scss";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../../store/selectors/index.js";
import { articlesActions } from "../../store/slices/index.js";
import { likeArticle, unlikeArticle } from "../../store/thunks/index.js";

export const Like = ({ likes, articleId }) => {
  const dispatch = useDispatch();
  const user = useSelector(getAuthUser);
  const isLiked = likes?.includes(user?._id);

  const onClickLike = () => {
    let updateLikes;

    if (likes.includes(user._id)) {
      updateLikes = likes.filter((id) => id !== user._id);
      dispatch(unlikeArticle(articleId));
    } else {
      updateLikes = [...likes, user._id];
      dispatch(likeArticle(articleId));
    }

    dispatch(articlesActions.likeArticle(updateLikes));
  };

  return (
    <div className={cls.feedback_like}>
      <button onClick={onClickLike} className={cls.like_btn}>
        {isLiked ? (
          <Heart fill={"#fff"} color={"#fff"} />
        ) : (
          <Heart color={"#fff"} />
        )}
      </button>
      <p>{likes?.length}</p>
    </div>
  );
};
