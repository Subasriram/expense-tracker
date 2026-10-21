"use client";
import React from "react";
import Card from "./ui/Card";
import { useExpenseStore } from "../store/expenseStore";

export default function ExpenseSummary() {
  const expenses = useExpenseStore((s) => s.expenses);
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <Card className="mt-4">
      <h2 className="text-lg font-bold">Total Spending: ₹{total}</h2>
    </Card>
  );
}
