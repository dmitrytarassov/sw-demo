import { planetsStore } from "@/stores/planetsStore/planetsStore";
import { PlanetResponse } from "@/types/PlanetResponse";
import { apiRequest } from "@/utils/api/apiRequest";

let loading: Record<string, boolean> = {};

export async function loadPlanet(planetId: string) {
  const $planetsStore = planetsStore.get();

  if ($planetsStore[planetId]) {
    return;
  }

  try {
    console.log("loading[planetId]", planetId, loading[planetId]);
    if (!loading[planetId]) {
      loading[planetId] = true;
      console.log("Loading planet", planetId);
      const planet = await apiRequest<PlanetResponse>(`planets/${planetId}`);
      planetsStore.set({
        ...planetsStore.get(),
        [planetId]: planet.result,
      });
      console.log("loaded planet", planetId);
    }
  } catch (e) {
    //
  }
  loading[planetId] = false;
  console.log("done", planetId);
}
