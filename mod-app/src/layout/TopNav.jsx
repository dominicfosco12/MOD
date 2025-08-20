import { logout } from '../auth/authService'
import useAuthStore from '../auth/useAuthStore'
import { useNavigate } from 'react-router-dom'

export default function TopNav() {
  const { user, firm, logout: clearStore } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    clearStore()
    navigate('/login')
  }

  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center text-white font-futuristic">
      <div>
        <span className="text-sm text-gray-400">{user?.email}</span>
      </div>
      <button
        onClick={handleLogout}
        className="border border-white px-3 py-1 rounded hover:bg-red-500"
      >
        Logout
      </button>
    </header>
  )
}
