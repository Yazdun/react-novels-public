import s from "./styles.module.scss";
import classnames from "classnames";
import { DeleteModal, NovelCard, Rate, UserCard } from "..";
import { Button, RenderText } from "../../elements";
import { useState } from "react";
import { MdKeyboardBackspace, MdOutlineEditNote } from "react-icons/md";
import { DELETE_REVIEW } from "../../services";
import { Edit } from "./Edit";
import { Status } from "./Status";
import { RiArrowGoBackFill } from "react-icons/ri";

export const ReviewCard = ({ hasPanel, review }) => {
  const [info, setInfo] = useState(review);
  const [updateMode, setUpdateMode] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = () => setIsDeleted(true);
  const updateReview = (updated) => {
    setInfo(updated);
    setUpdateMode(false);
  };
  const { _id, novelRef, content, rate, isApproved, isDisapproved, isPending } =
    info;

  return (
    <div className={classnames(s.review, isDeleted && s.deleted)}>
      <div className={s.novel}>
        <NovelCard novel={novelRef} />
        <div>
          <Rate mini rate={rate} />
          {hasPanel && (
            <Status
              isApproved={isApproved}
              isDisapproved={isDisapproved}
              isPending={isPending}
            />
          )}
        </div>
      </div>

      <div className={s.body}>
        {updateMode ? (
          <Edit
            title={novelRef.title}
            updateReview={updateReview}
            reviewText={content}
            reviewRate={rate}
            reviewId={_id}
          />
        ) : (
          <RenderText content={content.split("\n")} />
        )}
      </div>
      {hasPanel && !updateMode && (
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
                active
                text="edit"
                icon={<MdOutlineEditNote />}
                onClick={() => setUpdateMode(true)}
                customclass={s.btn}
              />
              <button></button>
            </div>
          </div>
        </>
      )}
      {updateMode && (
        <button className={s.cancel} onClick={() => setUpdateMode(false)}>
          <RiArrowGoBackFill />
          cancel
        </button>
      )}
    </div>
  );
};
