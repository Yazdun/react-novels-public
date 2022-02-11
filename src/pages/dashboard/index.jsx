import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Spinner } from "../../elements";
import { DashboardHeader, DashboardWidgets } from "../../components";
import { Link, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import {
  DashboardLikes,
  DashboardReviews,
  DashboardStars,
} from "../../components";
import { useGet } from "../../hooks";
import { useEffect, useState } from "react";
import { GET_USER_INFO } from "../../services";
import { useLocation } from "react-router-dom";
import { links } from "./links";

export const Dashboard = () => {
  const { path } = useRouteMatch();
  const location = useLocation();

  const { getRequest, getLoading } = useGet();
  const [user, setUser] = useState({ username: "", email: "", image: "" });
  const handleUser = (data) => setUser(data.user);
  useEffect(() => {
    getRequest(GET_USER_INFO, handleUser);
  }, []);

  if (getLoading) {
    return <Spinner center />;
  }

  return (
    <Container customclass={s.wrapper}>
      <DashboardHeader user={user} />
      <div className={s.links}>
        {links.map((link) => {
          const { title, icon, url, to } = link;
          return (
            <Link
              className={classnames(
                s.link,
                location.pathname === url && s.active
              )}
              to={`${path}/${to}`}
            >
              <div className={s.icon}>{icon}</div>
              <p className={s.title}>{title}</p>
            </Link>
          );
        })}
      </div>
      <Route component={DashboardWidgets} path={`${path}/`} exact />
      <Route component={DashboardLikes} path={`${path}/likes`} />
      <Route component={DashboardReviews} path={`${path}/reviews`} />
      <Route component={DashboardStars} path={`${path}/stars`} />
    </Container>
  );
};
