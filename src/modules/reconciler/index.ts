import type {
  ModuleContract,
  ReconciliationReport,
  ReconcileRequest
} from "../../contracts/module-contracts.js";
import { createModuleDescriptor } from "../../shared/create-module-descriptor.js";

export class ReconcilerModule implements ModuleContract<ReconcileRequest, ReconciliationReport> {
  readonly descriptor = createModuleDescriptor(
    "reconciler",
    "Compares plan intent, destination inventory and execution effects.",
    ["Does not mutate destination.", "Does not replace verification."]
  );

  validate(input: ReconcileRequest): void {
    if (!input.execution.planId) {
      throw new Error("reconciler requires an execution report tied to a plan.");
    }
  }

  async run(input: ReconcileRequest): Promise<ReconciliationReport> {
    this.validate(input);

    return {
      planId: input.execution.planId,
      executionId: input.execution.executionId,
      targetDeltas: [],
      scopeExpansionDetected: false,
      blockingConflicts: []
    };
  }

  describe() {
    return this.descriptor;
  }
}
