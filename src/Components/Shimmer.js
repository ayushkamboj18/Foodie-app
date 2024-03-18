import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";

const ShimmerGrid = () => {
  const shimmerBoxes = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className="shimmer-box">
      <ShimmerThumbnail height={50} rounded />
    </div>
  ));

  return <div className="shimmer-grid">{shimmerBoxes}</div>;
};

export default ShimmerGrid;
