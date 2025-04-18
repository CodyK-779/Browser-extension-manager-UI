import { useGlobalContext } from "../context/globalContext";
import assets from "../assets/asset";

const Navbar = () => {
  const { darktheme, setDarkTheme } = useGlobalContext();

  return (
    <div
      className={`${
        darktheme ? "bg-neutral-800" : "bg-neutral-0"
      } rounded-xl sm:rounded-2xl flex items-center justify-between p-3 shadow mb-10 sm:mb-14`}
    >
      <img src={darktheme ? assets.logoDark : assets.logo} />
      <button
        className={`${
          darktheme
            ? "bg-neutral-700 hover:bg-neutral-600"
            : "bg-neutral-100 hover:bg-neutral-300"
        } p-2.5 rounded-lg transition-bg duration-[0.15s] ease-in`}
        onClick={() => setDarkTheme(!darktheme)}
      >
        <img className="w" src={darktheme ? assets.sun : assets.moon} />
      </button>
    </div>
  );
};

export default Navbar;
