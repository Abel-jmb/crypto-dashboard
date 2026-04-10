import { useTheme } from "../contexts/themeContext";

const Header = () => {
  const { theme, handleTheme } = useTheme();

  return (
    <header className="p-5 dark:bg-gray-900 dark:text-amber-50 lg:p-8 lg:mb-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold tracking-tigh">Crypto Dashboard</h1>
        <div className="flex items-center justify-between gap-4">
          <label className="relative inline-flex h-6 w-12 cursor-pointer items-center">
            <input
              type="checkbox"
              onChange={handleTheme}
              className="peer sr-only"
            />
            <div className="absolute inset-0 rounded-full bg-gray-300 transition-colors duration-300 peer-checked:bg-linear-to-r peer-checked:from-[#378fe6] peer-checked:to-[#3eda82]"></div>
            <div className="absolute left-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6 dark:bg-slate-900"></div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
