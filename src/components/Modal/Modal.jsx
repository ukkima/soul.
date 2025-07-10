import { useNavigate } from "react-router";
import { X } from "lucide-react";
import cls from "./modal.module.scss";
import { useContext } from "react";
import { ModalRouterContext } from "../../contexts/ModalRouterContext";

export const Modal = ({ children }) => {
  const navigate = useNavigate();
  const [background] = useContext(ModalRouterContext);

  const onCloseModal = () => {
    navigate(background.pathname);
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
