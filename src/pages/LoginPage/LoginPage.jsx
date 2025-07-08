import { Modal } from "../../components/Modal/Modal";
import { Link, useLocation } from "react-router";
import cls from "./loginpage.module.scss";

export const LoginPage = () => {
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
          <Link to={"/signup"} className={cls.tip_link}>
            Sign up
          </Link>
        </p>
      </div>
    </Modal>
  );
};
