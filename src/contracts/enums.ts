export type MatchingConfidenceBand = "exact" | "high" | "medium" | "low" | "none";

export type RenderabilityClass =
  | "native_exact"
  | "native_approximate"
  | "requires_css_overlay"
  | "requires_structural_change"
  | "not_renderable";

export type WidgetCompatibility =
  | "compatible"
  | "compatible_with_constraints"
  | "incompatible"
  | "unknown";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export type DecisionStrategy =
  | "apply_native_settings"
  | "apply_native_settings_with_css_overlay"
  | "defer_and_flag"
  | "abort";

export type VerificationVerdict =
  | "converged"
  | "minor_delta"
  | "critical_delta"
  | "not_executed";

export type PlanItemStatus =
  | "planned"
  | "approved"
  | "rejected"
  | "executed"
  | "failed"
  | "skipped";

export type ExecutionResultCode =
  | "success"
  | "partial_success"
  | "validation_error"
  | "capability_denied"
  | "target_not_found"
  | "conflict"
  | "aborted_by_policy"
  | "bridge_error";

export type CapabilitySupport =
  | "supported"
  | "supported_with_constraints"
  | "limited"
  | "blocked";

export type ImportTrigger = "manual_review" | "approved_plan" | "retry_execution";
