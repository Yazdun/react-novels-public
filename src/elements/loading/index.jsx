import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const Loading = ({ height, count, customclassname }) => {
  return (
    <SkeletonTheme baseColor="#e9ecef" highlightColor="#f8f9fa">
      <Skeleton
        height={height}
        count={count}
        className={customclassname && customclassname}
      />
    </SkeletonTheme>
  );
};
