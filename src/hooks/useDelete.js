import { useState } from "react";
import axios from "axios";
import "../axios";
import { useErrorStatus } from "../context";

export const useDelete = (url, success_function) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { errorHandler, serverErrors } = useErrorStatus();

  const deleteRequest = async () => {
    setDeleteLoading(true);
    errorHandler(undefined, undefined);

    try {
      await axios
        .delete(url)
        .then((res) => success_function(res.data))
        .then(() => setDeleteLoading(false));
    } catch (error) {
      if (!error.response) {
        errorHandler("NETWORK", null);
        setDeleteLoading(false);
      } else {
        errorHandler(error.response.status, error.response.data.msg.split(","));
        console.log(error);
        setDeleteLoading(false);
      }
    }
  };

  return { deleteRequest, serverErrors, deleteLoading };
};
