import classNames from "classnames";
import s from "./styles.module.scss";

export const Status = ({ isApproved, isPending, isDisapproved }) => {
  return (
    <div
      className={classNames(
        s.status,
        isApproved && s.isApproved,
        isPending && s.isPending,
        isDisapproved && s.isDisapproved
      )}
    >
      <p>
        {isApproved && "approved"}
        {isDisapproved && "disapproved"}
        {isPending && "pending"}
      </p>
    </div>
  );
};
