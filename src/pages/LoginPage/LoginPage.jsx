import { Modal } from "../../components/Modal/Modal";
import { Link } from "react-router";
import cls from "./loginpage.module.scss";
import { useContext } from "react";
import { ModalRouterContext } from "../../contexts/ModalRouterContext";
import { Trans, useTranslation } from "react-i18next";

export const LoginPage = () => {
  const [background] = useContext(ModalRouterContext);

  const { t } = useTranslation();

  return (
    <Modal>
      <div className={cls.wrapper}>
        <img src="/logo.svg" className={cls.logo} />
        <h2 className={cls.title}>{t("login.title")}</h2>

        <form className={cls.form}>
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
          <button className={cls.button}>{t("login.button")}</button>
        </form>

        <p className={cls.tip}>
          <Trans
            i18nKey={"login.message"}
            components={[
              <Link
                to={"/signup"}
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
