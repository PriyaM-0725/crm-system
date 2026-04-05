"use client";

import { useState } from "react";

export default function InteractionsPage() {
  const [interactions, setInteractions] = useState([]);
  const [form, setForm] = useState({
    type: "Call",
    note: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addInteraction = () => {
    if (!form.note) return;

    const newInteraction = {
      id: Date.now(),
      ...form,
    };

    setInteractions([newInteraction, ...interactions]);

    setForm({
      type: "Call",
      note: "",
      date: "",
    });
  };

  const deleteInteraction = (id) => {
    setInteractions(interactions.filter((i) => i.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-800">
          Interactions
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Track all your communication history
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white border border-blue-100 p-5 rounded-2xl shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-blue-700 mb-4">
          Add Interaction
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border border-blue-200 bg-white text-black p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option>Call</option>
            <option>Email</option>
            <option>Meeting</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border border-blue-200 bg-white text-black p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Enter interaction notes..."
            className="border border-blue-200 bg-white text-black p-2 rounded-lg col-span-2 focus:ring-2 focus:ring-blue-400"
          />

        </div>

        <button
          onClick={addInteraction}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-sm transition"
        >
          Add Interaction
        </button>
      </div>

      {/* LIST */}
      <div className="bg-white border border-blue-100 rounded-2xl shadow-sm p-4">

        {interactions.length === 0 ? (
          <p className="text-center text-blue-400">
            No interactions yet
          </p>
        ) : (
          interactions.map((item) => (
            <div
              key={item.id}
              className="border border-blue-100 p-4 mb-3 rounded-xl hover:shadow-md hover:bg-blue-50 transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-blue-700">
                  {item.type}
                </span>

                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {item.date || "No date"}
                </span>
              </div>

              <p className="text-gray-700 mb-3 text-sm">
                {item.note}
              </p>

              <button
                onClick={() => deleteInteraction(item.id)}
                className="text-red-500 hover:text-red-600 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          ))
        )}

      </div>

    </div>
  );
}