import type { VerificationReport } from "../../contracts/verification-report.js";
import type { ModuleContract, VerifyRequest } from "../../contracts/module-contracts.js";
import { createModuleDescriptor } from "../../shared/create-module-descriptor.js";

export class VerifierModule implements ModuleContract<VerifyRequest, VerificationReport> {
  readonly descriptor = createModuleDescriptor(
    "verifier",
    "Proves structural, semantic and visual convergence after execution.",
    ["Does not write.", "Does not invent evidence."]
  );

  validate(input: VerifyRequest): void {
    if (!input.execution.executionId) {
      throw new Error("verifier requires a completed execution reference.");
    }

    if (input.browserEvidenceRefs.length === 0 || input.viewportsVerified.length === 0) {
      throw new Error("verifier requires browser evidence refs and verified viewports.");
    }
  }

  async run(input: VerifyRequest): Promise<VerificationReport> {
    this.validate(input);

    return {
      verificationId: `ver_${input.execution.executionId}`,
      planId: input.execution.planId,
      executionId: input.execution.executionId,
      verdict: "not_executed",
      generatedAt: new Date().toISOString(),
      viewportsVerified: input.viewportsVerified,
      structural: {
        status: "not_run",
        summary: "Structural verification not implemented yet.",
        findings: []
      },
      semantic: {
        status: "not_run",
        summary: "Semantic verification not implemented yet.",
        findings: []
      },
      visual: {
        status: "not_run",
        summary: "Visual verification not implemented yet.",
        findings: []
      },
      evidenceRefs: input.browserEvidenceRefs
    };
  }

  describe() {
    return this.descriptor;
  }
}
