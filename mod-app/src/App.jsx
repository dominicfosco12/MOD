// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './auth/LoginPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AppShell from './layout/AppShell'
import useAuthStore from './auth/useAuthStore'

function ProtectedRoute({ children }) {
  const token = useAuthStore(state => state.token)
  return token ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="oms" element={<div className="text-white">OMS</div>} />
        <Route path="pms" element={<div className="text-white">PMS</div>} />
        <Route path="ems" element={<div className="text-white">EMS</div>} />
        <Route path="risk" element={<div className="text-white">RISK</div>} />
        <Route path="ai" element={<div className="text-white">AI</div>} />
        <Route path="ops" element={<div className="text-white">OPS</div>} />
        <Route path="data" element={<div className="text-white">DATA</div>} />
        <Route path="tbox" element={<div className="text-white">TOOLBOX</div>} />
        <Route path="int" element={<div className="text-white">INT</div>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
