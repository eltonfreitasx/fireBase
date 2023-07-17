import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './src/pages/Home'
import { Register } from './src/pages/Register'
import { Admin } from './src/pages/Admin'
import { Private } from './src/routes/Private'

export function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Private><Admin /></Private>}/>
            </Routes>
        </Router>
    )
}