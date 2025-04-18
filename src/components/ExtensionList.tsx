import { useState } from "react";
import { extensions } from "../../data";
import { useGlobalContext } from "../context/globalContext";

const ExtensionList = () => {
  const { darktheme, activeFilter } = useGlobalContext();
  const [tools, setTools] = useState(extensions);

  const filteredTools = tools.filter((tool) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Active") return tool.isActive;
    return !tool.isActive;
  });

  const filterRemove = (index: number) => {
    setTools((prevTools) => prevTools.filter((_, i) => i !== index));
  };

  const toggleActive = (name: string) => {
    setTools((prevTools) =>
      prevTools.map((tools) =>
        tools.name === name ? { ...tools, isActive: !tools.isActive } : tools
      )
    );
  };

  const toggleBg = (value: boolean) => {
    if (darktheme) {
      return `${value ? "bg-customRed-400" : "bg-neutral-500"}`;
    } else {
      return `${value ? "bg-customRed-400" : "bg-neutral-300"}`;
    }
  };

  const gridBg = darktheme
    ? "bg-neutral-800 border border-neutral-600"
    : "bg-white shadow-md";

  const buttonClass = `${
    darktheme ? "border border-neutral-600" : "border border-neutral-400"
  } bg-transperant text-sm rounded-full py-1.5 px-4 font-nato hover:bg-customRed-400 hover:text-neutral-900 transition-bg duration-[0.15s] ease-in`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {filteredTools.map((tool, index) => (
        <div
          key={tool.name}
          className={`${gridBg} flex flex-col justify-between p-4 rounded-xl `}
        >
          <div className="flex items-start gap-4 mb-12">
            <img src={tool.logo} />
            <div>
              <p className="font-bold text-lg">{tool.name}</p>
              <p
                className={`text-sm font-medium ${
                  darktheme ? "text-neutral-300" : "text-neutral-600"
                } `}
              >
                {tool.description}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className={buttonClass} onClick={() => filterRemove(index)}>
              Remove
            </button>
            <button
              onClick={() => toggleActive(tool.name)}
              className={`w-9 h-5  rounded-full px-1 ${toggleBg(
                tool.isActive
              )}`}
            >
              <div
                className={`w-3.5 h-3.5 bg-white rounded-full transition-all duration-[0.15s] ease-in ${
                  tool.isActive ? "ml-4" : "mr-4"
                }`}
              ></div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtensionList;
