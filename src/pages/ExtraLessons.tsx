import { studentData } from '../data/studentData';

export default function ExtraLessons() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Qo‘shimcha darslar</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentData.extraLessons.map(lesson => (
          <div key={lesson.id} className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
            <p className="text-gray-600 mb-2">{lesson.description}</p>
            <p className="text-sm text-gray-500 mb-4">Davomiyligi: {lesson.duration}</p>
            <p className="text-xl font-bold text-green-600">{lesson.price.toLocaleString()} so‘m</p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
              Ro‘yxatdan o‘tish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}