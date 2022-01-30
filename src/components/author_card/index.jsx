import s from "./styles.module.scss";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";
import { placeholder } from "../../assets";

export const AuthorCard = ({ author, transparent }) => {
  const [info, setInfo] = useState(
    author || { url: "/", image: null, name: "john doe" }
  );
  return (
    <Link
      to={`/author/${info._id}`}
      className={classnames(s.author, transparent && s.transparent)}
    >
      <img className={s.image} src={info.image} alt={placeholder} />
      <p>{info.name}</p>
    </Link>
  );
};
