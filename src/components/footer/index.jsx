import React from "react";
import { Container } from "../../elements";
import s from "./styles.module.scss";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container padding customclass={s.footer}>
      <p>
        {year} ALL RIGHTS RESERVED © /{" "}
        <span>
          <a
            href="https://github.com/Yazdun/react-novels-public"
            target="_blank"
          >
            SOURCE CODE
          </a>{" "}
        </span>
      </p>
    </Container>
  );
};
