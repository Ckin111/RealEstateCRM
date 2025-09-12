import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hours = () => {
  const weeklyData = [
    {
      date: '09/30/25',
      hours: { Andrew: 8, Robert: 4, Colin: 3, Niccolls: 4, Jonathan: 3 }
    },
    {
      date: '09/29/25',
      hours: { Andrew: 2, Robert: 2, Colin: 1, Niccolls: 5, Jonathan: 2 }
    },
    {
      date: '09/28/25',
      hours: { Andrew: 1, Robert: 3, Colin: 4, Niccolls: 2, Jonathan: 4 }
    },
    {
      date: '09/27/25',
      hours: { Andrew: 2, Robert: 5, Colin: 5, Niccolls: 3, Jonathan: 5 }
    },
    {
      date: '09/26/25',
      hours: { Andrew: 4, Robert: 4, Colin: 2, Niccolls: 5, Jonathan: 3 }
    },
    {
      date: '09/25/25',
      hours: { Andrew: 3, Robert: 3, Colin: 3, Niccolls: 3, Jonathan: 2 }
    },
    {
      date: '09/24/25',
      hours: { Andrew: 5, Robert: 2, Colin: 4, Niccolls: 1, Jonathan: 5 }
    },
     {
      date: '09/23/25',
      hours: { Andrew: 5, Robert: 4, Colin: 3, Niccolls: 4, Jonathan: 3 }
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const teamMembers = ['Andrew', 'Robert', 'Colin', 'Niccolls', 'Jonathan'] as const;
  const itemsPerPage = 7;

  // Helper function to parse date for comparison
  const parseDate = (dateStr: string) => {
    const [month, day, year] = dateStr.split('/');
    return new Date(2000 + parseInt(year), parseInt(month) - 1, parseInt(day));
  };

  // Find the latest date entry
  const latestEntry = weeklyData.reduce((latest, current) => {
    const currentDate = parseDate(current.date);
    const latestDate = parseDate(latest.date);
    return currentDate > latestDate ? current : latest;
  }, weeklyData[0]);

  // Calculate statistics
  const totalHours = weeklyData.reduce((total, week) => {
    return total + Object.values(week.hours).reduce((sum, hours) => sum + hours, 0);
  }, 0);

  const averageHours = weeklyData.length > 0 ? Math.round(totalHours / weeklyData.length) : 0;

  const currentWeekHours = latestEntry 
    ? Object.values(latestEntry.hours).reduce((sum, hours) => sum + hours, 0)
    : 0;

  // Get start and end dates (chronologically ordered)
  const sortedData = [...weeklyData].sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
  const startDate = sortedData[0]?.date || '';
  const endDate = sortedData[sortedData.length - 1]?.date || '';

  // Pagination
  const totalPages = Math.ceil(weeklyData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = weeklyData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-slate-700 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Team Hours</h1>
          <p className="text-slate-300 text-lg">
            {startDate} - {endDate}
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="bg-slate-600 rounded-lg px-6 py-4 text-center">
            <h3 className="text-slate-300 text-sm font-medium mb-1">Avg. Hours:</h3>
            <p className="text-white text-2xl font-bold">{averageHours}</p>
          </div>
          <div className="bg-slate-600 rounded-lg px-6 py-4 text-center">
            <h3 className="text-slate-300 text-sm font-medium mb-1">Total Hours:</h3>
            <p className="text-white text-2xl font-bold">{totalHours}</p>
          </div>
          <div className="bg-slate-600 rounded-lg px-6 py-4 text-center">
            <h3 className="text-slate-300 text-sm font-medium mb-1">Weekly Hours:</h3>
            <p className="text-white text-2xl font-bold">{currentWeekHours}</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-slate-600 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Date</th>
                  {teamMembers.map(member => (
                    <th key={member} className="px-6 py-4 text-left text-white font-semibold">
                      {member}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.map((entry, index) => (
                  <tr key={index} className="border-t border-slate-500">
                    <td className="px-6 py-4 text-white font-medium">{entry.date}</td>
                    {teamMembers.map(member => (
                      <td key={member} className="px-6 py-4 text-white">
                        {entry.hours[member as keyof typeof entry.hours]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 py-4 border-t border-slate-500">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 text-slate-300 hover:text-white disabled:text-slate-500 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              
              <span className="text-white text-sm">
                {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 text-slate-300 hover:text-white disabled:text-silent-500 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Hours };