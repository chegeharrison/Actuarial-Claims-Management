import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NewClaim = () => {
  const [formData, setFormData] = useState({
    policyNumber: '',
    claimantName: '',
    claimType: '',
    amount: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/claims", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit claim");
    }

    const result = await response.json();
    console.log("Claim submitted:", result);

    navigate("/claims");
  } catch (error) {
    console.error("Error submitting claim:", error);
    alert("There was an error submitting your claim. Please try again.");
  }
};


  return (
    <div className="max-w-3xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">File a New Claim</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Policy Number</label>
              <Input name="policyNumber" value={formData.policyNumber} onChange={handleChange} required />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Claimant Name</label>
              <Input name="claimantName" value={formData.claimantName} onChange={handleChange} required />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Claim Type</label>
              <Input name="claimType" value={formData.claimType} onChange={handleChange} placeholder="e.g. Accident, Theft, Fire" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Claim Amount (USD)</label>
              <Input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Description</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Details of the incident..."
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Submit Claim</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewClaim;
