import { ApiResponse } from "@/types/ApiResponse";
import { Planet } from "@/types/Planet";

export type PlanetResponse = ApiResponse<Planet, "result">;
