import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setInterval> | undefined = undefined;

    const showNavbar = () => {
      setVisible(true);
      setLastInteraction(Date.now());
    };

    const handleInteraction = () => {
      showNavbar();
    };

    const handleScroll = () => {
      showNavbar();
    };

    const handleFirstInteraction = () => {
      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true;
        showNavbar();
        window.removeEventListener("scroll", handleFirstInteraction);
        window.removeEventListener("click", handleFirstInteraction);
      }
    };

    if (location.hash === "#/" || location.hash === "#/info") {
      // INFO 页面一开始隐藏，首次滚动或点击才显示
      setVisible(false);
      hasInteractedRef.current = false;
      window.addEventListener("scroll", handleFirstInteraction);
      window.addEventListener("click", handleFirstInteraction);
    } else {
      // 其他页面随交互显示 navbar
      setVisible(true);
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("mousemove", handleInteraction);
      window.addEventListener("click", handleInteraction);
    }

    const checkInactivity = () => {
      const now = Date.now();
      if (
        now - lastInteraction > 1000 &&
        location.hash !== "#/" &&
        location.hash !== "#/info"
      ) {
        setVisible(false);
      }
    };
    timeout = setInterval(checkInactivity, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
      clearInterval(timeout);
    };
  }, [location.hash, lastInteraction]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 bg-white transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <nav className=" mx-auto px-12 py-4 flex justify-between flex-row items-center">
        <Link
          to="/info"
          className="cursor-none text-gray-400 font-extralight hover:text-black hover:underline  underline-offset-4 hover:font-bold transition duration-300"
        >
          INFO
        </Link>
        <Link
          to="/gallery"
          className="cursor-none text-gray-400 font-extralight hover:text-black hover:underline  underline-offset-4 hover:font-bold transition duration-300"
        >
          GALLERY
        </Link>
        <Link
          to="/index"
          className="cursor-none text-gray-400 font-extralight hover:text-black hover:underline  underline-offset-4 hover:font-bold transition duration-300"
        >
          INDEX
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
