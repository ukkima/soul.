import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SkeletonCustom = ({ isCircle, width, height }) => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton circle={isCircle} width={width} height={height} />
    </SkeletonTheme>
  );
};
