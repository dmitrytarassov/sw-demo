"use client";

import { useStore } from "@nanostores/react";
import React, { useEffect } from "react";

import CharacterLink from "@/components/CharactersList/CharacterLink";
import Button from "@/components/ui/v1/Button/Button";
import SimpleTable from "@/components/ui/v1/SimpleTable/SimpleTable";
import VerticalList from "@/components/ui/v1/VerticalList/VerticalList";
import {
  charactersListStateStore,
  charactersListStore,
} from "@/stores/charactersList/charactersListStore";
import { loadCharacters } from "@/stores/charactersList/functions/loadCharacters";
import { loadNextCharacters } from "@/stores/charactersList/functions/loadNextCharacters";

const CharactersList: React.FC = () => {
  const $charactersListStore = useStore(charactersListStore);
  const $charactersListStateStore = useStore(charactersListStateStore);

  useEffect(() => {
    void loadCharacters();
  }, []);

  return (
    <VerticalList>
      <SimpleTable
        columns={[
          { key: "id", label: "#" },
          { key: "name", label: "Character" },
        ]}
        rows={$charactersListStore.map((character, index) => ({
          key: character.uid,
          name: <CharacterLink character={character} />,
          id: index + 1,
        }))}
      />
      {$charactersListStateStore.next && (
        <Button color="primary" onClick={loadNextCharacters}>
          Load more
        </Button>
      )}
    </VerticalList>
  );
};

export default CharactersList;
