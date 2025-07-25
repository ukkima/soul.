import classNames from "classnames";
import cls from "./header.module.scss";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ModalRouterContext } from "../../contexts/ModalRouterContext";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AuthButtons } from "../AuthButtons/AuthButtons";
import { UserDropDown } from "../UserDropDown/UserDropDown";
import { getAuthUser, getAuthLoading } from "../../store/selectors/index.js";
import { SkeletonCustom } from "../Skeleton/Skeleton.jsx";

export const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [background, setBackground] = useContext(ModalRouterContext);
  const { t } = useTranslation();
  const user = useSelector(getAuthUser);
  const loading = useSelector(getAuthLoading);

  // TODO learn render live component and location, if, []
  useEffect(() => {
    if (!location.state?.background) {
      setBackground(location);
    }
  }, [location]);

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
          <Link to={"/"} className={cls.logo}>
            Soul.
          </Link>

          <nav className={cls.nav}>
            <ul className={cls.menu}>
              <li className={cls.menu__item}>
                <Link to={"/#blog"} className={cls.menu__link}>
                  {t("header.blog")}
                </Link>
              </li>
              <li className={cls.menu__item}>
                <Link to={"/about"} className={cls.menu__link}>
                  {t("header.about")}
                </Link>
              </li>
            </ul>

            {loading ? (
              <SkeletonCustom isCircle={true} height={40} width={40}/>
            ) : user ? (
              <UserDropDown user={user} background={background} />
            ) : (
              <AuthButtons background={background} scrolled={scrolled} />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
