import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Users, UserPlus, Shield, Search, Calendar, DollarSign } from 'lucide-react';

interface Policyholder {
  id: string;
  fullName: string;
  nationalId: string;
  email: string;
  phone: string;
  address: string;
  policyStartDate: string;
  coverageAmount: number;
  status: 'Active' | 'Inactive';
}

interface StaffMember {
  id: string;
  fullName: string;
  email: string;
  role: 'Actuary' | 'Adjuster';
  dateRegistered: string;
  status: 'Active' | 'Inactive';
}

const Settings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('policyholders');
  
  // Policyholder form state
  const [policyholderForm, setPolicyholderForm] = useState({
    fullName: '',
    nationalId: '',
    email: '',
    phone: '',
    address: '',
    policyStartDate: '',
    coverageAmount: ''
  });
  
  // Staff form state
  const [staffForm, setStaffForm] = useState({
    fullName: '',
    email: '',
    password: '',
    role: ''
  });
  
  const [policyholders, setPolicyholders] = useState<Policyholder[]>([]);
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demo
  useEffect(() => {
    setPolicyholders([
      {
        id: '1',
        fullName: 'John Smith',
        nationalId: 'ID123456789',
        email: 'john.smith@email.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main St, New York, NY 10001',
        policyStartDate: '2024-01-15',
        coverageAmount: 100000,
        status: 'Active'
      },
      {
        id: '2',
        fullName: 'Sarah Johnson',
        nationalId: 'ID987654321',
        email: 'sarah.johnson@email.com',
        phone: '+1 (555) 987-6543',
        address: '456 Oak Ave, Los Angeles, CA 90210',
        policyStartDate: '2024-02-01',
        coverageAmount: 150000,
        status: 'Active'
      }
    ]);

    setStaffMembers([
      {
        id: '1',
        fullName: 'Michael Brown',
        email: 'michael.brown@company.com',
        role: 'Actuary',
        dateRegistered: '2023-12-01',
        status: 'Active'
      },
      {
        id: '2',
        fullName: 'Emily Davis',
        email: 'emily.davis@company.com',
        role: 'Adjuster',
        dateRegistered: '2024-01-10',
        status: 'Active'
      }
    ]);
  }, []);

  const handlePolicyholderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Validate required fields
      if (!policyholderForm.fullName || !policyholderForm.nationalId || !policyholderForm.email) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }

      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newPolicyholder: Policyholder = {
        id: Date.now().toString(),
        ...policyholderForm,
        coverageAmount: Number(policyholderForm.coverageAmount),
        status: 'Active'
      };
      
      setPolicyholders(prev => [...prev, newPolicyholder]);
      setPolicyholderForm({
        fullName: '',
        nationalId: '',
        email: '',
        phone: '',
        address: '',
        policyStartDate: '',
        coverageAmount: ''
      });
      
      toast({
        title: "Success",
        description: "Policyholder registered successfully!"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register policyholder. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStaffSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Validate required fields
      if (!staffForm.fullName || !staffForm.email || !staffForm.password || !staffForm.role) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }

      // Check for existing email
      const emailExists = staffMembers.some(staff => staff.email === staffForm.email);
      if (emailExists) {
        toast({
          title: "Error",
          description: "Email already exists. Please use a different email.",
          variant: "destructive"
        });
        return;
      }

      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newStaffMember: StaffMember = {
        id: Date.now().toString(),
        fullName: staffForm.fullName,
        email: staffForm.email,
        role: staffForm.role as 'Actuary' | 'Adjuster',
        dateRegistered: new Date().toISOString().split('T')[0],
        status: 'Active'
      };
      
      setStaffMembers(prev => [...prev, newStaffMember]);
      setStaffForm({
        fullName: '',
        email: '',
        password: '',
        role: ''
      });
      
      toast({
        title: "Success",
        description: "Staff member registered successfully!"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register staff member. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPolicyholders = policyholders.filter(policyholder =>
    policyholder.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    policyholder.nationalId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStaffMembers = staffMembers.filter(staff =>
    staff.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage policyholders and staff members in your actuarial system.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="policyholders" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Policyholders
          </TabsTrigger>
          <TabsTrigger value="staff" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Staff Members
          </TabsTrigger>
        </TabsList>

        <TabsContent value="policyholders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5" />
                Register New Policyholder
              </CardTitle>
              <CardDescription>
                Add a new policyholder to the system with their policy details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePolicyholderSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={policyholderForm.fullName}
                      onChange={(e) => setPolicyholderForm(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationalId">National ID / Passport *</Label>
                    <Input
                      id="nationalId"
                      value={policyholderForm.nationalId}
                      onChange={(e) => setPolicyholderForm(prev => ({ ...prev, nationalId: e.target.value }))}
                      placeholder="Enter ID number"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={policyholderForm.email}
                      onChange={(e) => setPolicyholderForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={policyholderForm.phone}
                      onChange={(e) => setPolicyholderForm(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="policyStartDate">Policy Start Date</Label>
                    <Input
                      id="policyStartDate"
                      type="date"
                      value={policyholderForm.policyStartDate}
                      onChange={(e) => setPolicyholderForm(prev => ({ ...prev, policyStartDate: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coverageAmount">Coverage Amount</Label>
                    <Input
                      id="coverageAmount"
                      type="number"
                      value={policyholderForm.coverageAmount}
                      onChange={(e) => setPolicyholderForm(prev => ({ ...prev, coverageAmount: e.target.value }))}
                      placeholder="Enter coverage amount"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={policyholderForm.address}
                    onChange={(e) => setPolicyholderForm(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter full address"
                    rows={3}
                  />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? 'Registering...' : 'Register Policyholder'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registered Policyholders</CardTitle>
              <CardDescription>
                View and manage all registered policyholders.
              </CardDescription>
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Full Name</TableHead>
                      <TableHead>National ID</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Policy Start</TableHead>
                      <TableHead>Coverage</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPolicyholders.map((policyholder) => (
                      <TableRow key={policyholder.id}>
                        <TableCell className="font-medium">{policyholder.fullName}</TableCell>
                        <TableCell>{policyholder.nationalId}</TableCell>
                        <TableCell>{policyholder.email}</TableCell>
                        <TableCell>{policyholder.policyStartDate}</TableCell>
                        <TableCell>${policyholder.coverageAmount.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant={policyholder.status === 'Active' ? 'default' : 'secondary'}>
                            {policyholder.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staff" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Register New Staff Member
              </CardTitle>
              <CardDescription>
                Add a new staff member to the actuarial system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleStaffSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="staffFullName">Full Name *</Label>
                    <Input
                      id="staffFullName"
                      value={staffForm.fullName}
                      onChange={(e) => setStaffForm(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="staffEmail">Email *</Label>
                    <Input
                      id="staffEmail"
                      type="email"
                      value={staffForm.email}
                      onChange={(e) => setStaffForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="staffPassword">Password *</Label>
                    <Input
                      id="staffPassword"
                      type="password"
                      value={staffForm.password}
                      onChange={(e) => setStaffForm(prev => ({ ...prev, password: e.target.value }))}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="staffRole">Role *</Label>
                    <Select value={staffForm.role} onValueChange={(value) => setStaffForm(prev => ({ ...prev, role: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Actuary">Actuary</SelectItem>
                        <SelectItem value="Adjuster">Adjuster</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? 'Registering...' : 'Register Staff Member'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Staff Members</CardTitle>
              <CardDescription>
                View and manage all staff members in the system.
              </CardDescription>
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Full Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Date Registered</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStaffMembers.map((staff) => (
                      <TableRow key={staff.id}>
                        <TableCell className="font-medium">{staff.fullName}</TableCell>
                        <TableCell>{staff.email}</TableCell>
                        <TableCell>
                          <Badge variant={staff.role === 'Actuary' ? 'default' : 'secondary'}>
                            {staff.role}
                          </Badge>
                        </TableCell>
                        <TableCell>{staff.dateRegistered}</TableCell>
                        <TableCell>
                          <Badge variant={staff.status === 'Active' ? 'default' : 'secondary'}>
                            {staff.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;