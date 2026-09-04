'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Download, AlertCircle } from 'lucide-react'
import WorldMap from '../community/WorldMap'
import { DEFAULT_DOWNLOAD_URL, getDownloadLink } from '@/lib/downloadUtils'

// API Types
interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

interface TotalHoursData {
  total_hours: number
}

// API Constants
const MARKETING_API_BASE = 'https://api.ebb.cool/api/marketing'

const MARKETING_ENDPOINTS = {
  TOTAL_HOURS: `${MARKETING_API_BASE}/total-hours`,
} as const

// API Client Functions
async function fetchTotalHours(): Promise<number> {
  const response = await fetch(MARKETING_ENDPOINTS.TOTAL_HOURS)
  const result: ApiResponse<TotalHoursData> = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Failed to fetch total hours')
  }

  return result.data.total_hours
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

  // Loading States
  const [totalHoursLoading, setTotalHoursLoading] = useState(true)

  // Error States
  const [totalHoursError, setTotalHoursError] = useState<string | null>(null)

  // Set download URL on component mount
  useEffect(() => {
    setDownloadUrl(getDownloadLink())
  }, [])

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTotalHoursLoading(true)
        const totalHoursData = await fetchTotalHours()
        setTotalHours(totalHoursData)
        setTotalHoursError(null)
      } catch (error) {
        setTotalHoursError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setTotalHoursLoading(false)
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
              Thousands of hours of deep work and counting, from creators all over the world.
            </p>
        </div>

        {/* Hero Row - Scale, CTA, Reach */}
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

          {/* Download CTA */}
          <Card className="h-56 border-none bg-gradient-to-br">
            <CardContent className="flex flex-col items-center justify-center text-center h-full py-8 px-6 space-y-3">
              <Link href={downloadUrl}>
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-500 text-white text-base px-8 py-6 shadow-lg shadow-violet-500/30"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download for macOS
                </Button>
              </Link>
              <div className="text-sm text-yellow-400 font-semibold">Add your hours to the total</div>
            </CardContent>
          </Card>

          {/* Global Reach */}
          <Card className="h-56 border-none bg-gradient-to-br">
            <CardContent className="flex flex-col items-center justify-center text-center h-full py-8 px-6">
              <div className="text-6xl font-bold text-violet-400 mb-1">
                {mockCountries.length}+
              </div>
              <p className="text-sm text-muted-foreground">countries reached worldwide</p>
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
