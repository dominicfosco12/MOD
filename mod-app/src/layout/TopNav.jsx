import { logout } from '../auth/authService'
import useAuthStore from '../auth/useAuthStore'
import { useNavigate } from 'react-router-dom'

export default function TopNav() {
  const { user, logout: clearStore } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    clearStore()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-20 bg-black/60 backdrop-blur-md border-b border-white/10 px-6 py-3 flex items-center justify-between">
      <span className="text-sm text-white/70">{user?.email}</span>
      <button
        onClick={handleLogout}
        className="px-3 py-1 rounded border border-white/30 text-sm hover:bg-white hover:text-black transition"
      >
        Logout
      </button>
    </header>
  )
}
