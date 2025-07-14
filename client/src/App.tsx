import About from "./pages/About"
import Home from "./pages/Home"
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>          
        </Routes>
      </main>
    </Router>
  )
}

export default App
