import s from "./styles.module.scss";
import classNames from "classnames";
import { useNoticesContext } from "../../context/";
import { CgClose } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import { useEffect, useRef } from "react";

export const Alert = () => {
  const { alert, hideAlert } = useNoticesContext();
  const { show, title, content } = alert;
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        hideAlert();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);

  return (
    <div className={classNames(s.alert, show ? s.show : s.hide)} ref={ref}>
      <FaBell className={s.icon} />
      <p className={s.title}>{title}</p>

      <p className={s.content}>{content}</p>

      <CgClose
        className={s.close}
        onClick={() => {
          hideAlert();
        }}
      />
    </div>
  );
};
