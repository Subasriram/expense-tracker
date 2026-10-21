interface InputProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  min?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function Input({
  label,
  type = "text",
  value,
  placeholder,
  min,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        min={min}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
      />
    </div>
  );
}