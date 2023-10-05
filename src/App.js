import './App.css'
import {Route, Link, Routes, Navigate} from "react-router-dom"
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import LogIn from './components/LogIn/LogIn'
import Search from './components/Search/Search'

function App() {

  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>

    </div>
  )
}

export default App;
