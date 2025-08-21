import ModNodeButton from '../components/ModNodeButton'

const modules = [
  { name: 'MOD-OMS',  icon: '🛒', route: '/oms' },
  { name: 'MOD-EMS',  icon: '⚡', route: '/ems' },
  { name: 'MOD-PMS',  icon: '📊', route: '/pms' },
  { name: 'MOD-RISK', icon: '🛡️', route: '/risk' },
  { name: 'MOD-OPS',  icon: '🛠️', route: '/ops' },
  { name: 'MOD-DATA', icon: '💾', route: '/data' },
  { name: 'MOD-AI',   icon: '🧠', route: '/ai' },
  { name: 'MOD-TBOX', icon: '🧪', route: '/tbox' },
  { name: 'MOD-INT',  icon: '🤖', route: '/int' }
]

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 relative">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-cyan-300 drop-shadow-lg mb-10">
        ⚡ MOD FINTECH SOLUTIONS
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {modules.map(m => <ModNodeButton key={m.name} {...m} />)}
      </div>
    </div>
  )
}
