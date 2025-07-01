import cls from "./articleslist.module.scss";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export const ArticlesList = () => {
  return (
    <ul className={cls.articles_list}>
      <li className={cls.articles_list__item}>
        <Link to={"/blog"} className={cls.articles_list__link}>
          <span>
            How I fought burnout and the reluctance to program - a two-year-long
            story.
          </span>
          <ArrowRight />
        </Link>
      </li>
    </ul>
  );
};
