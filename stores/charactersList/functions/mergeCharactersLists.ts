import { CharactersListItem } from "@/types/CharactersListItem";

export function mergeCharactersLists(
  list: CharactersListItem[] = [],
  add: CharactersListItem[] = [],
): CharactersListItem[] {
  const listMap = new Map<string, CharactersListItem>(
    list.map((e) => [e.uid, e]),
  );

  add.forEach((item) => {
    if (!listMap.has(item.uid)) {
      listMap.set(item.uid, item);
    }
  });

  return Array.from(listMap.values());
}
