import { useState, useEffect, useCallback } from "react";
import { withAuth } from "../../hoc/withAuth";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";
import cookie from "nookies";
import axios from "../../store/axios-instance";
import User from "../../components/Profile/Profile";

const Profile = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState();
  const [preview, setPreview] = useState();

  const user = useSelector((state) => state.auth.user);

  const onChangeAvatar = useCallback(
    (avatar) => dispatch(actions.changeAvatar(avatar)),
    [dispatch]
  ); //Change Avatar

  useEffect(() => {
    if (!selectedImage) {
      setPreview(user.avatar);
      return;
    }
    const imageUrl = URL.createObjectURL(selectedImage);
    setPreview(imageUrl);

    return () => URL.revokeObjectURL(imageUrl);
  }, [selectedImage]);

  const imageSelectHandler = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedImage(user.avatar);
      return;
    }
    setSelectedImage(event.target.files[0]);
    onChangeAvatar(event.target.files[0]);
  };

  return <User image={preview} imageHandler={imageSelectHandler} />;
};

Profile.getInitialProps = async (ctx) => {
  try{
    const { access_token } = cookie.get(ctx);
    const headerCfg = { headers: { Authorization: `Bearer ${access_token}` } };
    let res = await axios.get(`/user`, headerCfg);
    ctx.store.dispatch(actions.getUserSuccess(res.data));
  } catch (err) {
    console.log("[user] => ", err.response)
  }
};

export default withAuth(Profile);
