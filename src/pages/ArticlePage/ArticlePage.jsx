import { useSelector } from "react-redux";
import cls from "./articlepage.module.scss";
import { useParams } from "react-router";
import { DateTime } from "luxon";
import { getArticles } from "../../store/selectors/index.js";

export const ArticlePage = () => {
  const { id } = useParams();
  const articlesList = useSelector(getArticles);

  const article = articlesList.find((el) => el._id === id);

  const dt = DateTime.fromISO(article?.createdAt);

  return (
    <>
      {article && (
        <article className={cls.article}>
          <div className="container">
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
          </div>
        </article>
      )}
    </>
  );
};
