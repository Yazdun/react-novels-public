export const ReviewFormfield = {
  multiline: true,
  name: "content",
  label: "review",
  type: "text",
  id: "review",
  placeholder: "e.g. some cool review",
  validation: {
    required: {
      value: true,
      message: "review cannot be empty !",
    },
    minLength: {
      value: 20,
      message: "min length is 20 chars",
    },
  },
};

export const RateOptions = [
  {
    title: "Awful",
    value: "1",
  },
  {
    title: "Meh",
    value: "2",
  },
  {
    title: "Good",
    value: "3",
  },
  {
    title: "Great",
    value: "4",
  },
  {
    title: "Masterpiece",
    value: "5",
  },
];
