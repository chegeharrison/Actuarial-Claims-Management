import React from "react";
import { AlertCircle, Bell, Flame } from "lucide-react";

const riskAlertsData = [
  {
    id: 1,
    title: "High-Risk Policy Holder Detected",
    description: "User ID #342 reported multiple claims within 30 days.",
    severity: "High",
    date: "2025-07-24",
  },
  {
    id: 2,
    title: "Suspicious Claim Pattern",
    description: "Policy #A1025 has 3 claims all on weekends.",
    severity: "Medium",
    date: "2025-07-20",
  },
  {
    id: 3,
    title: "Outlier Location",
    description: "Claim #C3890 filed from an unusual region.",
    severity: "Low",
    date: "2025-07-19",
  },
];

const severityColor = {
  High: "text-red-600",
  Medium: "text-yellow-500",
  Low: "text-green-600",
};

const RiskAlerts = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="text-blue-600" />
        <h1 className="text-2xl font-bold">Risk Alerts</h1>
      </div>

      {riskAlertsData.length === 0 ? (
        <p className="text-gray-600">No risk alerts at this time.</p>
      ) : (
        <div className="grid gap-4">
          {riskAlertsData.map((alert) => (
            <div
              key={alert.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className={`${severityColor[alert.severity]} w-5 h-5`} />
                  <h2 className="text-lg font-semibold">{alert.title}</h2>
                </div>
                <span
                  className={`text-sm font-medium ${severityColor[alert.severity]}`}
                >
                  {alert.severity}
                </span>
              </div>
              <p className="text-gray-700 mt-1">{alert.description}</p>
              <p className="text-sm text-gray-500 mt-2">Date: {alert.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RiskAlerts;
