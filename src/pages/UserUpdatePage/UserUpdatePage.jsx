import cls from "./userupdatepage.module.scss";
import { Modal } from "../../components/Modal/Modal";
import { UserAvatar } from "../../components/UserAvatar/UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/Button/Button.jsx";
import { updateAuthUser } from "../../store/thunks/updateAuthUser.js";
import { getAuthLoading } from "../../store/selectors/index.js";
import { deleteAuthUser } from "../../store/thunks/deleteAuthUser.js";

export const UserUpdatePage = () => {
  const [image, setImage] = useState();
  const { user } = useSelector((state) => state.auth);
  const [dateForm, setDateForm] = useState({
    avatar: user?.avatar.url,
    fullname: user?.fullname,
    username: user?.username,
  });
  const loading = useSelector(getAuthLoading);
  const dispatch = useDispatch();

  const handleValue = (e) => {
    setDateForm({ ...dateForm, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const inputImage = e.target.files[0];

    setImage(inputImage);
  };

  const onSubmitUpdate = async (e) => {
    e.preventDefault();

    const data = {
      ...dateForm,
      avatar: image,
    };

    dispatch(updateAuthUser(data));
  };

  const onClickDelete = async (e) => {
    e.preventDefault();

    const res = await dispatch(deleteAuthUser());

    if (deleteAuthUser.fulfilled.match(res)) {
      window.location.href = "/";
    }
  };

  return (
    <Modal customClass={cls.wrapper}>
      {user && (
        <>
          <div className={cls.update_avatar}>
            <UserAvatar
              src={
                image
                  ? URL.createObjectURL(image)
                  : dateForm.avatar
                    ? dateForm.avatar
                    : ""
              }
              user={user}
              big={true}
            />
            <label className={cls.avatar_change_btn}>
              Change Avatar
              <input onChange={handleImage} type="file" />
            </label>
          </div>
          <form onSubmit={onSubmitUpdate} className={cls.profile_content}>
            <input
              name="fullname"
              type="text"
              value={dateForm.fullname}
              onChange={handleValue}
              placeholder="Enter fullname"
              required
              className={cls.profile_content__input}
            />
            <input
              name="username"
              type="text"
              value={dateForm.username}
              onChange={handleValue}
              placeholder="Enter username"
              required
              className={cls.profile_content__input}
            />

            <Button type={"submit"} loading={loading} typeStyle={"transparent"}>
              Update Account
            </Button>

            <button type={"button"} onClick={onClickDelete} className={cls.account_delete_btn}>
              <Trash2 />
              Delete Account
            </button>
          </form>
        </>
      )}
    </Modal>
  );
};
