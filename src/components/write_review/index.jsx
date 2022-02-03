import s from "./styles.module.scss";
// import classnames from "classnames";
import { useAuthContext, useNoticesContext } from "../../context";
import { Button, Formfield, RenderErrors, Text } from "../../elements";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { ReviewFormfield, RateOptions } from "../../utils/";
import { useForm, FormProvider } from "react-hook-form";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { RiMailSendLine } from "react-icons/ri";
import { usePost } from "../../hooks";
import { CREATE_REVIEW } from "../../services";
import { useState } from "react/cjs/react.development";

export const WriteReview = ({ novelId, novelTitle }) => {
  const isLoggedIn = useAuthContext();
  const methods = useForm();
  const { showAlert } = useNoticesContext();
  const { postRequest, serverErrors, postLoading } = usePost();
  const [rate, setRate] = useState(3);
  const handleSuccess = () => {
    methods.reset();
    setRate(3);
    showAlert(
      "review is submitted",
      `You have successfully submitted a review on ${novelTitle.toUpperCase()}. Your review will be inspected by administrators and you will be notified about your review's approval within the next few hours. `
    );
  };

  if (isLoggedIn) {
    return (
      <FormProvider {...methods}>
        <form
          className={s.form}
          onSubmit={methods.handleSubmit((data) => {
            postRequest(
              CREATE_REVIEW(novelId),
              { ...data, rate },
              handleSuccess
            );
          })}
        >
          <Text bold>Submit your review 👇</Text>
          <Formfield {...ReviewFormfield} customclass={s.formfield} />
          <RadioGroup
            value={`${rate}`}
            className={s.options}
            onChange={(value) => setRate(value)}
          >
            {RateOptions.map((option) => {
              return (
                <RadioButton
                  iconSize={20}
                  iconInnerSize={10}
                  value={option.value}
                  pointColor="#14213d"
                  rootColor="#ced4da"
                >
                  {option.title}
                </RadioButton>
              );
            })}
          </RadioGroup>
          {serverErrors && <RenderErrors errors={serverErrors} />}
          <Button
            active
            disabled={postLoading}
            center
            icon={<RiMailSendLine />}
            text="submit my review"
          />
        </form>
      </FormProvider>
    );
  }
  return (
    <div className={s.noAuth}>
      <AiFillLock />
      <Text>
        In order to write a review, you must first
        <Link to="/login">Login</Link>or<Link to="/join">Sign Up</Link>
      </Text>
    </div>
  );
};
