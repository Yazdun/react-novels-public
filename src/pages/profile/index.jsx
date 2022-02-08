import s from "./styles.module.scss";
import classnames from "classnames";
import {
  Button,
  Container,
  RenderErrors,
  RenderFormfields,
  Spinner,
} from "../../elements";
import { useForm, FormProvider } from "react-hook-form";
import { ProfileFormfields } from "../../utils";
import { useGet, usePatch } from "../../hooks";
import { useEffect, useState } from "react";
import { EDIT_USER, GET_USER_INFO } from "../../services";
import { placeholder } from "../../assets";
import { ImageUploader } from "../../components";
import { FaCheck } from "react-icons/fa";
import { useAuthActions } from "../../context";
import { useHistory } from "react-router-dom";

export const Profile = () => {
  const methods = useForm();
  const [image, setImage] = useState(null);
  const { patchRequest, serverErrors, patchLoading } = usePatch();
  const { getRequest, getLoading } = useGet();
  const { setToken } = useAuthActions();
  const history = useHistory();

  const handleUser = (data) => {
    const { username, email, image: profilePic } = data.user;
    methods.setValue("email", email);
    methods.setValue("username", username);
    setImage(profilePic);
  };

  const handleEdit = (data) => {
    setToken(data.token);
    window.location.href = "/dashboard";
  };

  useEffect(() => {
    getRequest(GET_USER_INFO, handleUser);
  }, []);

  if (getLoading) {
    return <Spinner center />;
  }

  return (
    <Container padding>
      <FormProvider {...methods}>
        <form
          noValidate
          className={s.form}
          onSubmit={methods.handleSubmit((data) => {
            patchRequest(
              EDIT_USER,
              { ...data, image: image ? image : null },
              handleEdit
            );
          })}
        >
          <div className={s.imageHolder}>
            <img
              src={image ? image : placeholder}
              alt="user"
              className={s.image}
            />
          </div>

          <ImageUploader image={image} setImage={setImage} />
          <RenderFormfields formfields={ProfileFormfields} />
          {serverErrors && <RenderErrors errors={serverErrors} />}
          <Button
            active
            center
            icon={<FaCheck />}
            text="submit info"
            disabled={patchLoading}
          />
        </form>
      </FormProvider>
    </Container>
  );
};
