import { AuthorPreview, NovelCard } from "..";
import s from "./styles.module.scss";

export const SearchedAuthors = ({ authors }) => {
  return (
    <>
      {authors.map((author) => {
        return (
          <div className={s.author}>
            <AuthorPreview author={author} />
          </div>
        );
      })}
    </>
  );
};

export const SearchedNovels = ({ novels }) => {
  return (
    <>
      {novels.map((novel) => {
        return (
          <div className={s.novel}>
            <NovelCard novel={novel} />
          </div>
        );
      })}
    </>
  );
};
