import { studentData } from '../data/studentData'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Xush kelibsiz, {studentData.fullName.split(' ')[0]}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-600">Faol guruhlar</h3>
          <p className="text-4xl font-bold mt-2">{studentData.groups.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-600">Yakunlangan darslar</h3>
          <p className="text-4xl font-bold mt-2">{studentData.statistics.completedLessons}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-600">Reyting o‘rni</h3>
          <p className="text-4xl font-bold mt-2">{studentData.rating.place}-o‘rin</p>
        </div>
      </div>
    </div>
  )
}