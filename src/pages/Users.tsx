import React from "react";
import { User, Mail, ShieldCheck, MoreVertical } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Alice Mwangi",
    email: "alice@example.com",
    role: "Administrator",
  },
  {
    id: 2,
    name: "John Otieno",
    email: "john.otieno@example.com",
    role: "Claims Officer",
  },
  {
    id: 3,
    name: "Grace Wambui",
    email: "grace.wambui@example.com",
    role: "Risk Analyst",
  },
];

const Users = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <User className="text-indigo-600" />
        <h1 className="text-2xl font-bold">User Management</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition-all"
              >
                <td className="px-6 py-4 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  {user.name}
                </td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {user.email}
                </td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  {user.role}
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-gray-500 hover:text-indigo-600 transition">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
