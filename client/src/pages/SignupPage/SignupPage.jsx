import { Modal } from "../../components/Modal/Modal";
import { Link } from "react-router";
import cls from "./signuppage.module.scss";
import { useContext } from "react";
import { ModalRouterContext } from "../../contexts/ModalRouterContext";
import { useTranslation, Trans } from "react-i18next";

export const SignupPage = () => {
  const [background] = useContext(ModalRouterContext);

  const { t } = useTranslation();

  return (
    <Modal>
      <div className={cls.wrapper}>
        <img src="/logo.svg" className={cls.logo} />
        <h2 className={cls.title}>{t("signup.title")}</h2>

        <form className={cls.form}>
          <input
            type="text"
            required
            placeholder={t("auth.input.fullname")}
            className={cls.input}
          />
          <input
            type="text"
            required
            placeholder={t("auth.input.username")}
            className={cls.input}
          />
          <input
            type="text"
            required
            placeholder={t("auth.input.password")}
            className={cls.input}
          />
          <button className={cls.button}>{t("signup.button")}</button>
        </form>

        <p className={cls.tip}>
          <Trans
            i18nKey={"signup.message"}
            components={[
              <Link
                to={"/login"}
                state={{ background }}
                className={cls.tip_link}
              ></Link>,
            ]}
          />
        </p>
      </div>
    </Modal>
  );
};
