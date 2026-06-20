import type { CapabilitySupport } from "./enums.js";

export interface CapabilityMatrix {
  matrixVersion: string;
  generatedAt: string;
  capabilities: CapabilityEntry[];
}

export interface CapabilityEntry {
  capabilityId: string;
  label: string;
  support: CapabilitySupport;
  targetKinds: Array<"page" | "section" | "container" | "widget" | "element" | "property">;
  constraints: string[];
}
