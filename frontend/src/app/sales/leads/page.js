"use client";

import { useState } from "react";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addLead = () => {
    if (!form.name || !form.company) return;

    const newLead = {
      id: Date.now(),
      ...form,
      status: "New",
    };

    setLeads([newLead, ...leads]);

    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
    });
  };

  const deleteLead = (id) => {
    setLeads(leads.filter((l) => l.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-blue-50">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Leads</h1>
        <span className="text-blue-600 font-medium">
          Total: {leads.length}
        </span>
      </div>

      {/* FORM CARD */}
      <div className="bg-white border border-blue-100 p-5 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Add New Lead
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-blue-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />

          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company"
            className="border border-blue-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-blue-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border border-blue-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />

        </div>

        <button
          onClick={addLead}
          className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg shadow"
        >
          Add Lead
        </button>
      </div>

      {/* LEADS TABLE */}
      <div className="bg-white border border-blue-100 rounded-xl shadow-md p-4">

        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-blue-100 text-blue-800">
              <th className="p-2">Name</th>
              <th className="p-2">Company</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4 text-blue-400">
                  No leads yet
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="border-b hover:bg-blue-50">
                  <td className="p-2 text-black">{lead.name}</td>
                  <td className="p-2 text-black">{lead.company}</td>
                  <td className="p-2 text-black">{lead.email}</td>
                  <td className="p-2 text-black">{lead.phone}</td>
                  <td className="p-2">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

      </div>

    </div>
  );
}