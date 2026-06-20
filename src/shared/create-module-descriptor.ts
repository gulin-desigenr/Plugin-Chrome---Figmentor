import type { ModuleDescriptor } from "../contracts/module-contracts.js";

export function createModuleDescriptor(
  moduleId: string,
  description: string,
  boundaries: string[]
): ModuleDescriptor {
  return {
    moduleId,
    version: "0.1.0",
    description,
    boundaries
  };
}
