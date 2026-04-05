"use client";

import { useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addTask = () => {
    if (!form.title) return;

    const newTask = {
      id: Date.now(),
      ...form,
      status: "Pending",
    };

    setTasks([newTask, ...tasks]);

    setForm({
      title: "",
      description: "",
      dueDate: "",
    });
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Pending"
                  ? "Completed"
                  : "Pending",
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Tasks</h1>
        <span className="text-blue-600 font-medium">
          Total: {tasks.length}
        </span>
      </div>

      {/* FORM */}
      <div className="bg-white border border-blue-100 p-5 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Create Task
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Task Title"
            className="border border-blue-300 bg-white text-black p-2 rounded focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
            className="border border-blue-300 bg-white text-black p-2 rounded focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border border-blue-300 bg-white text-black p-2 rounded col-span-2 focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <button
          onClick={addTask}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* TASK LIST */}
      <div className="bg-white border border-blue-100 rounded-xl shadow p-4">

        {tasks.length === 0 ? (
          <p className="text-center text-blue-400">
            No tasks yet
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="border border-blue-200 p-4 mb-3 rounded flex justify-between items-center hover:bg-blue-50 transition"
            >
              <div>
                <h3 className="font-semibold text-black">
                  {task.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {task.description}
                </p>
                <p className="text-sm text-gray-700">
                  Due: {task.dueDate || "No date"}
                </p>
              </div>

              <div className="flex gap-3 items-center">

                <span
                  className={`px-3 py-1 rounded text-sm ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {task.status}
                </span>

                <button
                  onClick={() => toggleStatus(task.id)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Toggle
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
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
}