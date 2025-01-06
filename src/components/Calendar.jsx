import { eachDayOfInterval, endOfMonth, format, getDay, startOfMonth } from "date-fns";
import { TbMoodKid, TbMoodCheck, TbMoodCog } from "react-icons/tb";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {
  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  })

  const startDayIndex = getDay(firstDayOfMonth);

  const classToday = (index) => {
    switch(index) {
      case 5:
        return <TbMoodCog/>
      case 0:
        return <TbMoodCheck/>
      case 7:
        return <TbMoodKid/>
      case 14:
        return <TbMoodKid/>
      case 12:
        return <TbMoodCog/>
      case 21:
        return <TbMoodCheck/>
      case 19:
        return <TbMoodCog/>
      case 28:
        return <TbMoodKid/>
      case 26:
        return <TbMoodCog/>
      default:
        return ""
    }
  }

  return (
    <div className="h-full flex flex-col content-around p-4">
      <div>
        <h2 className="text-center font-bold mb-3">{format(currentDate, "MMMM yyyy")}</h2>
      </div>
      <hr/>
      <div className="flex-1 grid grid-cols-7 gap-2 mt-4">
        {WEEKDAYS.map((day) => {
          return (
            <div key={day} className="font-bold text-center text-[10px] sm:text-xs">
              {day}
            </div>
          );
        })}
        {Array.from({ length: startDayIndex}).map((_, index) => {
          return <div key={`empty-${index}`} className="border rounded-md"></div>
        })}
        {daysInMonth.map((day, index) => {
          return (
            <div key={index} className="grid grid-cols-2 gap-1 border rounded-md text-[8px] sm:text-base p-1 sm:p-2">
              {format(day, "d")}
              {classToday(index)}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Calendar