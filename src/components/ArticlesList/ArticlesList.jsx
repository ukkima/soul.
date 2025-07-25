import cls from "./articleslist.module.scss";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFetchArticles } from "../../store/thunks/index.js";
import { getArticlesLoading } from "../../store/selectors/index.js";
import { SkeletonCustom } from "../Skeleton/Skeleton.jsx";

export const ArticlesList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getArticlesLoading);

  useEffect(() => {
    dispatch(getFetchArticles());
  }, []);

  const articlesList = useSelector((state) => state.articles.list);
  const reverseList = [...articlesList].reverse();
  return (
    <ul className={cls.articles_list}>
      {loading ? (
        <>
          <SkeletonCustom height={20} />
          <SkeletonCustom height={20} />
        </>
      ) : (
        reverseList.map((el) => {
          return (
            <li className={cls.articles_list__item}>
              <Link
                to={`/article/${el._id}`}
                className={cls.articles_list__link}
              >
                <span>{el.title}</span>
              </Link>
            </li>
          );
        })
      )}
    </ul>
  );
};
