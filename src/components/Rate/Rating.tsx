import React from "react";
import { Rate } from "antd";

type RateType = {
  value?: number;
  fs?: number;
  disable?: boolean;
};

const Rating = ({ value = 0, fs, disable = true }: RateType) => {
  return <Rate value={value} style={{ fontSize: fs }} disabled={disable} />;
};

export default Rating;
