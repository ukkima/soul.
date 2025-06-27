import classNames from "classnames";
import cls from "./header.module.scss";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const checkScrollPostion = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPostion);

    return () => {
      window.removeEventListener("scroll", checkScrollPostion);
    };
  }, []);

  return (
    <header className={classNames(cls.header, scrolled && cls.active)}>
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
              <button
                className={classNames(
                  cls.nav_btn,
                  cls.login,
                  scrolled && cls.active
                )}
              >
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
