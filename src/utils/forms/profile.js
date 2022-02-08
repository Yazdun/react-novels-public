export const ProfileFormfields = [
  {
    name: "username",
    label: "username",
    type: "text",
    id: "username",
    placeholder: "e.g. admin",
    validation: {
      required: {
        value: true,
        message: "username is required",
      },
      pattern: {
        value: /^[a-zA-Z0-9_.-]*$/,
        message: "cannot contain symbols and space",
      },
    },
  },
  {
    name: "email",
    label: "email",
    type: "email",
    id: "email",
    placeholder: "user@gmail.com",
    validation: {
      required: {
        value: true,
        message: "email is required",
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "not a valid email",
      },
    },
  },
];
