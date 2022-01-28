import s from "./styles.module.scss";
import {
  Container,
  Button,
  RenderFormfields,
  RenderErrors,
} from "../../elements/";
import { MdLogin } from "react-icons/md";
import { useAuthActions, useAuthContext } from "../../context";
import { useHistory, Redirect } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { LoginFormfields } from "../../utils";
import { usePost } from "../../hooks";

export const Login = () => {
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
          className={s.form}
          onSubmit={methods.handleSubmit((data) =>
            postRequest("/public/authentication/login", data, handleToken)
          )}
        >
          <RenderFormfields formfields={LoginFormfields} />
          {serverErrors && <RenderErrors errors={serverErrors} />}
          <Button active disabled={postLoading} center>
            <MdLogin /> login{" "}
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
