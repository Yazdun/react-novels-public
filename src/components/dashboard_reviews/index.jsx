import React, { useEffect, useState } from "react";
import { Heading, Spinner } from "../../elements";
import { useGet } from "../../hooks";
import { GET_USER_REVIEWS } from "../../services";
import { ReviewCard } from "../review";
import { FaFeather } from "react-icons/fa";
import { DashboardNoItem } from "..";

export const DashboardReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { getRequest, getLoading } = useGet();
  const handleReviews = (data) => setReviews(data.reviews);
  useEffect(() => {
    getRequest(GET_USER_REVIEWS, handleReviews);
  }, []);
  if (getLoading) {
    return (
      <Heading small center uppercase>
        <Spinner small />
        loading ...
      </Heading>
    );
  }
  if (reviews.length < 1) {
    return (
      <DashboardNoItem
        icon={<FaFeather />}
        title="no reviews"
        info="You can write reviews for your favourite novels, and then visit them on this tab"
      />
    );
  }
  return (
    <div>
      {reviews.map((review) => {
        return <ReviewCard review={review} hasPanel />;
      })}
    </div>
  );
};
