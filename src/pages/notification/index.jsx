import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, Spinner, Text } from "../../elements";
import { useEffect, useState } from "react";
import { useGet } from "../../hooks";
import { GET_ALL_NOTIFS } from "../../services";
import { Link } from "react-router-dom";
import { useNoticesContext } from "../../context";
import { MdNearbyError } from "react-icons/md";
import { BsCheckAll } from "react-icons/bs";
import { man__1 } from "../../assets";

export const Notification = () => {
  const { getRequest, getLoading } = useGet();
  const [notifications, setNotifications] = useState([]);

  const { seenNotif } = useNoticesContext();

  const handleNotifs = (data) => {
    seenNotif();
    setNotifications(data.notifications);
  };

  useEffect(() => {
    getRequest(GET_ALL_NOTIFS, handleNotifs);
  }, []);

  if (getLoading) {
    return <Spinner center />;
  }

  if (notifications.length < 1) {
    return (
      <Container padding customclass={s.wrapper}>
        <img
          src={man__1}
          className={s.illustration}
          alt="a man holding his phone and looking at you !"
        />
        <Heading medium center uppercase>
          no notifications !
        </Heading>
      </Container>
    );
  }
  return (
    <Container padding>
      {notifications.map((notif) => {
        const { novelRef: novel, type, isSeen } = notif;

        return (
          <div className={classnames(s.card, !isSeen && s.unseen)}>
            <img src={novel.image} alt={novel.title} className={s.image} />
            <div className={s.typography}>
              <Text customclass={s.text}>
                Your review on{" "}
                <span>
                  <Link to={`/novel/${novel._id}`}>{novel.title}</Link>
                </span>{" "}
                has been {type === "success" ? "approved ." : "disapproved !"}
              </Text>
              {type === "fail" && (
                <>
                  <hr className="hr" />

                  <Text customclass={s.text}>
                    You can try editing this review from your{" "}
                    <span>
                      <Link to={`/dashboard/reviews`}>dashboard</Link>
                    </span>{" "}
                    and it will be inspected again shortly.
                  </Text>
                </>
              )}
            </div>
            {type === "success" ? (
              <BsCheckAll className={classnames(s.icon, s.success)} />
            ) : (
              <MdNearbyError className={classnames(s.icon, s.fail)} />
            )}
          </div>
        );
      })}
    </Container>
  );
};
