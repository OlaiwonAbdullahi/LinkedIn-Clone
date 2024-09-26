import MainNavBar from "../components/MainNavBar";

const Network = () => {
  return (
    <div className=" bg-lightgrey">
      <MainNavBar />
      <div className="flex flex-row justify-between">
        <div className="basis-1/4 h-full w-full bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col">
          <h2 className="p-2">Manage my network</h2>
          <hr />
          <h2 className="p-2">Manage my network</h2>
          <h2 className="p-2">Manage my network</h2>
          <h2 className="p-2">Manage my network</h2>
        </div>
        <div className="basis-3/4 h-full w-full bg-white md:m-7 m-0 rounded-xl border border-gray-400 md:flex md:flex-col"></div>
      </div>
    </div>
  );
};

export default Network;
