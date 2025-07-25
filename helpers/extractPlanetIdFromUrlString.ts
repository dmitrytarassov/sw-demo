export const extractPlanetIdFromUrlString = (url: string): string | null => {
  const [, planetId] = url.split("planets/");
  return planetId || null;
};
