import type {
  FigmaReadRequest,
  FigmaReadResult,
  ModuleContract
} from "../../contracts/module-contracts.js";
import { createModuleDescriptor } from "../../shared/create-module-descriptor.js";

export class FigmaReaderModule implements ModuleContract<FigmaReadRequest, FigmaReadResult> {
  readonly descriptor = createModuleDescriptor(
    "figma-reader",
    "Reads source nodes and session metadata from Figma Web.",
    ["Does not normalize content.", "Does not decide or write."]
  );

  validate(input: FigmaReadRequest): void {
    if (!input.sessionId || !input.figmaFileKey || !input.figmaNodeId || !input.operatorId) {
      throw new Error(
        "figma-reader requires sessionId, figmaFileKey, figmaNodeId and operatorId."
      );
    }
  }

  async run(input: FigmaReadRequest): Promise<FigmaReadResult> {
    this.validate(input);

    return {
      sessionId: input.sessionId,
      capturedAt: new Date().toISOString(),
      rawNodes: [],
      rawMetadata: {
        figmaFileKey: input.figmaFileKey,
        figmaNodeId: input.figmaNodeId,
        operatorId: input.operatorId
      }
    };
  }

  describe() {
    return this.descriptor;
  }
}
