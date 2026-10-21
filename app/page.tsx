import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Expense Tracker</h1>
      <ExpenseForm />
      <CategoryFilter />
      <ExpenseList />
      <ExpenseSummary />
    </div>
  );
}
