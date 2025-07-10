import { Modal } from "../../components/Modal/Modal";
import { Link } from "react-router";
import cls from "./loginpage.module.scss";
import { useContext } from "react";
import { ModalRouterContext } from "../../contexts/ModalRouterContext";

export const LoginPage = () => {
  const [background] = useContext(ModalRouterContext);

  return (
    <Modal>
      <div className={cls.wrapper}>
        <img src="/logo.svg" className={cls.logo} />
        <h2 className={cls.title}>Welcome back to Soul.</h2>

        <form className={cls.form}>
          <input
            type="text"
            required
            placeholder="Enter your username"
            className={cls.input}
          />
          <input
            type="text"
            required
            placeholder="Enter your password"
            className={cls.input}
          />
          <button className={cls.button}>Log In</button>
        </form>

        <p className={cls.tip}>
          Don't have an account?{" "}
          <Link to={"/signup"} state={{ background }} className={cls.tip_link}>
            Sign up
          </Link>
        </p>
      </div>
    </Modal>
  );
};
