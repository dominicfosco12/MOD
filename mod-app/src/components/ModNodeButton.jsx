import { useNavigate } from 'react-router-dom'

export default function ModNodeButton({ name, icon, route }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(route)}
      className="
        w-28 h-28 md:w-32 md:h-32 rounded-full
        bg-gradient-to-br from-blue-600 to-cyan-500
        text-white shadow-lg ring-1 ring-cyan-400/30
        hover:scale-110 hover:ring-cyan-300/60 hover:shadow-cyan-400/50
        transition-all duration-200 flex flex-col items-center justify-center
      "
      style={{ boxShadow: 'var(--neon-shadow)' }}
    >
      <div className="text-3xl">{icon}</div>
      <div className="text-xs mt-1 font-semibold">{name}</div>
    </button>
  )
}
