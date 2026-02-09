import { studentData } from '../data/studentData';

export default function Statistics() {
  const stats = studentData.statistics;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Mening ko‘rsatkichlarim</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200 text-center">
          <h3 className="text-gray-600 font-medium">Umumiy darslar</h3>
          <p className="text-5xl font-bold mt-2 text-blue-600">{stats.totalLessons}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-gray-200 text-center">
          <h3 className="text-gray-600 font-medium">Tugatilgan darslar</h3>
          <p className="text-5xl font-bold mt-2 text-green-600">{stats.completedLessons}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-gray-200 text-center">
          <h3 className="text-gray-600 font-medium">O‘qilgan soatlar</h3>
          <p className="text-5xl font-bold mt-2 text-purple-600">{stats.totalHours}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-gray-200 text-center">
          <h3 className="text-gray-600 font-medium">O‘rtacha baho</h3>
          <p className="text-5xl font-bold mt-2 text-orange-600">{stats.averageScore}%</p>
        </div>
      </div>
    </div>
  );
}