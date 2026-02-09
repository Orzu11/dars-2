import { studentData } from '../data/studentData';

export default function Shop() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Do‘kon</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentData.shopItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow border overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-xl font-bold text-green-600 mt-2">{item.price.toLocaleString()} so‘m</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Sotib olish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}