import { Claim, Policy, User, DashboardMetrics } from '@/types/claims';

export const mockClaims: Claim[] = [
  {
    id: '1',
    policyNumber: 'POL-2024-001',
    claimDate: '2024-01-15',
    reportDate: '2024-01-16',
    amount: 25000,
    cause: 'Vehicle Collision',
    status: 'Under Review',
    severity: 'High',
    description: 'Multi-vehicle collision on highway, significant damage to insured vehicle',
    claimantName: 'John Smith',
    adjustedAmount: 22000,
    riskFlag: true,
    createdBy: 'adjuster@company.com',
    lastUpdated: '2024-01-20'
  },
  {
    id: '2',
    policyNumber: 'POL-2024-002',
    claimDate: '2024-01-18',
    reportDate: '2024-01-18',
    amount: 8500,
    cause: 'Water Damage',
    status: 'Approved',
    severity: 'Medium',
    description: 'Pipe burst in basement causing water damage to personal property',
    claimantName: 'Sarah Johnson',
    adjustedAmount: 8500,
    riskFlag: false,
    createdBy: 'adjuster@company.com',
    lastUpdated: '2024-01-22'
  },
  {
    id: '3',
    policyNumber: 'POL-2024-003',
    claimDate: '2024-01-20',
    reportDate: '2024-01-21',
    amount: 45000,
    cause: 'Fire Damage',
    status: 'Open',
    severity: 'Critical',
    description: 'Kitchen fire spread to living area, extensive property damage',
    claimantName: 'Michael Brown',
    riskFlag: true,
    createdBy: 'adjuster@company.com',
    lastUpdated: '2024-01-25'
  },
  {
    id: '4',
    policyNumber: 'POL-2024-004',
    claimDate: '2024-01-22',
    reportDate: '2024-01-22',
    amount: 3200,
    cause: 'Theft',
    status: 'Closed',
    severity: 'Low',
    description: 'Stolen electronics from vehicle break-in',
    claimantName: 'Lisa Davis',
    adjustedAmount: 2800,
    riskFlag: false,
    createdBy: 'adjuster@company.com',
    lastUpdated: '2024-01-24'
  },
  {
    id: '5',
    policyNumber: 'POL-2024-005',
    claimDate: '2024-01-25',
    reportDate: '2024-01-25',
    amount: 15600,
    cause: 'Hail Damage',
    status: 'Under Review',
    severity: 'Medium',
    description: 'Roof and vehicle damage from severe hailstorm',
    claimantName: 'Robert Wilson',
    riskFlag: false,
    createdBy: 'adjuster@company.com',
    lastUpdated: '2024-01-26'
  }
];

export const mockPolicies: Policy[] = [
  {
    id: '1',
    policyNumber: 'POL-2024-001',
    policyHolder: 'John Smith',
    coverageAmount: 100000,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    premiumAmount: 1200,
    type: 'Auto',
    status: 'Active'
  },
  {
    id: '2',
    policyNumber: 'POL-2024-002',
    policyHolder: 'Sarah Johnson',
    coverageAmount: 250000,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    premiumAmount: 800,
    type: 'Home',
    status: 'Active'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alice Cooper',
    email: 'alice.cooper@company.com',
    role: 'Actuary',
    department: 'Risk Analysis',
    createdAt: '2023-06-15'
  },
  {
    id: '2',
    name: 'Bob Wilson',
    email: 'bob.wilson@company.com',
    role: 'Claims Adjuster',
    department: 'Claims Processing',
    createdAt: '2023-08-20'
  }
];

export const mockMetrics: DashboardMetrics = {
  totalClaims: 127,
  totalAmount: 2450000,
  averageSeverity: 19291,
  lossRatio: 0.68,
  claimsThisMonth: 23,
  pendingClaims: 15,
  highRiskClaims: 8,
  averageProcessingTime: 12.5
};

export const mockChartData = {
  claimsOverTime: [
    { month: 'Jan', claims: 23, amount: 450000 },
    { month: 'Feb', claims: 31, amount: 620000 },
    { month: 'Mar', claims: 28, amount: 540000 },
    { month: 'Apr', claims: 35, amount: 710000 },
    { month: 'May', claims: 42, amount: 830000 },
    { month: 'Jun', claims: 38, amount: 750000 }
  ],
  claimsByCause: [
    { cause: 'Vehicle Collision', count: 45, percentage: 35.4 },
    { cause: 'Water Damage', count: 28, percentage: 22.0 },
    { cause: 'Fire Damage', count: 18, percentage: 14.2 },
    { cause: 'Theft', count: 22, percentage: 17.3 },
    { cause: 'Weather Related', count: 14, percentage: 11.0 }
  ],
  severityDistribution: [
    { severity: 'Low', count: 45, averageAmount: 3500 },
    { severity: 'Medium', count: 52, averageAmount: 15000 },
    { severity: 'High', count: 23, averageAmount: 35000 },
    { severity: 'Critical', count: 7, averageAmount: 85000 }
  ]
};