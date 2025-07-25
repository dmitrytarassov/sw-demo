"use client";

import { useStore } from "@nanostores/react";
import { deferCall } from "just-defer-call";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import CharacterInfo from "@/components/CharacterInfo/CharacterInfo";
import Empty from "@/components/CharacterInfo/Empty";
import CharactersList from "@/components/CharactersList/CharactersList";
import Layout from "@/components/ui/v1/Layout/Layout";
import { charactersStore } from "@/stores/charactersStore/charactersStore";
import { loadCharacter } from "@/stores/charactersStore/functions/loadCharacter";

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const params = useSearchParams();
  const id = params.get("id") || "";
  const $charactersStore = useStore(charactersStore);

  useEffect(() => {
    if (id) {
      setLoading(true);
      loadCharacter(id).finally(deferCall(setLoading, false));
    } else {
      setLoading(false);
    }
  }, [id]);

  return (
    <Layout
      slots={{
        list: <CharactersList />,
        info: $charactersStore[id] ? (
          <CharacterInfo character={$charactersStore[id]} />
        ) : loading ? null : (
          <Empty />
        ),
      }}
    />
  );
};

export default HomePage;
