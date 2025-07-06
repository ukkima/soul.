import { useNavigate } from "react-router";
import { X } from "lucide-react";
import cls from "./modal.module.scss";

export const Modal = ({ children }) => {
  const navigate = useNavigate();

  const onCloseModal = () => {
    navigate(-1);
  };
  return (
    <div className={cls.modal} onClick={onCloseModal}>
      <div className={cls.modal_content} onClick={(e) => e.stopPropagation()}>
        <button className={cls.close_btn} onClick={onCloseModal}>
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};
