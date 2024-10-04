import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`bg-scroll-primary cursor-pointer fixed right-0 sm:right-10 bottom-7 sm:bottom-16 px-2 py-2 text-primary z-50 rounded-sm transition-opacity duration-500 ease-in-out ${showScroll ? 'opacity-100' : 'opacity-0'
        }`}
      id="scroll-up"
      onClick={scrollToTop}
    >
      <span >
        <FaArrowUp />
      </span>
    </div>
  );
};

export default ScrollUp;
