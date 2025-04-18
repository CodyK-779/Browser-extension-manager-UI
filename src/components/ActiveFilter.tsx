import { useGlobalContext } from "../context/globalContext";

const ActiveFilter = () => {
  const { darktheme, activeFilter, setActiveFilter } = useGlobalContext();

  const buttonStyleFun = (buttontype: string) => {
    const buttonClass =
      "rounded-full py-1.5 px-4 font-noto transition-bg duration-[0.15s] ease-in";
    if (darktheme) {
      return `${buttonClass} ${
        activeFilter === buttontype
          ? "bg-customRed-400 text-neutral-900 hover:bg-customRed-500"
          : "bg-neutral-700 border border-neutral-600 hover:bg-neutral-600"
      }`;
    } else {
      return `${buttonClass} ${
        activeFilter === buttontype
          ? "bg-customRed-400 text-white shadow hover:bg-customRed-500"
          : "bg-white shadow hover:bg-neutral-100"
      }`;
    }
  };

  return (
    <div
      className={`${
        darktheme ? "text-white" : "text-black"
      } flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 mb-8`}
    >
      <h1 className="text-4xl font-[700]">Extensions List</h1>
      <div className="flex items-center gap-3">
        {["All", "Active", "Inactive"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={buttonStyleFun(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilter;
