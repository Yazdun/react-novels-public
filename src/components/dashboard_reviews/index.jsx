import React, { useEffect, useState } from "react";
import { useGet } from "../../hooks";
import { GET_USER_REVIEWS } from "../../services";
import { ReviewCard } from "../review";

export const DashboardReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { getRequest, getLoading } = useGet();
  const handleReviews = (data) => setReviews(data.reviews);
  useEffect(() => {
    getRequest(GET_USER_REVIEWS, handleReviews);
  }, []);
  return (
    <div>
      {reviews.map((review) => {
        return <ReviewCard review={review} hasPanel />;
      })}
    </div>
  );
};
