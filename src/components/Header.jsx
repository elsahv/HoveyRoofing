import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header className="relative top-0 z-50">
      <nav className="flex justify-between p-4 w-full text-white  text-2xl">
        <a href="/" className="font-bold _textShadow">
          HoveyRoofing
        </a>
        <div className="flex _textShadow">
          <a href="/#about" className="px-1 md:block hidden">
            about
          </a>
          <a href="/#roof-styles" className="px-1 md:block hidden">
            roof styles
          </a>
        </div>
        <button className="py-2 px-5 text-white bg-black md:block hidden">
          <a href="/#contact">Contact Us</a>
        </button>
        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
