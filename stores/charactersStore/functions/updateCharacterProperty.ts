import { charactersStore } from "@/stores/charactersStore/charactersStore";
import { Character } from "@/types/Character";

export function updateCharacterProperty(
  character: Character,
  property: keyof Character["properties"],
  value: string,
) {
  const $charactersStore = charactersStore.get();
  const _character = $charactersStore[character.uid];

  if (_character) {
    charactersStore.set({
      ...charactersStore.get(),
      [character.uid]: {
        ..._character,
        properties: {
          ..._character.properties,
          [property]: value,
        },
      },
    });
  }
}
