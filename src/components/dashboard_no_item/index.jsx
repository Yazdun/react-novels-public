import s from "./styles.module.scss";
import { Heading, Text } from "../../elements";

export const DashboardNoItem = ({ icon, title, info }) => {
  return (
    <div className={s.noItem}>
      {icon}
      <Heading uppercase center customclass={s.heading}>
        {title}
      </Heading>
      <div className={s.text}>
        <Text>{info}</Text>
      </div>
    </div>
  );
};
