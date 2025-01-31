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
      case 2:
        return <TbMoodCog/>
      case 4:
        return <TbMoodCheck/>
      case 11:
        return <TbMoodKid/>
      case 25:
        return <TbMoodKid/>
      case 9:
        return <TbMoodCog/>
      case 18:
        return <TbMoodCheck/>
      case 16:
        return <TbMoodCog/>
      case 23:
        return <TbMoodCog/>
      case 30:
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