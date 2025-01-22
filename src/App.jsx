import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer'
import Login from './components/Login'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <>
    <Router>
    <div className="flex flex-col min-h-screen">
    <Navbar/>
    <Routes>
    
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    <Route path = "/" element ={<ProtectedRoute element={Manager}/>}/>

    </Routes>
    <Footer />
    </div>
    </Router>
    </>
  )
}

export default App
