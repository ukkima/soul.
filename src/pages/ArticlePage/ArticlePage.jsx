import cls from "./articlepage.module.scss";
import { useParams } from "react-router";
import { DateTime } from "luxon";
import { Like } from "../../components/Like/Like.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchArticleByID } from "../../store/thunks/index.js";
import { getArticle } from "../../store/selectors/getArticle.js";
import { getArticlesLoading } from "../../store/selectors/index.js";
import { ArticleSkeleton } from "../../components/ArticleSkeleton/ArticleSkeleton.jsx";

export const ArticlePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector(getArticle);
  const loading = useSelector(getArticlesLoading);

  useEffect(() => {
    const getArticle = async () => {
      const res = await dispatch(getFetchArticleByID(id));
    };

    getArticle();
  }, []);

  const dt = DateTime.fromISO(article?.createdAt);

  return (
    <>
      {loading ? (
        <ArticleSkeleton />
      ) : (
        <div className={cls.wrapper}>
          <article className={cls.article}>
            <div className={cls.article__wrapper}>
              <span className={cls.create_time}>
                {dt.toLocaleString({
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <h1 className={cls.title}>{article.title}</h1>
              <div className={cls.image}>
                <img src={article.image} alt="image" />
              </div>
              <p className={cls.text_content}>{article.description}</p>
            </div>
          </article>

          <div className={cls.article_touch_feedback}>
            <Like likes={article?.likes} articleId={id} />
          </div>
        </div>
      )}
    </>
  );
};
