"use client";
import React, { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { useExpenseStore } from "../store/expenseStore";

const categories = ["Food", "Travel", "Bills", "Shopping"];

export default function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const addExpense = useExpenseStore((s) => s.addExpense);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !category) return;
    console.log("Date.now():", Date.now());
    addExpense({ title, amount: Number(amount), category });
    setTitle("");
    setAmount("");
    setCategory("");
  };
  const Example=(a:String)=>{
    return a;
  }
  type Examples=String;
  //interface Examples{
    a:String;//
  //}//
  function display(e1: Examples) {
  console.log(e1);
}

display("dfghj")
  
  return (
    <Card className="mb-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          className="border p-2 w-full rounded"
          placeholder="Title"
          //value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 w-full rounded"
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
        />
        <select
          className="border p-2 w-full rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <Button type="submit" variant="primary">Add Expense</Button>
      </form>
    </Card>
  );
}
