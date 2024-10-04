import { Switch } from "@/components/switch";
import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button";

const navbarItem = [
  {
    path: "/",
    route: "Home",
    targetId: "home-section", // ID của phần tử
  },
  {
    path: "/",
    route: "Experience",
    targetId: "experience-section",
  },
  {
    path: "/",
    route: "Tech stack",
    targetId: "tech-stack-section",
  },
  {
    path: "/",
    route: "Project",
    targetId: "project-section",
  },
  // {
  //   path: "/",
  //   route: "Blog",
  //   scrollPosition: 0,
  // },
];

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const [isHiddenMenu, setIsHiddenMenu] = useState<boolean>(false);
  const [, setActiveIndex] = useState<number>(0);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsHiddenMenu(false);
      }
    };

    if (isHiddenMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHiddenMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      navbarItem.forEach((item, index) => {
        const section = document.getElementById(item.targetId);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top - 60;
          const nextSection = navbarItem[index + 1]
            ? document.getElementById(navbarItem[index + 1].targetId)
            : null;
          const nextSectionTop = nextSection
            ? nextSection.getBoundingClientRect().top - 60
            : Infinity;

          if (scrollY >= sectionTop && scrollY < nextSectionTop) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickScrollToSection = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top - 64;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleToggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleToggleMenu = () => {
    setIsHiddenMenu(!isHiddenMenu);
  };

  return (
    <nav className="h-16 bg-navbar-primary p-4 pt-0 sticky top-0 right-0 left-0 border border-b-primary-foreground z-50">
      <div className="flex justify-between items-center text-text-secondary relative">
        <Link to='/' className="cursor-pointer" onClick={(e) => {
          e.preventDefault()
          handleClickScrollToSection("#home-section")
        }}><img src={logo} alt="logo" className="size-16" /></Link>
        <div className="items-center gap-5 hidden md:flex">
          {navbarItem.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              // className={`hover:text-text-primary ${activeIndex === index ? "text-text-primary" : ""}`}
              className={`hover:text-text-primary`}
              onClick={() => handleClickScrollToSection(item.targetId)}
            >
              {item.route}
            </Link>
          ))}
          <Switch onClick={handleToggleColorMode} />
        </div>
        <Button
          data-collapse-toggle="navbar-sticky"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={handleToggleMenu}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Button>
        {/* nav responsive */}
        {isHiddenMenu && (
          <div
            ref={menuRef}
            className={`gap-5 md:hidden flex flex-col absolute -right-2 top-2 bg-navbar-primary w-full max-w-60 border px-4 py-2 transition-all duration-300 ease-in-out transform ${isHiddenMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
          >
            <div className="text-end">
              <Button
                variant="ghost"
                size="default"
                className="text-2xl cursor-pointer w-fit"
                onClick={() => setIsHiddenMenu(false)}
              >
                x
              </Button>
            </div>
            {navbarItem.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={`hover:text-text-primary`}
                onClick={() => handleClickScrollToSection(item.targetId)}
              >
                {item.route}
              </Link>
            ))}
            <Switch onClick={handleToggleColorMode} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
