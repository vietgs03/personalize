import { useContext, useState, useRef, useEffect } from 'react';
import { DailyTasksContext } from '../../context/DailyTasksContext';
import { ThemeContext } from '../../context/ThemeContext';

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const { getAvailableDates } = useContext(DailyTasksContext);
  const { darkMode } = useContext(ThemeContext);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const availableDates = getAvailableDates();

  // Format date for display
  const formatDisplayDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Handle outside click to close calendar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get current date and set date limits
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  // Create a calendar for the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Create previous and next month arrays
  const prevMonthDays = [];
  const currentMonthDays = [];

  // Fill in the previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const prevMonth = new Date(currentYear, currentMonth, 0);
    const day = prevMonth.getDate() - i;
    const dateStr = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), day).toISOString().split('T')[0];
    prevMonthDays.push({ day, dateStr, isCurrentMonth: false });
  }

  // Fill in current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = new Date(currentYear, currentMonth, i).toISOString().split('T')[0];
    currentMonthDays.push({ 
      day: i, 
      dateStr, 
      isCurrentMonth: true,
      isToday: i === currentDate,
      hasData: availableDates.includes(dateStr)
    });
  }

  // Combine days from previous and current month
  const calendarDays = [...prevMonthDays, ...currentMonthDays];

  return (
    <div className="relative" ref={calendarRef}>
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${
          darkMode 
            ? 'bg-gray-700 hover:bg-gray-600' 
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {formatDisplayDate(selectedDate)}
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-2 transform transition-transform ${showCalendar ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showCalendar && (
        <div className={`absolute right-0 mt-2 w-64 rounded-md shadow-lg z-10 ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-center">
              {new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h3>
          </div>
          
          <div className="p-2">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                <div key={index} className="text-center text-xs text-gray-500 dark:text-gray-400 py-1">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (day.isCurrentMonth) {
                      setSelectedDate(day.dateStr);
                      setShowCalendar(false);
                    }
                  }}
                  className={`w-8 h-8 text-center text-sm rounded-full flex items-center justify-center transition-colors duration-200 ${
                    day.dateStr === selectedDate
                      ? 'bg-blue-500 text-white'
                      : day.isToday
                        ? darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                        : day.isCurrentMonth
                          ? day.hasData
                            ? darkMode ? 'bg-gray-700 text-green-300' : 'bg-green-50 text-green-800'
                            : ''
                          : 'text-gray-400 dark:text-gray-600'
                  }`}
                >
                  {day.day}
                  {day.hasData && (
                    <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-2 text-center">
              <button
                onClick={() => {
                  const today = new Date().toISOString().split('T')[0];
                  setSelectedDate(today);
                  setShowCalendar(false);
                }}
                className="text-xs text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Today
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;