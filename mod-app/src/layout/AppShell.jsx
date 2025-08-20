import TopNav from './TopNav'
import { Outlet } from 'react-router-dom'

export default function AppShell() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-futuristic">
      <TopNav />
      <main className="p-6 flex-1">
        <Outlet />
      </main>
    </div>
  )
}
