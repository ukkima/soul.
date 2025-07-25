import cls from "./useravatar.module.scss";
import classNames from "classnames";

export const UserAvatar = ({
  user,
  onClick,
  big,
  medium,
  small,
  point,
  src,
}) => {
  const isEmpty = (obj) => {
    if (Object.keys(obj).length === 0) return false;
    return true;
  };

  return (
    <div
      onClick={onClick}
      className={classNames(
        cls.user_avatar,
        big && cls.big,
        medium && cls.medium,
        small && cls.small,
        point && cls.point,
      )}
    >
      {src ? (
        <img src={src} />
      ) : isEmpty(user.avatar) ? (
        <img src={user.avatar.url} alt="avatar" />
      ) : (
        user.fullname.slice(0, 1)
      )}
    </div>
  );
};
