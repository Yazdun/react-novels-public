import s from "./styles.module.scss";
import {
  Container,
  Button,
  RenderFormfields,
  RenderErrors,
  Text,
} from "../../elements/";
import { MdLogin } from "react-icons/md";
import { useAuthActions, useAuthContext } from "../../context";
import { useHistory, Redirect, Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { LoginFormfields } from "../../utils";
import { usePost } from "../../hooks";
import { LOGIN } from "../../services";
import { key__1 } from "../../assets";

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
            postRequest(LOGIN, data, handleToken)
          )}
        >
          <div className={s.img}>
            <img src={key__1} alt="yellow lock and key" />
          </div>

          <div>
            <RenderFormfields formfields={LoginFormfields} />
            {serverErrors && <RenderErrors errors={serverErrors} />}

            <Text center>
              don't have an account ?{" "}
              <span>
                <Link to="/join">Join us</Link>
              </span>
            </Text>
            <Button
              active
              disabled={postLoading}
              center
              icon={<MdLogin />}
              text="login"
            />
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};
