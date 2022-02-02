import classNames from "classnames";
import { useState } from "react";
import { Button } from "../../ui";
import s from "./styles.module.scss";
import { GrClose } from "react-icons/gr";

export const Modal = ({
  children,
  contrast,
  danger,
  active,
  success,
  text,
  icon,
  center,
  loading,
}) => {
  const [states, setStates] = useState({
    notTouched: true,
    show: false,
    hide: false,
  });

  const hideModal = () => setStates({ ...states, hide: true, show: false });
  const showModal = () =>
    setStates({ notTouched: false, hide: false, show: true });

  const { notTouched, show, hide } = states;
  return (
    <div>
      <Button
        contrast={contrast}
        danger={danger}
        active={active}
        success={success}
        text={text}
        icon={icon}
        onClick={showModal}
        center={center}
        disabled={loading}
      />

      <div
        className={classNames(
          s.background,
          notTouched && s.noneDisplay,
          show ? s.showBackground : s.hideBackground
        )}
        onClick={() => hideModal()}
      ></div>
      <div
        className={classNames(
          s.modal,
          notTouched && s.noneDisplay,
          show ? s.showModal : s.hideModal
        )}
      >
        <GrClose className={s.close} onClick={() => hideModal()} />
        <div className={s.children}>{children}</div>
      </div>
    </div>
  );
};
