"use client";

import { useRouter } from "next/navigation";
import React from "react";

import EditableCharacterProperty from "@/components/CharacterInfo/EditableCharacterProperty";
import CharacterName from "@/components/ui/v1/CharacterName";
import SimpleTable from "@/components/ui/v1/SimpleTable/SimpleTable";
import { Character } from "@/types/Character";

type CharacterInfoProps = {
  character: Character;
};

const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {
  const router = useRouter();
  function onClose() {
    router.push("/");
  }

  return (
    <>
      <CharacterName name={character.properties.name} onClose={onClose} />
      <SimpleTable
        columns={[
          { key: "key", label: "Param" },
          { key: "value", label: "Value" },
        ]}
        rows={[
          {
            key: "Name",
            value: character.properties.name,
          },
          {
            key: "Gender",
            value: (
              <EditableCharacterProperty
                fieldName={"Gender"}
                character={character}
                field={"gender"}
              />
            ),
          },
          {
            key: "Skin Color",
            value: (
              <EditableCharacterProperty
                fieldName={"Skin Color"}
                character={character}
                field={"skin_color"}
              />
            ),
          },
          {
            key: "Hair Color",
            value: (
              <EditableCharacterProperty
                fieldName={"Hair Color"}
                character={character}
                field={"hair_color"}
              />
            ),
          },
          {
            key: "Eye Color",
            value: (
              <EditableCharacterProperty
                fieldName={"Eye Color"}
                character={character}
                field={"eye_color"}
              />
            ),
          },
          {
            key: "Height",
            value: (
              <EditableCharacterProperty
                fieldName={"Height"}
                character={character}
                field={"height"}
              />
            ),
          },
          {
            key: "Mass",
            value: (
              <EditableCharacterProperty
                fieldName={"Mass"}
                character={character}
                field={"mass"}
              />
            ),
          },
          {
            key: "Birth Year",
            value: (
              <EditableCharacterProperty
                fieldName={"Birth Year"}
                character={character}
                field={"birth_year"}
              />
            ),
          },
        ]}
      />
    </>
  );
};

export default CharacterInfo;
