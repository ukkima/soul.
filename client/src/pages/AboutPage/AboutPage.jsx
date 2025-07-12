import cls from "./aboutpage.module.scss";
import CatGif from "../../assets/gif/cat.gif";
import {
  siHtml5,
  siReact,
  siCss,
  siSass,
  siJavascript,
  siVite,
  siWebpack,
  siNodedotjs,
  siRedux,
  siPrettier,
  siEslint,
  siStylelint,
  siMongodb,
  siExpress,
  siTypescript,
  siTailwindcss,
  siGit,
  siNextdotjs,
} from "simple-icons";
import { SimpleIcon } from "../../components/SimpleIcon/SimpleIcon";
import { Trans, useTranslation } from "react-i18next";

const icons = [
  siHtml5,
  siCss,
  siSass,
  siJavascript,
  siTypescript,
  siNodedotjs,
  siReact,
  siVite,
  siWebpack,
  siRedux,
  siPrettier,
  siEslint,
  siStylelint,
  siMongodb,
  siExpress,
  siTailwindcss,
  siGit,
  siNextdotjs,
];

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <section className={cls.about}>
      <div className="container">
        <div className={cls.about_intro}>
          <div className={cls.about_content}>
            <h1 className={cls.about_title}>
              {t("about.intro.content.title")}
            </h1>
            <div className={cls.about_description}>
              <p className={cls.about_paragraph}>
                {t("about.intro.content.one")}
              </p>

              <p className={cls.about_paragraph}>
                {t("about.intro.content.two")}
              </p>

              <p className={cls.about_paragraph}>
                {t("about.intro.content.three")}
              </p>

              <p className={cls.about_paragraph}>
                {t("about.intro.content.four")}
              </p>

              <p className={cls.about_p_s}>{t("about.intro.content.five")}</p>
            </div>
          </div>

          <div className={cls.avatar}>
            <img src={CatGif} alt="cat" />
          </div>
        </div>
        <div className={cls.about_table}>
          <div className={cls.cell}>
            <h6 className={cls.cell_title}>
              {t("about.table_cell.title_one")}
            </h6>
            <div className={cls.cell_content}>
              {t("about.table_cell.desc_one")}
            </div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>
              {t("about.table_cell.title_two")}
            </h6>
            <div className={cls.cell_content}>
              {t("about.table_cell.desc_two")}
            </div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>
              {t("about.table_cell.title_three")}
            </h6>
            <div className={cls.cell_content}>
              {t("about.table_cell.desc_three")}
            </div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>
              {t("about.table_cell.title_four")}
            </h6>
            <div className={cls.cell_content}>
              <Trans
                i18nKey={"about.table_cell.desc_four"}
                components={{ br: <br /> }}
              />
            </div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>
              {t("about.table_cell.title_five")}
            </h6>
            <div className={cls.cell_content}>
              {t("about.table_cell.desc_five")}
            </div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>
              {t("about.table_cell.title_six")}
            </h6>
            <div className={cls.cell_content}>
              {t("about.table_cell.desc_six")}
            </div>
          </div>

          <div className={cls.cell}>
            <h6 className={cls.cell_title}>
              {t("about.table_cell.title_seven")}
            </h6>
            <div className={cls.cell_icons}>
              {icons.map((el) => (
                <SimpleIcon icon={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
