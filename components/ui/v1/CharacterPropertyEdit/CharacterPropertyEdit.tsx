"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import React, { useEffect } from "react";

import { CharacterPropertyEditProps } from "@/components/ui/interfaces/CharacterPropertyEditProps";

const CharacterPropertyEdit: React.FC<CharacterPropertyEditProps> = ({
  characterName,
  propertyName,
  onChange,
  isOpen,
  onOpenChange,
  value: _value,
}) => {
  const [value, setValue] = React.useState(_value);

  function save() {
    onChange(value);
  }

  useEffect(() => {
    if (isOpen) {
      setValue(_value);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Edit {characterName}'s {propertyName}
            </ModalHeader>
            <ModalBody>
              <Input value={value} onChange={(e) => setValue(e.target.value)} />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={save}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CharacterPropertyEdit;
