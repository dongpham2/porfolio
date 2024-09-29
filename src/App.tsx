import { Switch } from "./components/switch"
import { useTheme } from "./components/theme-provider"

function App() {
  const { setTheme } = useTheme()
  
  const onChangeTheme = () => {
    setTheme("light")
  }
  return (
    <>
      <Switch onChange={onChangeTheme}/>
    </>
  )
}

export default App
