import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading } from "../../elements";
import { useState } from "react";
import Moment from "react-moment";
import { BsStarFill } from "react-icons/bs";
import { usePatch } from "../../hooks";
import { useNoticesContext, useAuthContext } from "../../context";
import { STAR_AUTHOR } from "../../services";

export const AuthorInfo = ({ author }) => {
  const {
    name,
    birth,
    death,
    image,
    nationality,
    starsCount,
    _id: authorId,
  } = author;

  const [count, setStars] = useState(starsCount);
  const { patchRequest, patchLoading } = usePatch();
  const { showAlert } = useNoticesContext();

  const isLoggedIn = useAuthContext();

  const handleStar = (data) => setStars(data.starsCount);

  return (
    <div className={s.card}>
      <div className={s.header}>
        <img src={image} alt={name} className={s.image} />
        <button
          className={s.star}
          disabled={patchLoading}
          onClick={() => {
            isLoggedIn
              ? patchRequest(STAR_AUTHOR(authorId), {}, handleStar)
              : showAlert(
                  "authentication required",
                  `In order to leave a star for ${name.toUpperCase()}, you must first login to your account or join us as a new member `
                );
          }}
        >
          <BsStarFill />
          {count}
        </button>
      </div>
      <Heading uppercase small>
        {name}
      </Heading>

      <ul>
        <li>
          nationality <span>{nationality}</span>
        </li>
        <li>
          born{" "}
          <span>
            <Moment date={birth} format="D MMM YYYY" withTitle />
          </span>
        </li>
        {death && (
          <li>
            death{" "}
            <span>
              <Moment date={death} format="D MMM YYYY" withTitle />
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};
