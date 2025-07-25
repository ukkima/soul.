import { Modal } from "../../components/Modal/Modal";
import { Link, useNavigate } from "react-router";
import cls from "./signuppage.module.scss";
import { useContext, useState } from "react";
import { ModalRouterContext } from "../../contexts/ModalRouterContext";
import { useTranslation, Trans } from "react-i18next";
import { Button } from "../../components/Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { signupAuthUser } from "../../store/thunks/signupAuthUser.js";
import { getAuthLoading } from "../../store/selectors/index.js";

export const SignupPage = () => {
  const [dateForm, setDateForm] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const [background] = useContext(ModalRouterContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(getAuthLoading);

  const handleChange = (e) => {
    setDateForm({ ...dateForm, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(signupAuthUser(dateForm));

    if (signupAuthUser.fulfilled.match(res)) {
      navigate("/login", { state: { background } });
    }
  };

  return (
    <Modal>
      <div className={cls.wrapper}>
        <img src="/logo.svg" className={cls.logo} />
        <h2 className={cls.title}>{t("signup.title")}</h2>

        <form onSubmit={onSubmit} className={cls.form}>
          <input
            name="fullname"
            type="text"
            required
            placeholder={t("auth.input.fullname")}
            onChange={handleChange}
            className={cls.input}
          />
          <input
            name="username"
            type="text"
            required
            placeholder={t("auth.input.username")}
            onChange={handleChange}
            className={cls.input}
          />
          <input
            name="password"
            type="text"
            required
            placeholder={t("auth.input.password")}
            onChange={handleChange}
            className={cls.input}
          />
          <Button loading={loading} typeStyle={"filled"}>
            {t("signup.button")}
          </Button>
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
