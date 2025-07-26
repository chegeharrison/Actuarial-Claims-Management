import { 
  DollarSign, 
  FileText, 
  TrendingUp, 
  AlertTriangle,
  Users,
  Clock,
  BarChart3,
  PieChart
} from 'lucide-react';
import MetricsCard from '@/components/MetricsCard';
import { Link } from "react-router-dom";
import ClaimsTable from '@/components/ClaimsTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockMetrics, mockChartData } from '@/data/mockData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  LineChart,
  Line
} from 'recharts';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function Dashboard() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return (value * 100).toFixed(1) + '%';
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Actuarial Dashboard
          </h1>
          <p className="text-muted-foreground">
            Insurance Claims Analytics & Risk Management
          </p>
        </div>
        <div className="flex gap-3">
          <Link to="/Reports">
          <Button variant="outline">Export Report</Button>
          </Link>
          <Link to="/NewClaim">
          <Button>New Claim</Button>
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Total Claims Value"
          value={formatCurrency(mockMetrics.totalAmount)}
          change="+12.5% from last month"
          icon={DollarSign}
          trend="up"
        />
        <MetricsCard
          title="Active Claims"
          value={mockMetrics.totalClaims}
          change="+8 new this week"
          icon={FileText}
          trend="up"
        />
        <MetricsCard
          title="Loss Ratio"
          value={formatPercentage(mockMetrics.lossRatio)}
          change="-2.3% improvement"
          icon={TrendingUp}
          trend="down"
        />
        <MetricsCard
          title="High Risk Claims"
          value={mockMetrics.highRiskClaims}
          change="Requires attention"
          icon={AlertTriangle}
          trend="neutral"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Claims Trend Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockChartData.claimsOverTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'claims' ? value : formatCurrency(Number(value)),
                    name === 'claims' ? 'Claims Count' : 'Total Amount'
                  ]}
                />
                <Bar dataKey="claims" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Claims by Cause
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={mockChartData.claimsByCause}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ cause, percentage }) => `${cause} (${percentage}%)`}
                >
                  {mockChartData.claimsByCause.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricsCard
          title="Pending Claims"
          value={mockMetrics.pendingClaims}
          description="Awaiting review"
          icon={Clock}
        />
        <MetricsCard
          title="Avg Processing Time"
          value={`${mockMetrics.averageProcessingTime} days`}
          change="Within SLA targets"
          icon={TrendingUp}
          trend="neutral"
        />
        <MetricsCard
          title="Claims This Month"
          value={mockMetrics.claimsThisMonth}
          change="+15% vs last month"
          icon={Users}
          trend="up"
        />
      </div>

      {/* Recent Claims Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Claims</CardTitle>
            <Button variant="outline" size="sm">
              View All Claims
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ClaimsTable />
        </CardContent>
      </Card>
    </div>
  );
}

// Missing import for Pie
import { Pie } from 'recharts';