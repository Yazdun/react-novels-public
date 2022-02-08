import s from "./styles.module.scss";
import classnames from "classnames";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { placeholder } from "../../assets";
import { Link } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsMenuUp } from "react-icons/bs";
import { useAuthActions } from "../../context/";
import { useGet } from "../../hooks";
import { GET_USER_INFO } from "../../services";

export const UserPopup = () => {
  const ref = useRef();
  const { logOut } = useAuthActions();
  const { getRequest, getLoading } = useGet();
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [untouched, setUntouched] = useState(true);

  const handleProfile = (data) => setImage(data.user.image);

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

  useEffect(() => {
    getRequest(GET_USER_INFO, handleProfile);
  }, []);

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
            <img
              className={s.image}
              src={image ? image : placeholder}
              alt="user"
            />
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
