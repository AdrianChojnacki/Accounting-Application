import SkeletonTextCSS from "./SkeletonText.module.css";

const SkeletonText = ({ w100 }: { w100?: boolean }) => {
  return (
    <div
      className={`${SkeletonTextCSS.box} ${w100 ? SkeletonTextCSS.w100 : null}`}
    />
  );
};

export { SkeletonText };
