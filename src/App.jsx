import { Navbar, Footer, Hero, Contact} from "./components"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
