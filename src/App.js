import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import Places from './screens/Places'

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<p>Face</p>} />
          <Route path="/lugares" element={<Places />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
