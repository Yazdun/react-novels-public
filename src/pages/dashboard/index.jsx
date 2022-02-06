import s from "./styles.module.scss";
import classnames from "classnames";
import { Container } from "../../elements";
import { DashboardHeader } from "../../components";
import { Link, Route, Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import {
  DashboardLikes,
  DashboardReviews,
  DashboardStars,
} from "../../components";
import { PrivateRoute } from "../../routes";

export const Dashboard = () => {
  const { url, path } = useRouteMatch();

  return (
    <Container padding>
      <DashboardHeader />
      <Link to={`${path}/likes`}>likes</Link> /
      <Link to={`${path}/reviews`}>reviews</Link> /
      <Link to={`${path}/stars`}>stars</Link> /
      <PrivateRoute component={DashboardLikes} path={`${path}/likes`} />
      <PrivateRoute component={DashboardReviews} path={`${path}/reviews`} />
      <PrivateRoute component={DashboardStars} path={`${path}/stars`} />
    </Container>
  );
};
