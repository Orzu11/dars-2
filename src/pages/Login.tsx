import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (login(username, password)) {
      navigate('/');
    } else {
      setError('Username yoki parol xato!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-slow-move z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
          backgroundSize: '130% 130%',
        }}
      />

      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-sm z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Tizimga kirish</h2>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              placeholder="Username kiriting"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Parol</label>
            <input
              type="password"
              placeholder="Parolingizni kiriting"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Kirish
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Hisobingiz yo'qmi?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Ro'yxatdan o'tish
          </a>
        </p>
      </div>
    </div>
  );
}