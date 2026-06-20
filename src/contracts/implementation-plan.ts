import type {
  DecisionStrategy,
  MatchingConfidenceBand,
  PlanItemStatus,
  RiskLevel
} from "./enums.js";
import type { MutationBudget } from "./canonical-ir.js";

export interface ImplementationPlan {
  planVersion: string;
  planId: string;
  sourceSessionId: string;
  status: "draft" | "approved" | "partially_approved" | "rejected" | "executing" | "executed";
  createdAt: string;
  pageRef: string;
  approvalScope: ApprovalScope;
  mutationBudgetSnapshot: MutationBudgetSnapshot;
  executionOrder: string[];
  groups: PlanGroup[];
  humanSummary: HumanSummary;
}

export interface ApprovalScope {
  mode: "full_plan" | "by_group" | "by_item";
  approvedItemIds: string[];
  rejectedItemIds: string[];
}

export type MutationBudgetSnapshot = Omit<MutationBudget, "abortOnHighRiskWithoutApproval">;

export interface PlanGroup {
  groupId: string;
  targetKind: "element" | "widget_cluster" | "page_finalize";
  targetRef: {
    pageId: string;
    elementId?: string;
    widgetType?: string;
  };
  items: PlanItem[];
  groupOrder?: number;
}

export interface PlanItem {
  planItemId: string;
  blockId: string;
  decisionId: string;
  status: PlanItemStatus;
  operationType: "update_settings" | "apply_css_overlay" | "clear_cache" | "noop_flag";
  allowedMutations: string[];
  mutations: PlanMutation[];
  riskLevel: RiskLevel;
  confidenceBand: MatchingConfidenceBand;
  decisionStrategy: DecisionStrategy;
  verificationRules: VerificationRules;
  scopeGuard: ScopeGuard;
}

export interface PlanMutation {
  propertyPath: string;
  oldValue?: unknown;
  newValue?: unknown;
}

export interface VerificationRules {
  structural: string;
  semantic: string;
  visual: string;
  viewports?: string[];
  blockingDimensions?: string[];
}

export interface ScopeGuard {
  forbidNewTargets: true;
  forbidPropertyExpansion: true;
  forbidWidgetSwap: true;
  forbidGlobalChanges?: true;
}

export interface HumanSummary {
  title: string;
  summaryLines: string[];
}
