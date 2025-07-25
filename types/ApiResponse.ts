export type ApiResponse<T, K extends string, P = {}> = P & {
  message: string; // "ok";
  apiVersion: string; // "1.0";
  timestamp: string; // "2025-07-23T10:49:40.250Z";
  support: unknown;
  social: unknown;
} & {
  [key in K]: T;
};
