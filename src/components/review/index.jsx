import s from "./styles.module.scss";
import classnames from "classnames";
import { DeleteModal, NovelCard, Rate, UserCard } from "..";
import { Button, RenderText } from "../../elements";
import { useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { DELETE_REVIEW } from "../../services";

export const ReviewCard = ({ hasPanel, review }) => {
  const [info, setInfo] = useState(review);
  const [updateMode, setUpdateMode] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = () => setIsDeleted(true);
  const { _id, novelRef, content, rate, isApproved, isDisapproved, isPending } =
    info;
  return (
    <div className={classnames(s.review, isDeleted && s.deleted)}>
      <div className={s.novel}>
        <NovelCard novel={novelRef} />
        <Rate mini rate={rate} />
      </div>
      <div className={s.body}>
        <RenderText content={content.split("\n")} />
      </div>
      {hasPanel && (
        <>
          <hr className="hr" />
          <div className={s.panel}>
            <div className={s.actions}>
              <DeleteModal
                item={novelRef.title}
                question="Delete This Review ?"
                redirect="/dashboard"
                requestUrl={DELETE_REVIEW(_id)}
                deleteFunc={handleDelete}
              />
              <Button
                success
                text="edit"
                icon={<MdOutlineEditNote />}
                onClick={() => setUpdateMode(true)}
                customclass={s.btn}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
