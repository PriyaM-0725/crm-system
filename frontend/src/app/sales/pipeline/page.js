"use client";

import { useEffect, useState } from "react";

const stages = ["new", "contacted", "qualified", "proposal", "closed"];

const columnTitles = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  proposal: "Proposal",
  closed: "Closed",
};

export default function Pipeline() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // LOAD DATA
  useEffect(() => {
    const data = localStorage.getItem("leads");
    if (data) setLeads(JSON.parse(data));
  }, []);

  // SAVE DATA
  const saveData = (updated) => {
    setLeads(updated);
    localStorage.setItem("leads", JSON.stringify(updated));
  };

  // UPDATE STATUS
  const updateStatus = (id, status) => {
    const updated = leads.map((l) =>
      l.id === id ? { ...l, status } : l
    );
    saveData(updated);
  };

  // EDIT NAME
  const updateName = (id, name) => {
    const updated = leads.map((l) =>
      l.id === id ? { ...l, name } : l
    );
    saveData(updated);
  };

  // DELETE
  const deleteLead = (id) => {
    const updated = leads.filter((l) => l.id !== id);
    saveData(updated);
  };

  // CONVERT TO CUSTOMER
  const convertToCustomer = (lead) => {
    const customers = JSON.parse(localStorage.getItem("customers")) || [];

    const newCustomer = {
      ...lead,
      status: "Active",
    };

    localStorage.setItem(
      "customers",
      JSON.stringify([newCustomer, ...customers])
    );

    deleteLead(lead.id);
  };

  // FILTER + SEARCH
  const filteredLeads = leads.filter((l) => {
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || l.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="p-6 min-h-screen bg-blue-50">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
        <h1 className="text-3xl font-bold text-blue-700">
          Sales Pipeline
        </h1>

        <div className="flex gap-3">
          {/* SEARCH */}
          <input
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-blue-300 bg-white text-black rounded px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500"
          />

          {/* FILTER */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-blue-300 bg-white text-black rounded px-2 py-1.5 text-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            {stages.map((s) => (
              <option key={s} value={s}>
                {columnTitles[s]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PIPELINE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

        {stages.map((stage) => {
          const stageLeads = filteredLeads.filter(
            (l) => l.status === stage
          );

          return (
            <div
              key={stage}
              className="bg-white border border-blue-100 rounded-xl shadow-md flex flex-col h-[460px]"
            >
              {/* COLUMN HEADER */}
              <div className="flex justify-between items-center px-3 py-2 border-b bg-blue-600 rounded-t-xl">
                <h2 className="text-sm font-semibold text-white">
                  {columnTitles[stage]}
                </h2>
                <span className="text-xs bg-white text-blue-600 px-2 py-0.5 rounded-full">
                  {stageLeads.length}
                </span>
              </div>

              {/* BODY */}
              <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-blue-50">

                {stageLeads.length === 0 ? (
                  <p className="text-center text-blue-400 text-sm mt-10">
                    No items
                  </p>
                ) : (
                  stageLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-3 rounded-lg shadow-sm border border-blue-200 bg-white hover:shadow-md transition"
                    >
                      {/* NAME EDIT */}
                      <input
                        value={lead.name}
                        onChange={(e) =>
                          updateName(lead.id, e.target.value)
                        }
                        className="w-full font-medium text-sm text-black border-none outline-none bg-transparent"
                      />

                      {/* STATUS */}
                      <select
                        value={lead.status}
                        onChange={(e) =>
                          updateStatus(lead.id, e.target.value)
                        }
                        className="mt-2 w-full border border-blue-300 rounded-md p-1.5 text-sm bg-white text-black focus:ring-2 focus:ring-blue-500"
                      >
                        {stages.map((s) => (
                          <option key={s} value={s}>
                            {columnTitles[s]}
                          </option>
                        ))}
                      </select>

                      {/* ACTIONS */}
                      <div className="flex justify-between mt-2 text-xs">

                        <button
                          onClick={() => convertToCustomer(lead)}
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          Convert
                        </button>

                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="text-red-500 hover:text-red-600 font-medium"
                        >
                          Delete
                        </button>

                      </div>
                    </div>
                  ))
                )}

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}