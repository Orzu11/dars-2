import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Sidebar() {
  const { logout } = useAuth()

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 text-2xl font-bold">Student Panel</div>

      <nav className="flex-1 px-4">
        {[
          { to: '/', label: 'Bosh sahifa' },
          { to: '/payments', label: 'To‘lovlarim' },
          { to: '/groups', label: 'Guruhlarim' },
          { to: '/statistics', label: 'Ko‘rsatkichlarim' },
          { to: '/rating', label: 'Reyting' },
          { to: '/shop', label: 'Do‘kon' },
          { to: '/extra-lessons', label: 'Qo‘shimcha darslar' },
          { to: '/settings', label: 'Sozlamalar' },
        ].map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? 'block p-3 bg-blue-700 rounded mb-2'
                : 'block p-3 hover:bg-gray-700 rounded mb-2'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-gray-700">
        <button
          onClick={logout}
          className="w-full bg-orange-600 hover:bg-orange-800 text-white py-3 rounded font-medium"
        >
          Chiqish
        </button>
      </div>
    </div>
  )
}