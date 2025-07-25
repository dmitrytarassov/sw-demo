"use client";

import React from "react";

import { LayoutProps } from "@/components/ui/interfaces/LayoutProps";

const Layout: React.FC<LayoutProps> = ({ slots }) => {
  return (
    <div className="w-full grid h-full grid-cols-1 sm:grid-cols-6 gap-4 max-h-full">
      <div className="md:col-span-2 sm:col-span-3 col-span-1 order-2 sm:order-1 gap-4 max-h-full overflow-y-auto">
        {slots.list}
      </div>
      {slots.info && (
        <div className="md:col-span-4 sm:col-span-3 col-span-1 order-1 sm:order-2 max-h-full overflow-y-auto">
          <div className="flex w-full flex-col gap-4">{slots.info}</div>
        </div>
      )}
    </div>
  );
};

export default Layout;
