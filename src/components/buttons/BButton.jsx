const BButton = ({ children }) => {
  return (
    <div>
      <button className="border border-blue text-blue rounded-full p-1 w-24 h-10 font-semibold text-base whitespace-nowrap bg-white">
        {children}
      </button>
    </div>
  );
};

export default BButton;
