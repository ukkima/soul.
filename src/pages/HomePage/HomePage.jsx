import classNames from "classnames";
import cls from "./homepage.module.scss";
import { AudioList } from "../../components/AudioList/AudioList";
import { ArticlesList } from "../../components/ArticlesList/ArticlesList";
import { Trans, useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={cls.animated_wrapper}>
        <div className={classNames(cls.optimized_dot, cls.dot_purple)}></div>
        <div className={classNames(cls.optimized_dot, cls.dot_blue)}></div>
      </div>
      <section className={cls.intro}>
        <div className="container">
          <div className={cls.intro__wrapper}>
            <div className={cls.intro_inner}>
              <h1 className={cls.title}>{t("home.intro.title")}</h1>
              <p className={cls.description}>{t("home.intro.desc_one")}</p>

              <p className={cls.description}>
                <Trans
                  i18nKey="home.intro.desc_two"
                  components={{
                    bold: <span className={cls.bold} />,
                  }}
                />
              </p>
            </div>

            <AudioList />
          </div>
        </div>
      </section>
      <section id="blog" className={cls.blog}>
        <div className="container">
          <h2 className={cls.blog_title}>{t("home.blog.title")}</h2>
          <ArticlesList />
        </div>
      </section>
    </>
  );
};
