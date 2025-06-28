import cls from "./footer.module.scss";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";

export const Footer = () => {
  return (
    <>
      <footer className={cls.footer}>
        <div className="container">
          <div className={cls.footer__wrapper}>
            <div className={cls.footer_actions}>
              <LanguageSelector />
            </div>

            <div className={cls.footer_content}>
              <h4 className={cls.footer_logo}>Imran Maisigov</h4>
              <div className={cls.footer_social}>
                <a href="#!" className={cls.footer_social__link}>
                  Telegram
                </a>

                <a href="#!" className={cls.footer_social__link}>
                  GitHub
                </a>

                <a href="#!" className={cls.footer_social__link}>
                  GitLab
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className={cls.footer_dots}>
        <div className="container">
          <div className={cls.footer_dots__wrapper}>
            <div className={cls.dots}>
              <div className={cls.blue_dot}></div>
              <div className={cls.green_dot}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
