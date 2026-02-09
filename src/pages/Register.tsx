import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (register(username, password, fullName)) {
      navigate('/');
    } else {
      setError('Ma’lumotlar noto‘g‘ri yoki username band!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-slow-move z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: '140% 140%',
        }}
      />

      <div className="absolute inset-0 bg-black/35 z-0"></div>

      <div className="relative bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/30 z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Ro‘yxatdan o‘tish
        </h2>

        {error && (
          <p className="text-red-600 mb-6 text-center font-medium bg-red-100/80 p-3 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Ism Familya</label>
            <input
              type="text"
              placeholder="Ism Familyangizni kiriting"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Username</label>
            <input
              type="text"
              placeholder="Username tanlang"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Parol</label>
            <input
              type="password"
              placeholder="Parol kiriting"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-cyan-700 transition duration-300 shadow-lg"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Hisobingiz bormi?{' '}
          <a href="/login" className="text-blue-600 hover:underline font-medium">
            Kirish
          </a>
        </p>
      </div>
    </div>
  );
}