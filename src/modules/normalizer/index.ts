import type { CanonicalIR } from "../../contracts/canonical-ir.js";
import type { ModuleContract, NormalizeRequest } from "../../contracts/module-contracts.js";
import { createModuleDescriptor } from "../../shared/create-module-descriptor.js";

export class NormalizerModule implements ModuleContract<NormalizeRequest, CanonicalIR> {
  readonly descriptor = createModuleDescriptor(
    "normalizer",
    "Converts raw Figma reads into Canonical IR.",
    ["Does not write.", "Does not perform reconciliation."]
  );

  validate(input: NormalizeRequest): void {
    if (!input.sessionId || !input.source) {
      throw new Error("normalizer requires sessionId and source.");
    }
  }

  async run(input: NormalizeRequest): Promise<CanonicalIR> {
    this.validate(input);

    return {
      irVersion: "1.0.0",
      sessionId: input.sessionId,
      source: {
        figmaFileKey: String(input.source.rawMetadata.figmaFileKey ?? ""),
        figmaNodeId: String(input.source.rawMetadata.figmaNodeId ?? ""),
        capturedAt: input.source.capturedAt
      },
      destination: {
        wordpressSite: input.destination.wordpressSite,
        wordpressPageId: input.destination.wordpressPageId,
        elementorDocumentId: input.destination.elementorDocumentId,
        bridgeOrigin: "chrome_extension"
      },
      page: {
        pageRef: "",
        url: "",
        templateKind: "unknown",
        breakpointsInScope: []
      },
      blocks: [],
      matches: [],
      decisions: [],
      constraints: [],
      mutationBudget: {
        maxTargets: 0,
        maxOperations: 0,
        maxCssOverlays: 0,
        allowGlobalChanges: false,
        allowStructuralChanges: false,
        abortOnHighRiskWithoutApproval: true
      }
    };
  }

  describe() {
    return this.descriptor;
  }
}
