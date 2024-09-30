import { Switch } from '@/components/switch';
import { useTheme } from '@/components/theme-provider';
import { Link, useLocation } from 'react-router-dom'
import logo from "@/assets/logo.png"

const navbarItem = [
  {
    path: "/home",
    route: "Home",
  },
  {
    path: "/blog",
    route: "Blog",
  },
  {
    path: "/experience",
    route: "Experience",
  },
  {
    path: "/project",
    route: "Project",
  },
  {
    path: "/tech-stack",
    route: "Tech stack",
  },
]

const NavBar = () => {
  const location = useLocation();
  const {theme, setTheme } = useTheme()

  const handleToggleColorMode = () => {
    if(theme === "light") {
      setTheme("dark")
    } else {
       setTheme("light")
    }
  }

  return (
    <nav className='h-16 bg-navbar-primary p-4 pt-0 sticky top-0 right-0 left-0 border border-b-primary-foreground'>
      <div className='flex justify-between items-center text-text-secondary'>
        <Link to="/home"><img src={logo} alt="logo" className='size-16'/></Link>
        <div className='items-center gap-5 hidden md:flex'>
          {navbarItem.map((item, index) => (
              <Link to={item.path} key={index} className={`hover:text-text-primary ${location.pathname === item.path ? 'text-text-primary' : ''}`}>{item.route}</Link>
          ))}
          <Switch onClick={handleToggleColorMode}/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar