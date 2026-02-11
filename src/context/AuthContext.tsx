import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  username: string
  fullName: string
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => boolean
  register: (username: string, password: string, fullName: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const login = (username: string, password: string): boolean => {
    if (username === 'orzu@gmail.com' && password === '123456') {
      const data = { username, fullName: 'Orzumurod Abdurahmonov' }
      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
      return true
    }
    return false
  }

  const register = (username: string, password: string, fullName: string): boolean => {
    if (username && password && fullName) {
      const data = { username, fullName }
      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}