import { useTranslation } from "react-i18next";
import classNames from "classnames";
import cls from "./authbuttons.module.scss";
import { Link } from "react-router";

export const AuthButtons = ({ background, scrolled }) => {
  const { t } = useTranslation();

  return (
    <div className={cls.auth_buttons}>
      <Link
        to={"/login"}
        state={{ background }}
        className={classNames(cls.auth_btn, cls.login, scrolled && cls.active)}
      >
        {t("header.login")}
      </Link>
      <Link
        to={"/signup"}
        state={{ background }}
        className={classNames(cls.auth_btn, cls.signup)}
      >
        {t("header.signup")}
      </Link>
    </div>
  );
};
