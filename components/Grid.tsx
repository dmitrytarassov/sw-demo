"use client";

import React, { ReactNode } from "react";

type GridProps = {
  rows: number;
  children: ReactNode;
};

const Grid: React.FC<GridProps> = ({ rows, children }) => {
  return <div className={`grid grid-cols-${rows} gap-4`}>{children}</div>;
};

export default Grid;
