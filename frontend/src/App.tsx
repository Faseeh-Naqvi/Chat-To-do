import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Notfound from "./pages/NotFound"
import Chat from "./pages/Chat"
import { useAuth } from "./context/AuthContext"

function App() {
  console.log(useAuth()?.isLoggedIn)
  return (
  <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="*" element={< Notfound />}/>

    </Routes>
  </main>
  )
}

export default App
