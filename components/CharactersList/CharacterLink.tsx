"use client";

import { Link } from "@heroui/link";
import React from "react";

import { CharactersListItem } from "@/types/CharactersListItem";

type CharacterLinkProps = {
  character: CharactersListItem;
};

const CharacterLink: React.FC<CharacterLinkProps> = ({ character }) => {
  return (
    <Link className="text-sm" href={`?id=${character.uid}`}>
      {character.name}
    </Link>
  );
};

export default CharacterLink;
