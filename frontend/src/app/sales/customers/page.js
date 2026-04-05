"use client";

import { useState } from "react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addCustomer = () => {
    if (!form.name || !form.company) return;

    const newCustomer = {
      id: Date.now(),
      ...form,
      status: "Active",
    };

    setCustomers([newCustomer, ...customers]);

    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
    });
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-blue-50">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Customers</h1>
        <span className="text-blue-600 font-medium">
          Total: {customers.length}
        </span>
      </div>

      {/* FORM */}
      <div className="bg-white border border-blue-100 p-5 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Add New Customer
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
          onClick={addCustomer}
          className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-lg shadow"
        >
          Add Customer
        </button>
      </div>

      {/* TABLE */}
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
            {customers.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4 text-blue-400">
                  No customers yet
                </td>
              </tr>
            ) : (
              customers.map((c) => (
                <tr key={c.id} className="border-b hover:bg-blue-50">
                  <td className="p-2 text-black">{c.name}</td>
                  <td className="p-2 text-black">{c.company}</td>
                  <td className="p-2 text-black">{c.email}</td>
                  <td className="p-2 text-black">{c.phone}</td>
                  <td className="p-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                      {c.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => deleteCustomer(c.id)}
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