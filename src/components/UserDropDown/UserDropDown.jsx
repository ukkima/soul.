import { useRef, useState } from "react";
import cls from "./userdropdown.module.scss";
import classNames from "classnames";
import { useClickOutside } from "../../hooks/useClickOutside";
import { User, LogOut } from "lucide-react";
import { $api } from "../../api";
import { Link } from "react-router";
import { UserAvatar } from "../UserAvatar/UserAvatar";

export const UserDropDown = ({ user, background }) => {
  const [isOpen, setIsOpen] = useState(false);
  const userDropDownRef = useRef(null);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(userDropDownRef, () => {
    setIsOpen(false);
  });

  const handleLogout = async () => {
    await $api.get("/auth/logout");

    window.location.href = "/";
  };

  return (
    <div className={cls.UserDropDown} ref={userDropDownRef}>
      <UserAvatar user={user} onClick={onClick} small={true} point={true} />
      <div className={classNames(cls.menu, isOpen && cls.active)}>
        <div className={cls.user_info}>
          <UserAvatar user={user} medium={true} />
          <div className={cls.user_text}>
            <p>{user.fullname}</p>
            <p>{user.username}</p>
          </div>
        </div>

        <Link
          to={"/profile/update"}
          state={{ background }}
          onClick={() => setIsOpen(false)}
          className={classNames(cls.button)}
        >
          <User />
          Account
        </Link>
        <button
          onClick={handleLogout}
          className={classNames(cls.button, cls.logout)}
        >
          <LogOut />
          Logout
        </button>
      </div>
    </div>
  );
};
