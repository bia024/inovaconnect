interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
}

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded font-bold transition duration-200 disabled:opacity-50";
  const variants = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      {...props} 
    />
  );
};