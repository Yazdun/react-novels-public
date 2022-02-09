import { AuthorPreview, NovelCard } from "..";
import s from "./styles.module.scss";

export const SearchedAuthors = ({ authors }) => {
  return (
    <>
      {authors.map((author, index) => {
        return (
          <div className={s.author} key={index}>
            <AuthorPreview author={author} spaceBetween />
          </div>
        );
      })}
    </>
  );
};

export const SearchedNovels = ({ novels }) => {
  return (
    <>
      {novels.map((novel, index) => {
        return (
          <div className={s.novel} key={index}>
            <NovelCard novel={novel} spaceBetween />
          </div>
        );
      })}
    </>
  );
};
