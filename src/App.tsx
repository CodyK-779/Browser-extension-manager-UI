import ActiveFilter from "./components/ActiveFilter";
import CoderLink from "./components/CoderLink";
import ExtensionList from "./components/ExtensionList";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context/globalContext";

const App = () => {
  const { darktheme } = useGlobalContext();

  return (
    <div
      className={`${
        darktheme
          ? "bg-dark-gradient text-white"
          : "bg-light-gradient text-black"
      } min-h-screen py-4 sm:py-6 px-4 md:px-20 lg:px-32`}
    >
      <Navbar />
      <ActiveFilter />
      <ExtensionList />
      <CoderLink />
    </div>
  );
};

export default App;
