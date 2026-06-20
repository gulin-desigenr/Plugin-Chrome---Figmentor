import type { ExecutionReport } from "../../contracts/execution-report.js";
import type { ImportRequest, ModuleContract } from "../../contracts/module-contracts.js";
import { createModuleDescriptor } from "../../shared/create-module-descriptor.js";

export class ElementorImporterModule implements ModuleContract<ImportRequest, ExecutionReport> {
  readonly descriptor = createModuleDescriptor(
    "elementor-importer",
    "Executes compiled operations against the Elementor bridge.",
    ["Does not reinterpret Figma.", "Does not change plan scope."]
  );

  validate(input: ImportRequest): void {
    if (!input.batch.planId || input.batch.operations.length === 0) {
      throw new Error("elementor-importer requires a non-empty compiled batch.");
    }

    if (!input.trigger) {
      throw new Error("elementor-importer requires an explicit import trigger.");
    }
  }

  async run(input: ImportRequest): Promise<ExecutionReport> {
    this.validate(input);

    return {
      executionId: `exec_${input.batch.planId}`,
      planId: input.batch.planId,
      sourceSessionId: input.batch.sourceSessionId,
      startedAt: new Date().toISOString(),
      finishedAt: new Date().toISOString(),
      status: "aborted",
      resultCode: "bridge_error",
      trigger: input.trigger,
      correlationId: input.batch.correlationId,
      itemResults: input.batch.operations.map((operation) => ({
        planItemId: operation.planItemId,
        status: "skipped",
        targetRef: {
          pageId: operation.pageId,
          elementId: operation.elementId
        },
        operationsApplied: 0,
        bridgeCorrelationId: input.batch.correlationId
      })),
      warnings: ["Phase 01 scaffold only: bridge execution is not implemented yet."],
      errors: [
        {
          code: "bridge_error",
          message: "Elementor bridge execution is outside the current foundation scaffold.",
          retryable: false
        }
      ]
    };
  }

  describe() {
    return this.descriptor;
  }
}
