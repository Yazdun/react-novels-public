import s from "./styles.module.scss";
import classnames from "classnames";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { placeholder } from "../../assets";
import { Link } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsMenuUp } from "react-icons/bs";
import { useAuthActions } from "../../context/";

export const UserPopup = () => {
  const ref = useRef();
  const { logOut } = useAuthActions();

  const [show, setShow] = useState(false);
  const [untouched, setUntouched] = useState(true);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);

  return (
    <div className={s.wrapper} ref={ref}>
      <button
        onClick={() => {
          setShow((prev) => !prev);
          setUntouched(false);
        }}
      >
        <HiOutlineViewGridAdd />
      </button>

      <div
        className={classnames(
          s.popup,
          untouched && s.untouched,
          show ? s.show : s.hide
        )}
      >
        <div className={s.card}>
          <div className={s.header} i>
            <img className={s.image} src={placeholder} alt="" />
          </div>
          <div className={s.actions}>
            <Link to="/dashboard/">
              <button className={s.btn} onClick={() => setShow(false)}>
                dashboard
                <BsMenuUp />
              </button>
            </Link>

            <button className={classnames(s.btn, s.logout)} onClick={logOut}>
              logout
              <AiOutlinePoweroff />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
