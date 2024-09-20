const Button = ({ children }) => {
  return (
    <div>
      <button className="border-2 border-textcolor text-textcolor rounded-full p-2 w-auto h-10 font-semibold text-base whitespace-nowrap">
        {children}
      </button>
    </div>
  );
};

export default Button;
