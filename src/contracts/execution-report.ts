import type { ExecutionResultCode, PlanItemStatus } from "./enums.js";

export interface ExecutionReport {
  executionId: string;
  planId: string;
  sourceSessionId: string;
  startedAt: string;
  finishedAt?: string;
  status: "running" | "completed" | "failed" | "aborted";
  resultCode: ExecutionResultCode;
  trigger: string;
  correlationId: string;
  itemResults: ExecutionItemResult[];
  warnings: string[];
  errors: ExecutionError[];
}

export interface ExecutionItemResult {
  planItemId: string;
  status: Extract<PlanItemStatus, "executed" | "failed" | "skipped">;
  targetRef: {
    pageId: string;
    elementId?: string;
  };
  operationsApplied: number;
  bridgeCorrelationId?: string;
}

export interface ExecutionError {
  code: ExecutionResultCode;
  message: string;
  retryable: boolean;
  details?: Record<string, unknown>;
}
