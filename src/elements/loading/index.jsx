import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Loading = ({ height, count, customclassname }) => {
  return (
    <SkeletonTheme baseColor="#DAE0E7" highlightColor="#F3F5F7">
      <Skeleton height={height} count={count} className={customclassname} />
    </SkeletonTheme>
  );
};
