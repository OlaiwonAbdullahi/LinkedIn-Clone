const HeroBtn = ({ children }) => {
  return (
    <button className="w-full md:w-2/4 flex items-center justify-center gap-2 border border-gray-700 text-gray-700 p-3 rounded-full mb-4">
      {children}
    </button>
  );
};

export default HeroBtn;
