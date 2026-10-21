"use client";
import React from "react";
import { useExpenseStore } from "../store/expenseStore";
import Button from "./ui/Button";
import Card from "./ui/Card";

const categories = ["All", "Food", "Travel", "Bills", "Shopping"];

export default function CategoryFilter() {
  const filterCategory = useExpenseStore((s) => s.filterCategory);
  const setFilterCategory = useExpenseStore((s) => s.setFilterCategory);

  return (
    <Card className="mb-4 flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={filterCategory === cat ? "primary" : "secondary"}
          onClick={() => setFilterCategory(cat)}
        >
          {cat}
        </Button>
      ))}
    </Card>
  );
}
