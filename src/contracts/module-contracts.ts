import type { CanonicalIR } from "./canonical-ir.js";
import type { CapabilityMatrix } from "./capability-matrix.js";
import type { ExecutionReport } from "./execution-report.js";
import type { ImportTrigger } from "./enums.js";
import type { ImplementationPlan } from "./implementation-plan.js";
import type { VerificationReport } from "./verification-report.js";

export interface ModuleDescriptor {
  moduleId: string;
  version: string;
  description: string;
  boundaries: string[];
}

export interface ModuleContract<TInput, TOutput> {
  readonly descriptor: ModuleDescriptor;
  validate(input: TInput): void;
  run(input: TInput): Promise<TOutput>;
  describe(): ModuleDescriptor;
}

export interface FigmaReadRequest {
  sessionId: string;
  figmaFileKey: string;
  figmaNodeId: string;
  operatorId: string;
}

export interface FigmaReadResult {
  sessionId: string;
  capturedAt: string;
  rawNodes: unknown[];
  rawMetadata: Record<string, unknown>;
}

export interface NormalizeRequest {
  sessionId: string;
  source: FigmaReadResult;
  destination: {
    wordpressSite: string;
    wordpressPageId: string;
    elementorDocumentId: string;
  };
}

export interface CompileRequest {
  plan: ImplementationPlan;
  capabilityMatrix: CapabilityMatrix;
}

export interface CompiledExecutionBatch {
  planId: string;
  sourceSessionId: string;
  correlationId: string;
  idempotencyKey: string;
  operations: CompiledOperation[];
}

export interface CompiledOperation {
  planItemId: string;
  pageId: string;
  elementId?: string;
  propertyPath: string;
  newValue: unknown;
}

export interface ImportRequest {
  batch: CompiledExecutionBatch;
  trigger: ImportTrigger;
}

export interface ReconcileRequest {
  ir: CanonicalIR;
  plan: ImplementationPlan;
  execution: ExecutionReport;
  destinationInventory: Record<string, unknown>;
}

export interface ReconciliationReport {
  planId: string;
  executionId: string;
  targetDeltas: ReconciliationDelta[];
  scopeExpansionDetected: boolean;
  blockingConflicts: string[];
}

export interface ReconciliationDelta {
  targetRef: {
    pageId: string;
    elementId?: string;
  };
  findings: string[];
}

export interface VerifyRequest {
  ir: CanonicalIR;
  execution: ExecutionReport;
  reconciliation: ReconciliationReport;
  browserEvidenceRefs: string[];
  viewportsVerified: string[];
}

export type VerifierOutput = VerificationReport;
