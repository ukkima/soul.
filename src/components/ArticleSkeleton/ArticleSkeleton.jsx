import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import cls from "./articleskeleton.module.scss";

export const ArticleSkeleton = () => {
  return (
    <div className={cls.skeleton}>
      <Skeleton width={300} baseColor="#202020" highlightColor="#444" />
      <Skeleton
        width={900}
        height={400}
        baseColor="#202020"
        highlightColor="#444"
      />
      <Skeleton width={900} baseColor="#202020" highlightColor="#444" />
      <Skeleton width={900} baseColor="#202020" highlightColor="#444" />
      <Skeleton width={900} baseColor="#202020" highlightColor="#444" />
      <Skeleton width={900} baseColor="#202020" highlightColor="#444" />
      <Skeleton width={900} baseColor="#202020" highlightColor="#444" />
      <Skeleton width={900} baseColor="#202020" highlightColor="#444" />
      <Skeleton width={900} baseColor="#202020" highlightColor="#444" />
      <Skeleton width={900} baseColor="#202020" highlightColor="#444" />
    </div>
  );
};
