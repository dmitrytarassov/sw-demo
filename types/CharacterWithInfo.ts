import { Character } from "@/types/Character";
import { CharactersListItem } from "@/types/CharactersListItem";

export type CharacterWithInfo = CharactersListItem & {
  info: Character | null;
};
