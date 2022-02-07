import s from "./styles.module.scss";
import { useGet } from "../../hooks";
import { useEffect, useState } from "react";
import { GET_USER_STARS } from "../../services";
import { AuthorPreview, DashboardNoItem } from "..";
import { Heading, Loading, Spinner, Text } from "../../elements";
import { BsStarFill } from "react-icons/bs";

export const DashboardStars = () => {
  const [authors, setAuthors] = useState([]);
  const { getRequest, getLoading } = useGet();

  const handleAuthors = (data) => setAuthors(data.authors);

  useEffect(() => {
    getRequest(GET_USER_STARS, handleAuthors);
  }, []);

  if (getLoading) {
    return (
      <Heading small center uppercase>
        <Spinner small />
        loading ...
      </Heading>
    );
  }

  if (authors.length < 1) {
    return (
      <DashboardNoItem
        icon={<BsStarFill />}
        title="no stars"
        info="You can give your favourite authors a star, and then visit them on this tab"
      />
    );
  }
  return (
    <div className={s.wrapper}>
      {authors.map((author) => {
        return <AuthorPreview author={author} />;
      })}
    </div>
  );
};
