'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { format } from 'date-fns'
import { Globe, Download, AlertCircle } from 'lucide-react'
import { DiscordIcon } from '../icons/DiscordIcon'
import WorldMap from '../community/WorldMap'
import { DEFAULT_DOWNLOAD_URL, getDownloadLink } from '@/lib/downloadUtils'
import { 
  Tooltip as UITooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip'

// API Types
interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

interface WeeklyActivity {
  week_start: string
  total_hours: number
}

interface DailyActivity {
  date: string
  total_minutes: number
}

interface TotalHoursData {
  total_hours: number
}

interface AverageWeeklyHoursData {
  average_weekly_hours: number
}

// API Constants
const MARKETING_API_BASE = 'https://api.ebb.cool/api/marketing'

const MARKETING_ENDPOINTS = {
  WEEKLY_ACTIVITY: `${MARKETING_API_BASE}/weekly-activity`,
  TOTAL_HOURS: `${MARKETING_API_BASE}/total-hours`,
  AVERAGE_WEEKLY_HOURS: `${MARKETING_API_BASE}/average-weekly-hours`,
  DAILY_ACTIVITY: `${MARKETING_API_BASE}/daily-activity`,
} as const

// API Client Functions
async function fetchWeeklyActivity(): Promise<WeeklyActivity[]> {
  const response = await fetch(MARKETING_ENDPOINTS.WEEKLY_ACTIVITY)
  const result: ApiResponse<WeeklyActivity[]> = await response.json()
  
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to fetch weekly activity')
  }
  
  return result.data
}

async function fetchTotalHours(): Promise<number> {
  const response = await fetch(MARKETING_ENDPOINTS.TOTAL_HOURS)
  const result: ApiResponse<TotalHoursData> = await response.json()
  
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to fetch total hours')
  }
  
  return result.data.total_hours
}

async function fetchAverageWeeklyHours(): Promise<number> {
  const response = await fetch(MARKETING_ENDPOINTS.AVERAGE_WEEKLY_HOURS)
  const result: ApiResponse<AverageWeeklyHoursData> = await response.json()
  
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to fetch average weekly hours')
  }
  
  return result.data.average_weekly_hours
}

async function fetchDailyActivity(days: number = 90): Promise<DailyActivity[]> {
  const response = await fetch(`${MARKETING_ENDPOINTS.DAILY_ACTIVITY}?days=${days}`)
  const result: ApiResponse<DailyActivity[]> = await response.json()
  
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to fetch daily activity')
  }
  
  return result.data
}

// Transform API data for charts
function transformWeeklyDataForChart(data: WeeklyActivity[]) {
  const lastSixWeeks = data.slice(data.length - 6, data.length)
  return lastSixWeeks.map(item => ({
    week: format(new Date(item.week_start), 'MMM d'),
    hours: Math.round(item.total_hours)
  }))
}

function transformDailyDataForHeatmap(data: DailyActivity[]) {
  return data.map(item => {
    const hours = item.total_minutes / 60
    return {
      date: item.date,
      hours: Math.round(hours),
      level: hours < 15 ? 0 : hours < 25 ? 1 : hours < 35 ? 2 : 3
    }
  })
}

// Countries data
const mockCountries = [
  { name: 'United States', flag: '🇺🇸' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Vietnam', flag: '🇻🇳' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Brazil', flag: '🇧🇷' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Turkey', flag: '🇹🇷' },
  { name: 'South Korea', flag: '🇰🇷' },
  { name: 'Poland', flag: '🇵🇱' },
  { name: 'Russia', flag: '🇷🇺' },
  { name: 'Austria', flag: '🇦🇹' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'Portugal', flag: '🇵🇹' },
  { name: 'Taiwan', flag: '🇹🇼' },
  { name: 'Bangladesh', flag: '🇧🇩' },
  { name: 'Switzerland', flag: '🇨🇭' },
  { name: 'China', flag: '🇨🇳' },
  { name: 'Colombia', flag: '🇨🇴' },
  { name: 'Czechia', flag: '🇨🇿' },
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Indonesia', flag: '🇮🇩' },
  { name: 'Bulgaria', flag: '🇧🇬' },
  { name: 'Botswana', flag: '🇧🇼' },
  { name: 'Chile', flag: '🇨🇱' },
  { name: 'Denmark', flag: '🇩🇰' },
  { name: 'Ecuador', flag: '🇪🇨' },
  { name: 'Finland', flag: '🇫🇮' },
  { name: 'Guatemala', flag: '🇬🇹' },
  { name: 'Hong Kong', flag: '🇭🇰' },
  { name: 'Croatia', flag: '🇭🇷' },
  { name: 'Hungary', flag: '🇭🇺' },
  { name: 'Iraq', flag: '🇮🇶' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'Cambodia', flag: '🇰🇭' },
  { name: 'Kazakhstan', flag: '🇰🇿' },
  { name: 'Latvia', flag: '🇱🇻' },
  { name: 'Myanmar', flag: '🇲🇲' },
  { name: 'Mauritius', flag: '🇲🇺' },
  { name: 'Peru', flag: '🇵🇪' },
  { name: 'Philippines', flag: '🇵🇭' },
  { name: 'Romania', flag: '🇷🇴' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Tanzania', flag: '🇹🇿' },
  { name: 'Ukraine', flag: '🇺🇦' },
  { name: 'Uruguay', flag: '🇺🇾' },
]

// GitHub-style activity grid component
function ActivityGrid({ data, loading, error }: { 
  data: { date: string; hours: number; level: number }[], 
  loading: boolean, 
  error: string | null 
}) {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-20">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-violet-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-20 text-red-400">
        <AlertCircle className="h-4 w-4 mr-2" />
        <span className="text-sm">Failed to load activity</span>
      </div>
    )
  }

  type DayData = { date: string; hours: number; level: number }
  const weeks: DayData[][] = []
  let currentWeek: DayData[] = []
  
  data.forEach((day, index) => {
    const dayOfWeek = new Date(day.date).getDay()
    
    if (index === 0) {
      // Fill the first week with empty days if needed
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push({ date: '', hours: 0, level: 0 })
      }
    }
    
    currentWeek.push(day)
    
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  })
  
  if (currentWeek.length > 0) {
    // Fill the last week with empty days if needed
    while (currentWeek.length < 7) {
      currentWeek.push({ date: '', hours: 0, level: 0 })
    }
    weeks.push(currentWeek)
  }
  
  const levelColors = [
    'bg-gray-800', // 0: very low
    'bg-violet-900/40', // 1: low
    'bg-violet-700/60', // 2: medium
    'bg-violet-500/80', // 3: high
  ]
  
  return (
    <TooltipProvider>
      <div className="flex gap-2 overflow-x-auto">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-2">
            {week.map((day, dayIndex) => (
              day.date ? (
                <UITooltip key={`${weekIndex}-${dayIndex}`} delayDuration={300}>
                  <TooltipTrigger asChild>
                    <div
                      className={`w-4 h-4 rounded-sm ${levelColors[day.level]} hover:ring-1 hover:ring-violet-400 cursor-pointer`}
                    />
                  </TooltipTrigger>
                  <TooltipContent 
                    className="bg-gray-900 text-white border-gray-700"
                    side="top"
                    sideOffset={5}
                  >
                    <div className="text-center">
                      <div className="font-medium">
                        {format(new Date(day.date), 'MMM dd, yyyy')}
                      </div>
                      <div className="text-violet-300">
                        {day.hours} hours creating
                      </div>
                    </div>
                  </TooltipContent>
                </UITooltip>
              ) : (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-4 h-4 rounded-sm ${levelColors[day.level]}`}
                />
              )
            ))}
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}

// Helper function to get flag for any country
function getCountryFlagForDisplay(countryName: string): string {
  const ebbCountry = mockCountries.find(c => c.name === countryName)
  if (ebbCountry) return ebbCountry.flag

  const commonFlags: Record<string, string> = {
    'Algeria': '🇩🇿', 'Argentina': '🇦🇷', 'Egypt': '🇪🇬', 'Ethiopia': '🇪🇹',
    'Iran': '🇮🇷', 'Libya': '🇱🇾', 'Mali': '🇲🇱', 'Mongolia': '🇲🇳',
    'Niger': '🇳🇪', 'Saudi Arabia': '🇸🇦', 'Sudan': '🇸🇩', 'Chad': '🇹🇩',
    'Angola': '🇦🇴', 'Bolivia': '🇧🇴', 'Venezuela': '🇻🇪', 'Madagascar': '🇲🇬',
    'Namibia': '🇳🇦', 'South Africa': '🇿🇦', 'Somalia': '🇸🇴',
    'Democratic Republic of the Congo': '🇨🇩', 'Central African Republic': '🇨🇫',
    'Cameroon': '🇨🇲', 'Nigeria': '🇳🇬', 'Ivory Coast': '🇨🇮',
    'Burkina Faso': '🇧🇫', 'Senegal': '🇸🇳', 'Mauritania': '🇲🇷',
    'Morocco': '🇲🇦', 'Tunisia': '🇹🇳', 'Yemen': '🇾🇪', 'Oman': '🇴🇲',
    'United Arab Emirates': '🇦🇪', 'Qatar': '🇶🇦', 'Kuwait': '🇰🇼', 'Bahrain': '🇧🇭',
    'Afghanistan': '🇦🇫', 'Pakistan': '🇵🇰', 'Uzbekistan': '🇺🇿', 'Turkmenistan': '🇹🇲',
    'Kyrgyzstan': '🇰🇬', 'Tajikistan': '🇹🇯', 'Laos': '🇱🇦', 'Malaysia': '🇲🇾',
    'Brunei': '🇧🇳', 'Papua New Guinea': '🇵🇬', 'New Zealand': '🇳🇿',
    'Greenland': '🇬🇱', 'Iceland': '🇮🇸', 'Norway': '🇳🇴', 'Sweden': '🇸🇪',
    'Belarus': '🇧🇾', 'Moldova': '🇲🇩', 'Serbia': '🇷🇸', 'Montenegro': '🇲🇪',
    'Bosnia and Herzegovina': '🇧🇦', 'Slovenia': '🇸🇮', 'Macedonia': '🇲🇰',
    'Albania': '🇦🇱', 'Kosovo': '🇽🇰', 'Cyprus': '🇨🇾', 'Georgia': '🇬🇪',
    'Armenia': '🇦🇲', 'Azerbaijan': '🇦🇿', 'Syria': '🇸🇾', 'Lebanon': '🇱🇧',
    'Jordan': '🇯🇴', 'Israel': '🇮🇱', 'Palestine': '🇵🇸', 'Mexico': '🇲🇽',
    'Cuba': '🇨🇺', 'Jamaica': '🇯🇲', 'Haiti': '🇭🇹', 'Dominican Republic': '🇩🇴',
    'Puerto Rico': '🇵🇷', 'Belize': '🇧🇿', 'Honduras': '🇭🇳', 'El Salvador': '🇸🇻',
    'Nicaragua': '🇳🇮', 'Costa Rica': '🇨🇷', 'Panama': '🇵🇦'
  }

  return commonFlags[countryName] || '🏳️'
}

export function CommunitySection() {
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_DOWNLOAD_URL)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  
  // API State
  const [totalHours, setTotalHours] = useState<number | null>(null)
  const [averageHours, setAverageHours] = useState<number | null>(null)
  const [weeklyData, setWeeklyData] = useState<any[]>([])
  const [dailyData, setDailyData] = useState<any[]>([])
  
  // Loading States
  const [totalHoursLoading, setTotalHoursLoading] = useState(true)
  const [averageHoursLoading, setAverageHoursLoading] = useState(true)
  const [weeklyDataLoading, setWeeklyDataLoading] = useState(true)
  const [dailyDataLoading, setDailyDataLoading] = useState(true)
  
  // Error States
  const [totalHoursError, setTotalHoursError] = useState<string | null>(null)
  const [averageHoursError, setAverageHoursError] = useState<string | null>(null)
  const [weeklyDataError, setWeeklyDataError] = useState<string | null>(null)
  const [dailyDataError, setDailyDataError] = useState<string | null>(null)
  
  // Set download URL on component mount
  useEffect(() => {
    setDownloadUrl(getDownloadLink())
  }, [])

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total hours
        setTotalHoursLoading(true)
        const totalHoursData = await fetchTotalHours()
        setTotalHours(totalHoursData)
        setTotalHoursError(null)
      } catch (error) {
        setTotalHoursError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setTotalHoursLoading(false)
      }
      
      try {
        // Fetch average hours
        setAverageHoursLoading(true)
        const averageHoursData = await fetchAverageWeeklyHours()
        setAverageHours(averageHoursData)
        setAverageHoursError(null)
      } catch (error) {
        setAverageHoursError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setAverageHoursLoading(false)
      }
      
      try {
        // Fetch weekly data
        setWeeklyDataLoading(true)
        const weeklyActivityData = await fetchWeeklyActivity()
        setWeeklyData(transformWeeklyDataForChart(weeklyActivityData))
        setWeeklyDataError(null)
      } catch (error) {
        setWeeklyDataError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setWeeklyDataLoading(false)
      }
      
      try {
        // Fetch daily data
        setDailyDataLoading(true)
        const dailyActivityData = await fetchDailyActivity(60)
        setDailyData(transformDailyDataForHeatmap(dailyActivityData))
        setDailyDataError(null)
      } catch (error) {
        setDailyDataError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setDailyDataLoading(false)
      }
    }
    
    fetchData()
  }, [])
  
  return (
    <section id="community" className="relative w-full py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-violet-400/10 rounded-full filter blur-2xl opacity-70"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-violet-500/10 rounded-full filter blur-2xl opacity-70"></div>
      </div>
      <div className="container px-4 md:px-6 max-w-[1140px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
          <div className="inline-block relative">
          <div className="absolute -left-10">
              <div className="text-sm text-yellow-400 font-semibold -rotate-[35deg]">ebb.cool</div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Movement</h2>
            </div>
          </div>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join the movement of creators building more amazing things with Ebb.
            </p>
        </div>

        {/* Top Row - Stats + Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Total Creating Time */}
          <Card className="bg-gradient-to-br border-none h-56">
            <CardContent className="flex flex-col items-center justify-center text-center h-full py-8 px-6">
              {totalHoursLoading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-500"></div>
              ) : totalHoursError ? (
                <div className="text-red-400 text-center">
                  <AlertCircle className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm">Failed to load</p>
                </div>
              ) : (
                <>
                  <div className="text-6xl font-bold text-violet-400 mb-1">
                    {totalHours?.toFixed(0)}
                  </div>
                  <p className="text-sm text-muted-foreground">total hours creating</p>
                </>
              )}
            </CardContent>
          </Card>

          {/* Average User Creating Time */}
          <Card className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 border-indigo-500/20 h-56">
            <CardContent className="flex flex-col items-center justify-center text-center h-full py-8 px-6 space-y-4">
              {averageHoursLoading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
              ) : averageHoursError ? (
                <div className="text-red-400 text-center">
                  <AlertCircle className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm">Failed to load</p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <div className="text-sm text-muted-foreground">Builders are creating</div>
                    <div className="text-4xl font-bold text-indigo-400">
                      {averageHours ? averageHours.toFixed(1) + 'h' : '0h'} <span className="text-sm text-muted-foreground"> / week</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Link href={downloadUrl}>
                      <Button size="lg" className="bg-violet-600 hover:bg-violet-500 text-white">
                        <Download className="h-5 w-5 mr-2" />
                        Download for macOS
                      </Button>
                    </Link>
                    <div className="text-sm text-yellow-400 font-semibold">Beat the average!</div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* GitHub-style Activity Grid */}
          <Card className="h-56 border-none bg-gradient-to-br">
            <CardContent className="flex flex-col items-center justify-center text-center h-full py-8 px-6">
              <div className="flex justify-center mb-4">
                <ActivityGrid data={dailyData} loading={dailyDataLoading} error={dailyDataError} />
              </div>
              <p className="text-sm text-muted-foreground">Last 60 days activity</p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Chart - Full Width */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          <Card className="border-none">
            <CardContent className="">
              <div className="h-64 pt-6 relative">
                <div className="text-sm mb-2 absolute top-0 left-0">Weekly Creating Time</div>
                {weeklyDataLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-500"></div>
                  </div>
                ) : weeklyDataError ? (
                  <div className="flex items-center justify-center h-full text-red-400">
                    <AlertCircle className="h-6 w-6 mr-2" />
                    <span>Failed to load chart data</span>
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="week" 
                        stroke="#9CA3AF"
                        fontSize={12}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="#9CA3AF"
                        fontSize={12}
                        domain={[0, weeklyData.length > 0 ? Math.max(...weeklyData.map(d => d.hours)) + 10 : 100]}
                        tickFormatter={(value) => `${value}h`}
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                        formatter={(value: number) => [`${value.toLocaleString()} hours`, 'Creating']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="#8B5CF6" 
                        strokeWidth={3}
                        dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2 }}
                        name="Creating"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Community Map - Full Width */}
        <div className="relative mb-12">
          <WorldMap countries={mockCountries} onCountryHover={setHoveredCountry} />
          
          {/* Overlay title and country info */}
          <div className="absolute top-6 left-6 z-10">
            <h3 className="text-2xl font-bold flex items-center gap-2 text-white mb-1">
              <Globe className="h-6 w-6" />
              Ebb Across the World
            </h3>
            <span className='text-sm text-muted-foreground'>Join users from all of these countries that have used Ebb</span>
            {hoveredCountry && (
              <div className="flex items-center gap-2 text-violet-300 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                <span className="text-xl">{getCountryFlagForDisplay(hoveredCountry)}</span>
                <span className="font-medium">{hoveredCountry}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 