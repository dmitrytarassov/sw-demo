"use client";

import React, { Suspense } from "react";

import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <Suspense>
      <HomePage />
    </Suspense>
  );
}
