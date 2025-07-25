import cls from "./profileupdatepage.module.scss";
import { Modal } from "../../components/Modal/Modal";
import { UserAvatar } from "../../components/UserAvatar/UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { $api } from "../../api";
import { authActions } from "../../store/slices/authSlice.js";
import { imageUpload } from "../../utils/imageUpload";
import {Button} from "../../components/Button/Button.jsx";

export const ProfileUpdatePage = () => {
  const [image, setImage] = useState();
  const { user } = useSelector((state) => state.auth);
  const [dateForm, setDateForm] = useState({
    avatar: user?.avatar.url,
    fullname: user?.fullname,
    username: user?.username,
  });

  const handleChange = (e) => {
    setDateForm({ ...dateForm, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const inputImage = e.target.files[0];

    setImage(inputImage);
  };

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    const imageData = await imageUpload(image);

    const data = {
      ...dateForm,
      avatar: imageData,
    };
    dispatch(authActions.setUser(data));

    const res = await $api.patch("/auth/update", data);
  };

  const onDelete = async () => {
    await $api.delete("/auth/delete");

    window.location.href = "/";
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
          <form onSubmit={onSubmit} className={cls.profile_content}>
            <input
              name="fullname"
              type="text"
              value={dateForm.fullname}
              onChange={handleChange}
              placeholder="Enter fullname"
              required
              className={cls.profile_content__input}
            />
            <input
              name="username"
              type="text"
              value={dateForm.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
              className={cls.profile_content__input}
            />

            <Button loading={true} typeStyle={"transparent"}>Update Account</Button>

            <button onClick={onDelete} className={cls.account_delete_btn}>
              <Trash2 />
              Delete Account
            </button>
          </form>
        </>
      )}
    </Modal>
  );
};
