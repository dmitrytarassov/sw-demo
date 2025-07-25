"use client";

import React from "react";

import { VerticalListProps } from "@/components/ui/interfaces/VerticalListProps";

const VerticalList: React.FC<VerticalListProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 items-start justify-start">
      {children}
    </div>
  );
};

export default VerticalList;
