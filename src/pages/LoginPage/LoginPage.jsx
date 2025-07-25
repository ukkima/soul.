import { Modal } from "../../components/Modal/Modal";
import { Link } from "react-router";
import cls from "./loginpage.module.scss";
import { useContext, useState } from "react";
import { ModalRouterContext } from "../../contexts/ModalRouterContext";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loginAuthUser } from "../../store/thunks/index.js";
import { getAuthLoading } from "../../store/selectors/index.js";

export const LoginPage = () => {
  const [dateForm, setDateForm] = useState({
    username: "",
    password: "",
  });
  const [background] = useContext(ModalRouterContext);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector(getAuthLoading);

  const handleChange = (e) => {
    setDateForm({ ...dateForm, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(loginAuthUser(dateForm));

    if (loginAuthUser.fulfilled.match(res)) {
      window.location.href = "/";
    }
  };

  return (
    <Modal>
      <div className={cls.wrapper}>
        <img src="/logo.svg" className={cls.logo} />
        <h2 className={cls.title}>{t("login.title")}</h2>

        <form onSubmit={onSubmit} className={cls.form}>
          <input
            name="username"
            type="text"
            required
            placeholder={t("auth.input.username")}
            onChange={handleChange}
            value={dateForm.username}
            className={cls.input}
          />
          <input
            name="password"
            type="text"
            required
            placeholder={t("auth.input.password")}
            onChange={handleChange}
            value={dateForm.password}
            className={cls.input}
          />
          <Button loading={loading} typeStyle={"filled"}>
            {t("login.button")}
          </Button>
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
