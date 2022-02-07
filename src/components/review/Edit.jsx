import s from "./styles.module.scss";
import { MdOutlineEditNote } from "react-icons/md";
import { Button, Formfield, RenderErrors, Text } from "../../elements";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { ReviewFormfield, RateOptions } from "../../utils/";
import { useForm, FormProvider } from "react-hook-form";
import { usePatch } from "../../hooks";
import { useEffect, useState } from "react";
import { UPDATE_REVIEW } from "../../services";
import { useNoticesContext } from "../../context";

export const Edit = ({
  title,
  reviewText,
  reviewRate,
  reviewId,
  updateReview,
}) => {
  const methods = useForm();
  const { showAlert } = useNoticesContext();
  const { patchRequest, serverErrors, patchLoading } = usePatch();
  const [rate, setRate] = useState(reviewRate);

  useEffect(() => {
    methods.setValue("content", reviewText);
  }, []);

  const handleSuccess = (data) => {
    updateReview(data.review);
    showAlert(
      "review is edited",
      `You have successfully edited your review on ${title.toUpperCase()}. Your review will be inspected by administrators and you will be notified about your review's approval within the next few hours. `
    );
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          className={s.form}
          onSubmit={methods.handleSubmit((data) => {
            patchRequest(
              UPDATE_REVIEW(reviewId),
              { ...data, rate },
              handleSuccess
            );
          })}
        >
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
            contrast
            text="submit review"
            icon={<MdOutlineEditNote />}
            disabled={patchLoading}
          />
        </form>
      </FormProvider>
    </div>
  );
};
