import { useContext } from "react"
import Header from "./components/Header"
import { ThemeContext } from "./context/Themeprovider"


function App() {
  const context = useContext(ThemeContext)

  return (
    <>
      <div className={`min-h-screen ${context.theme === "light" ? "": "bg-black text-white"}`}>
       <Header/>
       <main>
       </main>
      </div>
    </>
  )
}

export default App