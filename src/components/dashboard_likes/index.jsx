import React, { useEffect, useState } from "react";
import { GET_USER_LIKES } from "../../services";
import { useGet } from "../../hooks";
import {
  DashboardNoItem,
  NovelCard,
  RenderNovelCards,
  RenderNovelPreviews,
} from "..";
import { BsHeartFill } from "react-icons/bs";
import { Heading, Spinner } from "../../elements";
import s from "./styles.module.scss";

export const DashboardLikes = () => {
  const [novels, setNovels] = useState([]);
  const { getRequest, getLoading } = useGet();

  const handleAuthors = (data) => setNovels(data.novels);

  useEffect(() => {
    getRequest(GET_USER_LIKES, handleAuthors);
  }, []);

  if (getLoading) {
    return (
      <Heading small center uppercase>
        <Spinner small />
        loading ...
      </Heading>
    );
  }

  if (novels.length < 1) {
    return (
      <DashboardNoItem
        icon={<BsHeartFill />}
        title="no likes"
        info="You can like your favourite novels, and then visit them on this tab"
      />
    );
  }

  return (
    <div className={s.wrapper}>
      <RenderNovelCards novels={novels} noPadding />
    </div>
  );
};
