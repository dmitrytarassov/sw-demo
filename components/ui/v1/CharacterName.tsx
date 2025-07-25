"use client";

import clsx from "clsx";
import React from "react";

import { title } from "@/components/primitives";

type CharacterNameProps = {
  name: string;
  onClose: () => void;
};

const CharacterName: React.FC<CharacterNameProps> = ({ name, onClose }) => {
  return (
    <div className="flex w-full justify-between items-center">
      <h1 className={clsx(title({ size: "sm" }))}>{name}</h1>
      <span className="text-warning cursor-pointer" onClick={onClose}>
        ✖
      </span>
    </div>
  );
};

export default CharacterName;
