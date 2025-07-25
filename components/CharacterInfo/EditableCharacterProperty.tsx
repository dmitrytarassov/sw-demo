"use client";

import { useDisclosure } from "@heroui/modal";
import React from "react";

import CharacterPropertyEdit from "@/components/ui/v1/CharacterPropertyEdit/CharacterPropertyEdit";
import { updateCharacterProperty } from "@/stores/charactersStore/functions/updateCharacterProperty";
import { Character } from "@/types/Character";

type EditableCharacterPropertyProps = {
  character: Character;
  fieldName: string;
  field: keyof Character["properties"];
};

const EditableCharacterProperty: React.FC<EditableCharacterPropertyProps> = ({
  character,
  field,
  fieldName,
}) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  function onChange(newValue: string) {
    updateCharacterProperty(character, field, newValue);
    onClose();
  }

  return (
    <>
      <span className="text-success cursor-pointer" onClick={onOpen}>
        {character.properties[field]}
      </span>
      <CharacterPropertyEdit
        characterName={character.properties.name}
        value={character.properties[field]}
        onChange={onChange}
        propertyName={fieldName}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default EditableCharacterProperty;
