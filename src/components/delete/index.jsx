import s from "./styles.module.scss";
import { Modal, Button, Text, Heading } from "../../elements";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { useDelete } from "../../hooks";
import { useHistory } from "react-router-dom";
import { useNoticesContext } from "../../context";

export const DeleteModal = ({
  item,
  question,
  requestUrl,
  loading,
  redirect,
  deleteFunc,
}) => {
  const { showAlert } = useNoticesContext();

  const afterDelete = () => {
    deleteFunc();
    showAlert(
      `review has been deleted`,
      `Your review on ${item.toUpperCase()} has been successfully deleted`
    );
  };

  const { deleteRequest, deleteLoading } = useDelete(requestUrl, afterDelete);
  return (
    <Modal danger icon={<BiTrashAlt />} text="delete" loading={loading}>
      <div className={s.wrap}>
        <Heading bold medium>
          {question}
        </Heading>
        <Button
          danger
          center
          text="yes, procceed"
          icon={<BiTrashAlt />}
          onClick={deleteRequest}
          disabled={deleteLoading}
          customClass={s.btn}
        />
      </div>
    </Modal>
  );
};
