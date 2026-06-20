import type {
  DecisionStrategy,
  MatchingConfidenceBand,
  RenderabilityClass,
  RiskLevel,
  WidgetCompatibility
} from "./enums.js";

export interface CanonicalIR {
  irVersion: string;
  sessionId: string;
  source: SourceContext;
  destination: DestinationContext;
  page: PageContext;
  blocks: BlockIR[];
  matches: MatchRecord[];
  decisions: DecisionRecord[];
  constraints: ConstraintRecord[];
  mutationBudget: MutationBudget;
  externalDependencies?: string[];
}

export interface SourceContext {
  figmaFileKey: string;
  figmaNodeId: string;
  capturedAt: string;
  figmaPageName?: string;
}

export interface DestinationContext {
  wordpressSite: string;
  wordpressPageId: string;
  elementorDocumentId: string;
  bridgeOrigin: "chrome_extension";
}

export interface PageContext {
  pageRef: string;
  url: string;
  templateKind: string;
  breakpointsInScope: string[];
  locale?: string;
}

export interface BlockIR {
  blockId: string;
  sourceFigmaNodeId: string;
  blockType: BlockType;
  semanticRole: string;
  content: Record<string, unknown>;
  layout: {
    boundingBox: BoundingBox;
    childrenOrder?: string[];
    padding?: BoxSpacing;
    aspectRatio?: number;
    [key: string]: unknown;
  };
  style: Record<string, unknown>;
  responsiveBehavior: Record<string, unknown>;
  materiality: {
    importance: "critical" | "high" | "medium" | "low";
    [key: string]: unknown;
  };
}

export type BlockType =
  | "section"
  | "container"
  | "heading"
  | "text"
  | "button"
  | "image"
  | "icon"
  | "spacer"
  | "divider"
  | "list"
  | "unknown";

export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BoxSpacing {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface MatchRecord {
  matchId: string;
  blockId: string;
  destinationElementId?: string;
  destinationWidgetType?: string;
  confidenceBand: MatchingConfidenceBand;
  evidence: string[];
  destinationTargetStatus: "matched" | "ambiguous" | "unmatched";
}

export interface DecisionRecord {
  decisionId: string;
  blockId: string;
  destinationElementId?: string;
  renderabilityClass: RenderabilityClass;
  widgetCompatibility: WidgetCompatibility;
  riskLevel: RiskLevel;
  decisionStrategy: DecisionStrategy;
  allowedMutations: string[];
  forbiddenMutations: string[];
  rationaleCodes: string[];
  requiresHumanApproval: boolean;
  acceptedDeltaPolicy: Record<string, unknown>;
}

export interface ConstraintRecord {
  constraintId: string;
  scope: "global" | "page" | "widget" | "element" | "property";
  source:
    | "bridge_capability"
    | "memory_restriction"
    | "product_policy"
    | "external_dependency";
  rule: string;
  severity: RiskLevel;
  blocking: boolean;
}

export interface MutationBudget {
  maxTargets: number;
  maxOperations: number;
  maxCssOverlays: number;
  allowGlobalChanges: boolean;
  allowStructuralChanges: boolean;
  abortOnHighRiskWithoutApproval: boolean;
}
