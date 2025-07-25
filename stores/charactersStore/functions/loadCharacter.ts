import { charactersStore } from "@/stores/charactersStore/charactersStore";
import { Character } from "@/types/Character";
import { CharacterResponse } from "@/types/CharacterResponse";
import { apiRequest } from "@/utils/api/apiRequest";

export async function loadCharacter(uid: string): Promise<Character | null> {
  const $charactersStore = charactersStore.get();
  if ($charactersStore[uid]) {
    return $charactersStore[uid];
  }

  try {
    const character = await apiRequest<CharacterResponse>(`people/${uid}`);
    charactersStore.set({
      ...charactersStore.get(),
      [uid]: character.result,
    });

    return character.result;
  } catch (e) {
    //
  }

  return null;
}
