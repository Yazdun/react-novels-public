import s from "./styles.module.scss";
import axios from "axios";
import { useState } from "react";
import { RenderErrors, Spinner } from "../../elements";
import { checkInput } from "./validation";

export const ImageUploader = ({ setImage, image }) => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const unintercepted_instance = axios.create();

  const handleUpload = (input) => {
    const formData = new FormData();
    formData.append("file", input);
    formData.append("upload_preset", "r77bfg6g");
    setErr(false);
    setLoading(true);

    try {
      unintercepted_instance
        .post(
          `https://api.cloudinary.com/v1_1/dorbhejqh/image/upload`,
          formData
        )
        .then((res) => {
          setImage(res.data.url);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErr("something went wrong ! image was not uploaded");
    }
  };

  if (loading) {
    return (
      <div className={s.loading}>
        <Spinner dark />
      </div>
    );
  }

  return (
    <div className={s.wrapper}>
      <input
        type="file"
        id="file"
        className={s.file}
        onChange={(e) => {
          setImage("");
          checkInput(e.target.files[0])
            ? handleUpload(e.target.files[0])
            : setErr(["This file is not valid"]);
        }}
      />
      <label htmlFor="file">
        Choose an image
        {image && (
          <img className={s.image} alt="Selected preveiw" src={image} />
        )}
      </label>
      {err && <RenderErrors errors={err} />}
    </div>
  );
};
