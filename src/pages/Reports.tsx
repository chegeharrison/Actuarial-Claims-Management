import React from "react";
import { FileBarChart2, Calendar, Download } from "lucide-react";

const reportData = [
  {
    id: 1,
    title: "Monthly Claims Report",
    date: "July 2025",
    description: "Overview of total claims filed, approved, and rejected.",
  },
  {
    id: 2,
    title: "Risk Exposure Summary",
    date: "Q2 2025",
    description: "Summarizes exposure trends across regions and policy types.",
  },
  {
    id: 3,
    title: "Loss Ratio Analysis",
    date: "2024 Annual",
    description: "Analyzes incurred losses vs earned premiums for the year.",
  },
];

const Reports = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileBarChart2 className="text-indigo-600" />
        <h1 className="text-2xl font-bold">Reports</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reportData.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {report.title}
              </h2>
              <Download className="w-4 h-4 text-gray-500 hover:text-indigo-600 cursor-pointer" />
            </div>
            <p className="text-sm text-gray-600 mb-1">{report.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>{report.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
