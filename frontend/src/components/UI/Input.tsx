interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-slate-400">{label}</label>}
      <input 
        className={`p-2 bg-slate-700 rounded border border-slate-600 focus:outline-none focus:border-emerald-500 ${className}`} 
        {...props} 
      />
    </div>
  );
};