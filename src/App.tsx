import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Payments from './pages/Payments';
import MyGroups from './pages/MyGroups';
import Statistics from './pages/Statistics';
import Rating from './pages/Rating';
import Shop from './pages/Shop';
import ExtraLessons from './pages/ExtraLessons';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>  
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex min-h-screen">
                  <Sidebar />
                  <main className="flex-1 ml-64 bg-gray-50">
                    <div className="p-6 md:p-10">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/groups" element={<MyGroups />} />
                        <Route path="/statistics" element={<Statistics />} />
                        <Route path="/rating" element={<Rating />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/extra-lessons" element={<ExtraLessons />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<h1 className="text-4xl text-center py-20">404</h1>} />
                      </Routes>
                    </div>
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;