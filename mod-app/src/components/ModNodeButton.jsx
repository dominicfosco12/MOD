// src/components/ModNodeButton.jsx
import { useNavigate } from 'react-router-dom'

export default function ModNodeButton({ name, icon, route }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(route)}
      className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/60 hover:scale-105 transition-all flex flex-col items-center justify-center"
    >
      <div className="text-3xl">{icon}</div>
      <div className="text-xs mt-1 font-semibold">{name}</div>
    </button>
  )
}
