import { studentData } from '../data/studentData';

export default function Payments() {
  const groups = studentData.groups;
  const totalPaid = groups.reduce((sum, group) => sum + group.price, 0);

  // Jadval uchun misol ma'lumotlar (real backend bo‘lsa API dan keladi)
  const paymentHistory = [
    { id: 1, amount: 1500000, status: 'paid', type: 'Guruh to‘lovi (N101)', date: '06 Feb, 2026 12:04' },
    { id: 2, amount: 1500000, status: 'paid', type: 'Guruh to‘lovi (N101)', date: '27 Noy, 2025 17:03' },
    { id: 3, amount: 1500000, status: 'paid', type: 'Guruh to‘lovi (N102)', date: '18 Noy, 2025 18:50' },
    { id: 4, amount: 1500000, status: 'paid', type: 'Guruh to‘lovi (N103)', date: '15 Noy, 2025 11:49' },
    { id: 5, amount: 1500000, status: 'paid', type: 'Guruh to‘lovi (N101)', date: '31 Okt, 2025 15:37' },
    // ... qolgan 4 ta (jami 9 ta misol)
  ];

  return (
    <div className="space-y-8">
      {/* Yuqori filter bloki */}
      <div className="bg-white p-6 rounded-xl shadow border">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Holati
            </label>
            <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Barchasi</option>
              <option>To‘langan</option>
              <option>Kutilmoqda</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Boshlanish vaqti
            </label>
            <input type="date" className="w-full p-3 border rounded-lg" />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tugash vaqti
            </label>
            <input type="date" className="w-full p-3 border rounded-lg" />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mt-6 md:mt-0">
            Filtrlash
          </button>
        </div>
      </div>

      {/* Jadval */}
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">#</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Miqdori</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Holati</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">To‘lov turi</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Vaqt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {paymentHistory.map(payment => (
                <tr key={payment.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {payment.amount.toLocaleString()} so‘m
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {payment.status === 'paid' ? 'To‘langan' : 'Kutilmoqda'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t">
          <div className="text-sm text-gray-700">
            1-9 dan 9 gacha ko‘rsatilmoqda
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
              Oldingi
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Keyingi
            </button>
          </div>
        </div>
      </div>

      {/* Jami va eslatma */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-xl font-bold mb-4">Jami to‘langan</h3>
          <p className="text-4xl font-bold text-green-600">{totalPaid.toLocaleString()} so‘m</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-xl font-bold mb-4 text-yellow-800">Keyingi to‘lov</h3>
          <p className="text-lg">2026-yil 1-martgacha</p>
          <p className="text-sm text-gray-600 mt-2">Qarzdorlik: 0 so‘m</p>
        </div>
      </div>
    </div>
  );
}