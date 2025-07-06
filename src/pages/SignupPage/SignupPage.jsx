import { Modal } from "../../components/Modal/Modal";
import { Link } from "react-router";
import cls from "./signuppage.module.scss";

export const SignupPage = () => {
  return (
    <Modal>
      <div className={cls.wrapper}>
        <img src="/logo.svg" className={cls.logo} />
        <h2 className={cls.title}>Welcome to Soul.</h2>

        <form className={cls.form}>
          <input
            type="text"
            required
            placeholder="Enter your fullname"
            className={cls.input}
          />
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
          <button className={cls.button}>Sign Up</button>
        </form>

        <p className={cls.tip}>
          Have an account?{" "}
          <Link to={"/login"} className={cls.tip_link}>
            Log in
          </Link>
        </p>
      </div>
    </Modal>
  );
};
