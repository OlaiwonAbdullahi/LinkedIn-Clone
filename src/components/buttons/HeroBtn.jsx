const HeroBtn = ({ children }) => {
  return (
    <button className="w-full md:w-full flex items-center justify-center gap-2 border border-gray-700 text-gray-700 p-3 rounded-full mb-4">
      {children}
    </button>
  );
};

export default HeroBtn;
