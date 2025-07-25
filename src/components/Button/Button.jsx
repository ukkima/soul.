import cls from "./button.module.scss";
import classNames from "classnames";
import { Spinner } from "../Spinner/Spinner.jsx";

const typeStyleClasses = {
  filled: cls.filled,
  transparent: cls.transparent,
};

export const Button = ({ children, typeStyle, loading, ...rest }) => {
  const classes = [typeStyle && typeStyleClasses[typeStyle]];

  const mods = {
    [cls.loading]: loading,
  };

  return (
    <button disabled={loading} className={classNames(cls.button, classes, mods)} {...rest}>
      {loading && <Spinner />}
      {children}
    </button>
  );
};
