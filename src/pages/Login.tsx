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
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: '140% 140%',  // kattaroq qilib harakat sezilarli bo‘ladi
        }}
      />

      <div className="absolute inset-0 bg-black/35 z-0"></div>

      <div className="relative bg-white p-8 rounded-xl shadow-lg w-full max-w-md z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Tizimga kirish
        </h2>

        {error && (
          <p className="text-red-600 mb-6 text-center font-medium bg-red-50 p-3 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Emailingizni kiriting</label>
            <input
              type="text"
              placeholder="Username kiriting"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Parol</label>
            <input
              type="password"
              placeholder="Parolingizni kiriting"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
          >
            Kirish
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Hisobingiz yo‘qmi?{' '}
          <a href="/register" className="text-blue-600 hover:underline font-medium">
            Ro‘yxatdan o‘tish
          </a>
        </p>
      </div>
    </div>
  );
}