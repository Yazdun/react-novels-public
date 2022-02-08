import { Container, Input } from "../../elements";
import s from "./styles.module.scss";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useGet } from "../../hooks";
import { SEARCH } from "../../services";
import { AuthorPreview, NovelCard } from "..";

export const SearchBar = () => {
  const [searchMode, setSearchMode] = useState(false);
  const [novels, setNovels] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const input = useRef(null);
  const { getRequest, getLoading } = useGet();

  const handleData = (data) => {
    setNovels(data.novelResults);
    setAuthors(data.authorResults);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setAuthors([]);
    setNovels([]);
  };

  useEffect(() => {
    input.current.focus();
  }, [searchMode]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getRequest(SEARCH(searchTerm), handleData);
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <>
      <button className={s.btn} onClick={() => setSearchMode(true)}>
        <FiSearch />
      </button>
      <div className={classNames(s.search, searchMode && s.show)}>
        <Container padding customclass={s.container}>
          <div className={s.field}>
            <input
              type="text"
              placeholder="type something ..."
              className={s.searchInput}
              ref={input}
              onChange={handleChange}
            />
            <button className={s.btn} onClick={() => setSearchMode(false)}>
              <VscChromeClose />
            </button>
          </div>
          {authors.map((author) => {
            return (
              <div className={s.author}>
                <AuthorPreview author={author} />
              </div>
            );
          })}

          {novels.map((novel) => {
            return (
              <div className={s.novel}>
                <NovelCard novel={novel} />
              </div>
            );
          })}
        </Container>
      </div>
    </>
  );
};
