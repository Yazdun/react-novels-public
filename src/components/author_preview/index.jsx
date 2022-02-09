import s from "./styles.module.scss";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";
import { placeholder } from "../../assets";
import { BsStarFill } from "react-icons/bs";

export const AuthorPreview = ({ author, transparent, spaceBetween }) => {
  const [info, setInfo] = useState(
    author || { url: "/", image: null, name: "john doe" }
  );
  return (
    <Link
      to={`/author/${info._id}`}
      className={classnames(
        s.author,
        transparent && s.transparent,
        spaceBetween && s.spaceBetween
      )}
    >
      <img className={s.image} src={info.image} alt={placeholder} />
      <div className={s.info}>
        <p className={s.name}>{info.name}</p>
        <div className={s.star}>
          <BsStarFill />
          <p>{info.stars.length}</p>
        </div>
      </div>
    </Link>
  );
};
