import { addDays, getISOWeekYear, getWeek, startOfWeek } from "date-fns"

export const getActivityLevel = (hours: number) => {  
  if (hours > 35) return 3      // high
  if (hours > 15 ) return 2       // medium
  if (hours > 0) return 1      // low
  return 0                      // none
}
type DailyActivity = { date: string; hours: number; level: number }


/**
 * Takes in an array of daily activities that are sorted by most recent to oldest days
 * and returns a 2D array of daily activities grouped by week. 
 * Where the first element of the array is the most recent week.
 * The days are sorted with Monday as the first day of the week and Sunday as the last day of the week. 
 */
export const transformDailyDataToGrid = (data: DailyActivity[]): DailyActivity[][] => {
  let weeks: DailyActivity[][] = []
  let currentWeekIndex = 0
  data.forEach((day, index) => {
    const dayOfWeek = new Date(day.date).getDay()
    const weekOfYear = getWeek(new Date(day.date))
    currentWeekIndex = weekOfYear

    if(!weeks[currentWeekIndex]) {
      weeks[currentWeekIndex] = []
      // get date of the first day of the week
      const firstDayOfWeek = startOfWeek(new Date(day.date))
      for(let i = 0; i < 7; i++) {
        weeks[currentWeekIndex].push({ date: addDays(firstDayOfWeek, i).toISOString(), hours: 0, level: 0 })
      } 
    }
    weeks[currentWeekIndex][dayOfWeek] = day
  })
  // delete empty weeks
  weeks = weeks.filter(week => week.length > 0)
  // most recent week should be first
  weeks.reverse()
  return weeks
}