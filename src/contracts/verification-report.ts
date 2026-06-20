import type { VerificationVerdict } from "./enums.js";

export interface VerificationReport {
  verificationId: string;
  planId: string;
  executionId?: string;
  verdict: VerificationVerdict;
  generatedAt: string;
  viewportsVerified: string[];
  structural: VerificationDimension;
  semantic: VerificationDimension;
  visual: VerificationDimension;
  evidenceRefs: string[];
}

export interface VerificationDimension {
  status: "pass" | "warn" | "fail" | "not_run";
  summary: string;
  findings: string[];
}
