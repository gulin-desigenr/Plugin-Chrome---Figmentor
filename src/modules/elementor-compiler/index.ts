import type {
  CompileRequest,
  CompiledExecutionBatch,
  CompiledOperation,
  ModuleContract
} from "../../contracts/module-contracts.js";
import { createModuleDescriptor } from "../../shared/create-module-descriptor.js";

export class ElementorCompilerModule
  implements ModuleContract<CompileRequest, CompiledExecutionBatch>
{
  readonly descriptor = createModuleDescriptor(
    "elementor-compiler",
    "Compiles approved plan items into bridge-safe operations.",
    ["Does not discover new targets.", "Does not execute the bridge call."]
  );

  validate(input: CompileRequest): void {
    if (input.plan.status !== "approved" && input.plan.status !== "partially_approved") {
      throw new Error("elementor-compiler only accepts approved plans.");
    }

    if (input.capabilityMatrix.capabilities.length === 0) {
      throw new Error("elementor-compiler requires a non-empty capability matrix.");
    }
  }

  async run(input: CompileRequest): Promise<CompiledExecutionBatch> {
    this.validate(input);

    const operations: CompiledOperation[] = [];

    for (const group of input.plan.groups) {
      for (const item of group.items) {
        for (const mutation of item.mutations) {
          operations.push({
            planItemId: item.planItemId,
            pageId: group.targetRef.pageId,
            elementId: group.targetRef.elementId,
            propertyPath: mutation.propertyPath,
            newValue: mutation.newValue
          });
        }
      }
    }

    return {
      planId: input.plan.planId,
      sourceSessionId: input.plan.sourceSessionId,
      correlationId: `corr_${input.plan.planId}`,
      idempotencyKey: `idem_${input.plan.planId}`,
      operations
    };
  }

  describe() {
    return this.descriptor;
  }
}
