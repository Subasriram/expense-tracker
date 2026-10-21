import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
};

type ExpenseStore = {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id">) => void;
  editExpense: (id: number, updated: Omit<Expense, "id">) => void;
  deleteExpense: (id: number) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
};

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (expense) =>
        set((state) => ({
          expenses: [...state.expenses, { id: Date.now(), ...expense }],
        })),
      editExpense: (id, updated) =>
        set((state) => ({
          expenses: state.expenses.map((e) =>
            e.id === id ? { id, ...updated } : e
          ),
        })),
      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((e) => e.id !== id),
        })),
      filterCategory: "All",
      setFilterCategory: (category) => set({ filterCategory: category }),
    }),
    { name: "expense-storage" }
  )
);
