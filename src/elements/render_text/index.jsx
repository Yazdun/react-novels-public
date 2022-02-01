import React, { useState } from "react";
import { Container, Text } from "..";
import s from "./styles.module.scss";

export const RenderText = ({ content }) => {
  const [readmore, setReadmore] = useState(false);

  if (readmore) {
    return (
      <>
        {content.map((paragraph, index) => {
          return (
            <Text customclass={s.text} key={index}>
              {paragraph}
            </Text>
          );
        })}
        <button className={s.btn} onClick={() => setReadmore(false)}>
          ... Read less
        </button>
      </>
    );
  }

  return (
    <>
      <Text customclass={s.text}>{content[0]}</Text>
      <button className={s.btn} onClick={() => setReadmore(true)}>
        Read more ...
      </button>
    </>
  );
};
