// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom'
import { useUser } from '@supabase/auth-helpers-react'
import ModNodeButton from '../components/ModNodeButton'

const modules = [
  { name: 'MOD-OMS', icon: '🛒', route: '/oms' },
  { name: 'MOD-EMS', icon: '⚡', route: '/ems' },
  { name: 'MOD-PMS', icon: '📊', route: '/pms' },
  { name: 'MOD-RISK', icon: '🛡️', route: '/risk' },
  { name: 'MOD-OPS', icon: '⚙️', route: '/ops' },
  { name: 'MOD-DATA', icon: '💾', route: '/data' },
  { name: 'MOD-AI', icon: '🧠', route: '/ai' },
  { name: 'MOD-TBOX', icon: '🛠️', route: '/tbox' },
  { name: 'MOD-INT', icon: '📈', route: '/int' }
]

export default function Home() {
  const user = useUser()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle starfield background effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(white,transparent_1px)] bg-[length:40px_40px] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-cyan-400 tracking-widest drop-shadow-lg">
          ⚡ MOD FINTECH SOLUTIONS
        </h1>

        {/* Grid layout for now — switch to circle later if needed */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {modules.map(mod => (
            <ModNodeButton key={mod.name} {...mod} />
          ))}
        </div>

        <div className="mt-10 text-sm text-white/60">{user?.email}</div>
        <button
          onClick={() => navigate('/logout')}
          className="absolute top-4 right-4 text-xs border border-white rounded px-3 py-1 hover:bg-white hover:text-black transition"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
