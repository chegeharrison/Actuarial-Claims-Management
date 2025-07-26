export interface Claim {
  id: string;
  policyNumber: string;
  claimDate: string;
  reportDate: string;
  amount: number;
  cause: string;
  status: 'Open' | 'Under Review' | 'Approved' | 'Denied' | 'Closed';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  claimantName: string;
  adjustedAmount?: number;
  riskFlag: boolean;
  createdBy: string;
  lastUpdated: string;
}

export interface Policy {
  id: string;
  policyNumber: string;
  policyHolder: string;
  coverageAmount: number;
  startDate: string;
  endDate: string;
  premiumAmount: number;
  type: 'Auto' | 'Home' | 'Life' | 'Health' | 'Commercial';
  status: 'Active' | 'Expired' | 'Cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Actuary' | 'Claims Adjuster' | 'Manager' | 'Admin';
  department: string;
  createdAt: string;
}

export interface DashboardMetrics {
  totalClaims: number;
  totalAmount: number;
  averageSeverity: number;
  lossRatio: number;
  claimsThisMonth: number;
  pendingClaims: number;
  highRiskClaims: number;
  averageProcessingTime: number;
}