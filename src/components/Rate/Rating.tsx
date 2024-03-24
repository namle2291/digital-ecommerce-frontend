import React from "react";
import { Rate } from "antd";

type RateType = {
  value?: number;
  fs?: number;
  disable?: boolean;
  color?: string;
};

const Rating = ({
  value = 0,
  fs,
  disable = true,
  color = "#f1b400",
}: RateType) => {
  return (
    <Rate value={value} style={{ fontSize: fs, color }} disabled={disable} />
  );
};

export default Rating;
