import React from "react";

function SkeletonCard({ height = "52" }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-xl h-${height} w-full`}></div>
  );
}

export default SkeletonCard;