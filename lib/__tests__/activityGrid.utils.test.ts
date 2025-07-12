// Import the function to test
import { transformDailyDataToGrid } from '../activityGrid.utils'
import { getActivityLevel } from '../activityLevel'

describe('activityGrid.utils', () => {
  describe('getActivityLevel', () => {
    it('should return 0 for 0 hours', () => {
      expect(getActivityLevel(0)).toBe(0)
    })

    it('should return 1 for low activity (1-15 hours)', () => {
      expect(getActivityLevel(1)).toBe(1)
      expect(getActivityLevel(10)).toBe(1)
      expect(getActivityLevel(15)).toBe(1)
    })

    it('should return 2 for medium activity (16-35 hours)', () => {
      expect(getActivityLevel(16)).toBe(2)
      expect(getActivityLevel(25)).toBe(2)
      expect(getActivityLevel(35)).toBe(2)
    })

    it('should return 3 for high activity (36+ hours)', () => {
      expect(getActivityLevel(36)).toBe(3)
      expect(getActivityLevel(50)).toBe(3)
      expect(getActivityLevel(100)).toBe(3)
    })

    it('should handle edge cases', () => {
      expect(getActivityLevel(0.5)).toBe(1)
      expect(getActivityLevel(15.5)).toBe(2)
      expect(getActivityLevel(35.5)).toBe(3)
    })
  })

  describe('transformDailyDataToGrid', () => {
    it('should return an array of objects with date, hours, and level', () => {
      const data = [
          {
              "date": "2025-07-12T00:00:00.000Z",
              "hours": 5,
              "level": 1
          },
          {
              "date": "2025-07-11T00:00:00.000Z",
              "hours": 39,
              "level": 3
          },
          {
              "date": "2025-07-10T00:00:00.000Z",
              "hours": 41,
              "level": 3
          },
          {
              "date": "2025-07-09T00:00:00.000Z",
              "hours": 39,
              "level": 3
          },
          {
              "date": "2025-07-08T00:00:00.000Z",
              "hours": 34,
              "level": 2
          },
          {
              "date": "2025-07-07T00:00:00.000Z",
              "hours": 29,
              "level": 2
          },
          {
              "date": "2025-07-06T00:00:00.000Z",
              "hours": 12,
              "level": 1
          },
          {
              "date": "2025-07-05T00:00:00.000Z",
              "hours": 13,
              "level": 1
          },
          {
              "date": "2025-07-04T00:00:00.000Z",
              "hours": 23,
              "level": 2
          },
          {
              "date": "2025-07-03T00:00:00.000Z",
              "hours": 43,
              "level": 3
          },
          {
              "date": "2025-07-02T00:00:00.000Z",
              "hours": 42,
              "level": 3
          },
          {
              "date": "2025-07-01T00:00:00.000Z",
              "hours": 42,
              "level": 3
          },
          {
              "date": "2025-06-30T00:00:00.000Z",
              "hours": 32,
              "level": 2
          },
          {
              "date": "2025-06-29T00:00:00.000Z",
              "hours": 19,
              "level": 2
          },
          {
              "date": "2025-06-28T00:00:00.000Z",
              "hours": 17,
              "level": 2
          },
          {
              "date": "2025-06-27T00:00:00.000Z",
              "hours": 31,
              "level": 2
          },
          {
              "date": "2025-06-26T00:00:00.000Z",
              "hours": 33,
              "level": 2
          },
          {
              "date": "2025-06-25T00:00:00.000Z",
              "hours": 42,
              "level": 3
          },
          {
              "date": "2025-06-24T00:00:00.000Z",
              "hours": 37,
              "level": 3
          },
          {
              "date": "2025-06-23T00:00:00.000Z",
              "hours": 31,
              "level": 2
          },
          {
              "date": "2025-06-22T00:00:00.000Z",
              "hours": 12,
              "level": 1
          },
          {
              "date": "2025-06-21T00:00:00.000Z",
              "hours": 22,
              "level": 2
          },
          {
              "date": "2025-06-20T00:00:00.000Z",
              "hours": 39,
              "level": 3
          },
          {
              "date": "2025-06-19T00:00:00.000Z",
              "hours": 25,
              "level": 2
          },
          {
              "date": "2025-06-18T00:00:00.000Z",
              "hours": 31,
              "level": 2
          },
          {
              "date": "2025-06-17T00:00:00.000Z",
              "hours": 27,
              "level": 2
          },
          {
              "date": "2025-06-16T00:00:00.000Z",
              "hours": 24,
              "level": 2
          },
          {
              "date": "2025-06-15T00:00:00.000Z",
              "hours": 14,
              "level": 1
          },
          {
              "date": "2025-06-14T00:00:00.000Z",
              "hours": 13,
              "level": 1
          },
          {
              "date": "2025-06-13T00:00:00.000Z",
              "hours": 42,
              "level": 3
          },
          {
              "date": "2025-06-12T00:00:00.000Z",
              "hours": 43,
              "level": 3
          },
          {
              "date": "2025-06-11T00:00:00.000Z",
              "hours": 37,
              "level": 3
          },
          {
              "date": "2025-06-10T00:00:00.000Z",
              "hours": 36,
              "level": 3
          },
          {
              "date": "2025-06-09T00:00:00.000Z",
              "hours": 38,
              "level": 3
          },
          {
              "date": "2025-06-08T00:00:00.000Z",
              "hours": 12,
              "level": 1
          },
          {
              "date": "2025-06-07T00:00:00.000Z",
              "hours": 23,
              "level": 2
          },
          {
              "date": "2025-06-06T00:00:00.000Z",
              "hours": 30,
              "level": 2
          },
          {
              "date": "2025-06-05T00:00:00.000Z",
              "hours": 29,
              "level": 2
          },
          {
              "date": "2025-06-04T00:00:00.000Z",
              "hours": 30,
              "level": 2
          },
          {
              "date": "2025-06-03T00:00:00.000Z",
              "hours": 24,
              "level": 2
          },
          {
              "date": "2025-06-02T00:00:00.000Z",
              "hours": 14,
              "level": 1
          },
          {
              "date": "2025-06-01T00:00:00.000Z",
              "hours": 4,
              "level": 1
          },
          {
              "date": "2025-05-31T00:00:00.000Z",
              "hours": 6,
              "level": 1
          },
          {
              "date": "2025-05-30T00:00:00.000Z",
              "hours": 34,
              "level": 2
          },
          {
              "date": "2025-05-29T00:00:00.000Z",
              "hours": 46,
              "level": 3
          },
          {
              "date": "2025-05-28T00:00:00.000Z",
              "hours": 24,
              "level": 2
          },
          {
              "date": "2025-05-27T00:00:00.000Z",
              "hours": 18,
              "level": 2
          },
          {
              "date": "2025-05-26T00:00:00.000Z",
              "hours": 20,
              "level": 2
          },
          {
              "date": "2025-05-25T00:00:00.000Z",
              "hours": 8,
              "level": 1
          },
          {
              "date": "2025-05-24T00:00:00.000Z",
              "hours": 14,
              "level": 1
          },
          {
              "date": "2025-05-23T00:00:00.000Z",
              "hours": 16,
              "level": 2
          },
          {
              "date": "2025-05-22T00:00:00.000Z",
              "hours": 20,
              "level": 2
          },
          {
              "date": "2025-05-21T00:00:00.000Z",
              "hours": 27,
              "level": 2
          },
          {
              "date": "2025-05-20T00:00:00.000Z",
              "hours": 24,
              "level": 2
          },
          {
              "date": "2025-05-19T00:00:00.000Z",
              "hours": 14,
              "level": 1
          },
          {
              "date": "2025-05-18T00:00:00.000Z",
              "hours": 6,
              "level": 1
          },
          {
              "date": "2025-05-17T00:00:00.000Z",
              "hours": 11,
              "level": 1
          },
          {
              "date": "2025-05-16T00:00:00.000Z",
              "hours": 14,
              "level": 1
          },
          {
              "date": "2025-05-15T00:00:00.000Z",
              "hours": 12,
              "level": 1
          },
          {
              "date": "2025-05-14T00:00:00.000Z",
              "hours": 15,
              "level": 1
          },
          {
              "date": "2025-05-13T00:00:00.000Z",
              "hours": 24,
              "level": 2
          }
      ]
      const result = transformDailyDataToGrid(data)
      expect(result.length).toEqual(9)
      const firstWeek = result[0]
      expect(firstWeek.length).toEqual(7) // have 7 days in week
      // ensure that the days are sorted with Monday as the first day of the week and Sunday as the last day of the week
      const firstDayOfWeek = new Date(firstWeek[0].date)
      const lastDayOfWeek = new Date(firstWeek[6].date)
      expect(firstDayOfWeek.getDay()).toEqual(0)
      expect(lastDayOfWeek.getDay()).toEqual(6)
    })
  })
}) 
