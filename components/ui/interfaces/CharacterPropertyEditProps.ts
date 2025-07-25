export type CharacterPropertyEditProps = {
  value: string;
  characterName: string;
  onChange: (value: string) => void;
  propertyName: string;
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
};
