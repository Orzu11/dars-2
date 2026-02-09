import { studentData } from '../data/studentData';

export default function MyGroups() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Mening guruhlarim ({studentData.groups.length} ta)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentData.groups.map(group => (
          <div key={group.id} className="bg-white p-6 rounded-xl shadow border border-gray-200 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3 text-blue-800">{group.name}</h3>
            
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Ustoz:</span> {group.teacher}</p>
              <p><span className="font-semibold">Boshlanish sanasi:</span> {group.startDate}</p>
              <p><span className="font-semibold">Jadval:</span> {group.schedule}</p>
              <p className="text-sm text-gray-600 mt-2">{group.description}</p>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Progress:</span>
                <span>{group.progress}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-3">
                <div 
                  className="bg-green-600 h-3 rounded-full transition-all"
                  style={{ width: `${group.progress}%` }}
                />
              </div>
            </div>

            <button className="mt-6 w-full bg-slate-800 hover:bg-blue-900 text-white py-3 rounded-lg font-medium transition">
              Guruhga kirish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}