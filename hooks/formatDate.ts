export default function formatDate(dateString: string): Object {
    const date = new Date(dateString);
    const dayNumber = date.getDate();
    const dayName = date.toLocaleString('en-us', { weekday: 'long' });
  
    const trimmedDayName = dayName.slice(0, 3).toUpperCase();
  
    return { trimmedDayName, dayNumber };
  };