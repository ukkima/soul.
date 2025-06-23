import classNames from "classnames";
import cls from "./header.module.scss";

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.header__wrapper}>
          <div className={cls.logo}>Soul.</div>

          <nav className={cls.nav}>
            <ul className={cls.menu}>
              <li className={cls.menu__item}>
                <a href="#!" className={cls.menu__link}>
                  Blog
                </a>
              </li>
              <li className={cls.menu__item}>
                <a href="#!" className={cls.menu__link}>
                  About
                </a>
              </li>
            </ul>

            <div className={cls.nav_buttons}>
              <button className={classNames(cls.nav_btn, cls.login)}>
                Log In
              </button>
              <button className={classNames(cls.nav_btn, cls.signup)}>
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
