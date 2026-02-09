import { studentData } from '../data/studentData';

export default function Rating() {
  const rating = studentData.rating;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Reyting</h1>

      <div className="bg-white p-12 rounded-2xl shadow border border-gray-200 text-center max-w-xl mx-auto">
        <div className="text-8xl font-black text-blue-600 mb-4">
          {rating.place}
        </div>
        <p className="text-3xl font-semibold mb-2">o‘rin</p>
        <p className="text-xl text-gray-600 mb-6">
          Jami {rating.totalStudents} talaba ichida
        </p>
        <div className="inline-block bg-green-100 text-green-700 px-6 py-3 rounded-full text-lg font-medium">
          O‘tgan haftaga nisbatan {rating.change}
        </div>
      </div>
    </div>
  );
}