import Header from "./components/Header"
import Home from "./pages/Home"
import useLocalStorage from "use-local-storage"

const App = () => {
  //check for the user's default theme
  const preferences = window.matchMedia('(prefers-color-scheme: dark)').matches

  //state variable that determines which color mode to use
  const [isDark, setIsDark] =useLocalStorage('isDark', preferences)

  //theme toggle handler function 
  const handleThemeToggle = () => setIsDark(!isDark)


  return (
    <main className="bg-red-200" data-theme={isDark ? 'dark' : 'light'}>
      <Header handleThemeToggle={handleThemeToggle} isChecked={isDark}/>
      <Home/>
    </main>
  )
}

export default App
