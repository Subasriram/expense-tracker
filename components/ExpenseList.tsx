"use client";
import React, { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { useExpenseStore, Expense } from "../store/expenseStore";

export default function ExpenseList() {
  const { expenses, deleteExpense, editExpense, filterCategory } = useExpenseStore();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const filteredExpenses =
    filterCategory === "All"
      ? expenses
      : expenses.filter((e) => e.category === filterCategory);

  const handleEdit = (expense: Expense) => {
    setEditingId(expense.id);
    setTitle(expense.title);
    setAmount(String(expense.amount));
    setCategory(expense.category);
  };

  const saveEdit = () => {
    if (editingId !== null) {
      editExpense(editingId, { title, amount: Number(amount), category });
      setEditingId(null);
      setTitle("");
      setAmount("");
      setCategory("");
    }
  };

  return (
    <div className="space-y-4">
      {filteredExpenses.map((expense) => (
        <Card key={expense.id}>
          {editingId === expense.id ? (
            <div className="space-y-2">
              <input
                className="border p-2 w-full rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="border p-2 w-full rounded"
                value={amount}
                type="number"
                onChange={(e) => setAmount(e.target.value)}
              />
              <input
                className="border p-2 w-full rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <Button variant="primary" onClick={saveEdit}>Save</Button>
              <Button variant="secondary" onClick={() => setEditingId(null)}>Cancel</Button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">{expense.title}</p>
                <p>₹{expense.amount} — {expense.category}</p>
              </div>
              <div className="space-x-2">
                <Button variant="secondary" onClick={() => handleEdit(expense)}>Edit</Button>
                <Button variant="danger" onClick={() => deleteExpense(expense.id)}>Delete</Button>
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
