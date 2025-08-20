import { useState } from 'react'
import { login, fetchMe } from './authService'
import useAuthStore from './useAuthStore'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { setUser, setToken } = useAuthStore()

  const handleLogin = async () => {
    try {
      const { session } = await login(email, password)
      setToken(session.access_token)
      const { user } = await fetchMe()
      setUser(user)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-sm bg-gray-800 p-6 rounded shadow">
        <h1 className="text-2xl mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-gray-700"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded bg-gray-700"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          Log In
        </button>
      </div>
    </div>
  )
}
