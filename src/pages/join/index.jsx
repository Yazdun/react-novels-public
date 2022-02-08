import s from "./styles.module.scss";
import {
  Container,
  Button,
  RenderFormfields,
  RenderErrors,
  Text,
  Heading,
} from "../../elements/";
import { CgUserlane } from "react-icons/cg";
import { useAuthActions, useAuthContext } from "../../context";
import { useHistory, Redirect, Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { UserFormfields } from "../../utils";
import { usePost } from "../../hooks";
import { JOIN } from "../../services";
import { people__1 } from "../../assets";

export const Join = () => {
  const { setToken } = useAuthActions();
  const history = useHistory();
  const isLogged = useAuthContext();
  const methods = useForm();

  const handleToken = (data) => {
    setToken(data.token);
    history.push("/dashboard");
  };

  const { postRequest, serverErrors, postLoading } = usePost();

  return (
    <Container padding>
      {isLogged && <Redirect to="/dashboard" />}
      <FormProvider {...methods}>
        <form
          noValidate
          className={s.form}
          onSubmit={methods.handleSubmit((data) =>
            postRequest(JOIN, data, handleToken)
          )}
        >
          <div className={s.img}>
            <img src={people__1} alt="yellow lock and key" />
          </div>

          <div className={s.fields}>
            <Heading uppercase center customclass={s.heading}>
              join us !
            </Heading>
            <RenderFormfields formfields={UserFormfields} />
            {serverErrors && <RenderErrors errors={serverErrors} />}

            <Text center>
              already joined ?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </Text>
            <Button
              active
              disabled={postLoading}
              center
              text="sign me up"
              icon={<CgUserlane />}
            />
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};
