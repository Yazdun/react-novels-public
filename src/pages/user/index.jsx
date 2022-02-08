import s from "./styles.module.scss";
import { AiOutlineUser, AiOutlineFieldTime } from "react-icons/ai";
import { Container, Spinner } from "../../elements";
import { useEffect, useState } from "react";
import { placeholder } from "../../assets";
import { useGet } from "../../hooks";
import { useParams } from "react-router-dom";
import { GET_USER_DATA } from "../../services";
import ReactTimeAgo from "react-time-ago";
import { DashboardNoItem, ReviewCard } from "../../components";
import { FaFeather } from "react-icons/fa";

export const User = () => {
  const [user, setUser] = useState({
    image: "",
    username: "",
    createdAt: 2000,
  });
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const handleData = (data) => {
    setUser(data.user);
    setReviews(data.reviews);
  };

  const { getRequest, getLoading } = useGet();

  useEffect(() => {
    getRequest(GET_USER_DATA(id), handleData);
  }, [id]);

  if (getLoading) {
    return <Spinner center />;
  }
  return (
    <Container customclass={s.wrapper}>
      <div className={s.user}>
        <img
          src={user.image ? user.image : placeholder}
          alt={user.username}
          className={s.image}
        />

        <ul>
          <li>
            <AiOutlineUser />
            {user.username}
          </li>
          <li>
            <AiOutlineFieldTime />
            Joined
            <span>
              <ReactTimeAgo date={user.createdAt} locale="en-US" />
            </span>
          </li>
        </ul>
      </div>
      <div className={s.reviews}>
        {reviews.length < 1 ? (
          <DashboardNoItem
            icon={<FaFeather />}
            title="no reviews"
            info="This user has not submitted any reviews yet"
          />
        ) : (
          <RenderReviews reviews={reviews} />
        )}
      </div>
    </Container>
  );
};

const RenderReviews = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </>
  );
};
