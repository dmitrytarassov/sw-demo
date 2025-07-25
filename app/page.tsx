"use client";

import { useStore } from "@nanostores/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

import CharacterInfo from "@/components/CharacterInfo/CharacterInfo";
import Empty from "@/components/CharacterInfo/Empty";
import CharactersList from "@/components/CharactersList/CharactersList";
import Layout from "@/components/ui/v1/Layout/Layout";
import { charactersStore } from "@/stores/charactersStore/charactersStore";
import { loadCharacter } from "@/stores/charactersStore/functions/loadCharacter";

export default function Home() {
  const params = useSearchParams();
  const id = params.get("id") || "";
  const $charactersStore = useStore(charactersStore);

  useEffect(() => {
    if (id) {
      void loadCharacter(id);
    }
  }, [id]);

  return (
    <Layout
      slots={{
        list: <CharactersList />,
        info: $charactersStore[id] ? (
          <CharacterInfo character={$charactersStore[id]} />
        ) : (
          <Empty />
        ),
      }}
    />
  );
}
