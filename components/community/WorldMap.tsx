'use client'

import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { useState } from "react"

// Mapping from country names to ISO country codes
const countryCodeMap: Record<string, string> = {
  'United States': 'USA',
  'India': 'IND',
  'Germany': 'DEU',
  'Spain': 'ESP',
  'Vietnam': 'VNM',
  'France': 'FRA',
  'Canada': 'CAN',
  'United Kingdom': 'GBR',
  'Brazil': 'BRA',
  'Italy': 'ITA',
  'Turkey': 'TUR',
  'South Korea': 'KOR',
  'Poland': 'POL',
  'Russia': 'RUS',
  'Austria': 'AUT',
  'Australia': 'AUS',
  'Netherlands': 'NLD',
  'Portugal': 'PRT',
  'Taiwan': 'TWN',
  'Bangladesh': 'BGD',
  'Switzerland': 'CHE',
  'China': 'CHN',
  'Colombia': 'COL',
  'Czechia': 'CZE',
  'Ghana': 'GHA',
  'Greece': 'GRC',
  'Indonesia': 'IDN',
  'Bulgaria': 'BGR',
  'Botswana': 'BWA',
  'Chile': 'CHL',
  'Denmark': 'DNK',
  'Ecuador': 'ECU',
  'Finland': 'FIN',
  'Guatemala': 'GTM',
  'Hong Kong': 'HKG',
  'Croatia': 'HRV',
  'Hungary': 'HUN',
  'Iraq': 'IRQ',
  'Japan': 'JPN',
  'Kenya': 'KEN',
  'Cambodia': 'KHM',
  'Kazakhstan': 'KAZ',
  'Latvia': 'LVA',
  'Myanmar': 'MMR',
  'Mauritius': 'MUS',
  'Peru': 'PER',
  'Philippines': 'PHL',
  'Romania': 'ROU',
  'Singapore': 'SGP',
  'Thailand': 'THA',
  'Tanzania': 'TZA',
  'Ukraine': 'UKR',
  'Uruguay': 'URY',
}

// Country flags mapping
const countryFlags: Record<string, string> = {
  'United States': '🇺🇸',
  'India': '🇮🇳',
  'Germany': '🇩🇪',
  'Spain': '🇪🇸',
  'Vietnam': '🇻🇳',
  'France': '🇫🇷',
  'Canada': '🇨🇦',
  'United Kingdom': '🇬🇧',
  'Brazil': '🇧🇷',
  'Italy': '🇮🇹',
  'Turkey': '🇹🇷',
  'South Korea': '🇰🇷',
  'Poland': '🇵🇱',
  'Russia': '🇷🇺',
  'Austria': '🇦🇹',
  'Australia': '🇦🇺',
  'Netherlands': '🇳🇱',
  'Portugal': '🇵🇹',
  'Taiwan': '🇹🇼',
  'Bangladesh': '🇧🇩',
  'Switzerland': '🇨🇭',
  'China': '🇨🇳',
  'Colombia': '🇨🇴',
  'Czechia': '🇨🇿',
  'Ghana': '🇬🇭',
  'Greece': '🇬🇷',
  'Indonesia': '🇮🇩',
  'Bulgaria': '🇧🇬',
  'Botswana': '🇧🇼',
  'Chile': '🇨🇱',
  'Denmark': '🇩🇰',
  'Ecuador': '🇪🇨',
  'Finland': '🇫🇮',
  'Guatemala': '🇬🇹',
  'Hong Kong': '🇭🇰',
  'Croatia': '🇭🇷',
  'Hungary': '🇭🇺',
  'Iraq': '🇮🇶',
  'Japan': '🇯🇵',
  'Kenya': '🇰🇪',
  'Cambodia': '🇰🇭',
  'Kazakhstan': '🇰🇿',
  'Latvia': '🇱🇻',
  'Myanmar': '🇲🇲',
  'Mauritius': '🇲🇺',
  'Peru': '🇵🇪',
  'Philippines': '🇵🇭',
  'Romania': '🇷🇴',
  'Singapore': '🇸🇬',
  'Thailand': '🇹🇭',
  'Tanzania': '🇹🇿',
  'Ukraine': '🇺🇦',
  'Uruguay': '🇺🇾',
}

// Function to get country flag for countries not in our main list
function getCountryFlag(countryName: string): string {
  const commonFlags: Record<string, string> = {
    'United States of America': '🇺🇸',
    'Russian Federation': '🇷🇺',
    'People\'s Republic of China': '🇨🇳',
    'Republic of Korea': '🇰🇷',
    'Democratic People\'s Republic of Korea': '🇰🇵',
    'United Arab Emirates': '🇦🇪',
    'Saudi Arabia': '🇸🇦',
    'Islamic Republic of Iran': '🇮🇷',
    'Republic of the Congo': '🇨🇬',
    'Democratic Republic of the Congo': '🇨🇩',
    'Central African Republic': '🇨🇫',
    'Bosnia and Herzegovina': '🇧🇦',
    'Trinidad and Tobago': '🇹🇹',
    'Papua New Guinea': '🇵🇬',
    'Solomon Islands': '🇸🇧',
    'New Zealand': '🇳🇿',
    'Costa Rica': '🇨🇷',
    'Dominican Republic': '🇩🇴',
    'Puerto Rico': '🇵🇷',
    'El Salvador': '🇸🇻',
    'South Africa': '🇿🇦',
    'North Macedonia': '🇲🇰',
    'Czech Republic': '🇨🇿',
    'Slovak Republic': '🇸🇰',
    'Republic of Serbia': '🇷🇸',
    'Bosnia and Herz.': '🇧🇦',
    'Montenegro': '🇲🇪',
    'Moldova': '🇲🇩',
    'Belarus': '🇧🇾',
    'Lithuania': '🇱🇹',
    'Estonia': '🇪🇪',
    'Slovenia': '🇸🇮',
    'Albania': '🇦🇱',
    'Macedonia': '🇲🇰',
    'Serbia': '🇷🇸',
    'Kosovo': '🇽🇰',
    'Iceland': '🇮🇸',
    'Ireland': '🇮🇪',
    'Malta': '🇲🇹',
    'Cyprus': '🇨🇾',
    'Luxembourg': '🇱🇺',
    'Monaco': '🇲🇨',
    'Liechtenstein': '🇱🇮',
    'San Marino': '🇸🇲',
    'Vatican': '🇻🇦',
    'Andorra': '🇦🇩',
    'Norway': '🇳🇴',
    'Sweden': '🇸🇪',
    'Israel': '🇮🇱',
    'Palestine': '🇵🇸',
    'Jordan': '🇯🇴',
    'Lebanon': '🇱🇧',
    'Syria': '🇸🇾',
    'Yemen': '🇾🇪',
    'Oman': '🇴🇲',
    'Kuwait': '🇰🇼',
    'Bahrain': '🇧🇭',
    'Qatar': '🇶🇦',
    'Afghanistan': '🇦🇫',
    'Pakistan': '🇵🇰',
    'Nepal': '🇳🇵',
    'Bhutan': '🇧🇹',
    'Sri Lanka': '🇱🇰',
    'Maldives': '🇲🇻',
    'Mongolia': '🇲🇳',
    'Laos': '🇱🇦',
    'North Korea': '🇰🇵',
    'Taiwan': '🇹🇼',
    'Brunei': '🇧🇳',
    'Malaysia': '🇲🇾',
    'East Timor': '🇹🇱',
    'Fiji': '🇫🇯',
    'Vanuatu': '🇻🇺',
    'Samoa': '🇼🇸',
    'Tonga': '🇹🇴',
    'Kiribati': '🇰🇮',
    'Tuvalu': '🇹🇻',
    'Nauru': '🇳🇷',
    'Palau': '🇵🇼',
    'Marshall Islands': '🇲🇭',
    'Micronesia': '🇫🇲',
    'Morocco': '🇲🇦',
    'Algeria': '🇩🇿',
    'Tunisia': '🇹🇳',
    'Libya': '🇱🇾',
    'Egypt': '🇪🇬',
    'Sudan': '🇸🇩',
    'South Sudan': '🇸🇸',
    'Ethiopia': '🇪🇹',
    'Eritrea': '🇪🇷',
    'Djibouti': '🇩🇯',
    'Somalia': '🇸🇴',
    'Mali': '🇲🇱',
    'Burkina Faso': '🇧🇫',
    'Niger': '🇳🇪',
    'Chad': '🇹🇩',
    'Nigeria': '🇳🇬',
    'Cameroon': '🇨🇲',
    'Equatorial Guinea': '🇬🇶',
    'Gabon': '🇬🇦',
    'São Tomé and Príncipe': '🇸🇹',
    'Cape Verde': '🇨🇻',
    'Senegal': '🇸🇳',
    'Gambia': '🇬🇲',
    'Guinea-Bissau': '🇬🇼',
    'Guinea': '🇬🇳',
    'Sierra Leone': '🇸🇱',
    'Liberia': '🇱🇷',
    'Ivory Coast': '🇨🇮',
    'Togo': '🇹🇬',
    'Benin': '🇧🇯',
    'Mauritania': '🇲🇷',
    'Malawi': '🇲🇼',
    'Zambia': '🇿🇲',
    'Zimbabwe': '🇿🇼',
    'Mozambique': '🇲🇿',
    'Madagascar': '🇲🇬',
    'Comoros': '🇰🇲',
    'Seychelles': '🇸🇨',
    'Rwanda': '🇷🇼',
    'Burundi': '🇧🇮',
    'Uganda': '🇺🇬',
    'Angola': '🇦🇴',
    'Namibia': '🇳🇦',
    'Lesotho': '🇱🇸',
    'Swaziland': '🇸🇿',
    'Mexico': '🇲🇽',
    'Belize': '🇧🇿',
    'Guatemala': '🇬🇹',
    'Honduras': '🇭🇳',
    'Nicaragua': '🇳🇮',
    'Panama': '🇵🇦',
    'Cuba': '🇨🇺',
    'Haiti': '🇭🇹',
    'Jamaica': '🇯🇲',
    'Bahamas': '🇧🇸',
    'Barbados': '🇧🇧',
    'Saint Lucia': '🇱🇨',
    'Grenada': '🇬🇩',
    'Saint Vincent and the Grenadines': '🇻🇨',
    'Antigua and Barbuda': '🇦🇬',
    'Dominica': '🇩🇲',
    'Saint Kitts and Nevis': '🇰🇳',
    'Venezuela': '🇻🇪',
    'Guyana': '🇬🇾',
    'Suriname': '🇸🇷',
    'French Guiana': '🇬🇫',
    'Paraguay': '🇵🇾',
    'Bolivia': '🇧🇴',
    'Argentina': '🇦🇷',
  }
  
  return commonFlags[countryName] || '🏳️'
}

interface WorldMapProps {
  countries: Array<{ name: string; flag: string }>
  onCountryHover?: (country: string | null) => void
}

export default function WorldMap({ countries, onCountryHover }: WorldMapProps) {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  // Create a set of ISO codes for countries with Ebb users
  const ebbCountryCodes = new Set(
    countries.map(country => countryCodeMap[country.name]).filter(Boolean)
  )

  // Create a map from ISO code to country name for reverse lookup
  const isoToCountryName = Object.fromEntries(
    Object.entries(countryCodeMap).map(([name, iso]) => [iso, name])
  )

  const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 140,
          center: [0, 10]
        }}
        className="w-full h-[400px] md:h-[600px]"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: any) => {
            return geographies.map((geo: any) => {
              // Try different property names for country codes
              const countryCode = geo.properties.ISO_A3 || geo.properties.NAME || geo.id
              const isEbbCountry = ebbCountryCodes.has(countryCode)
              
              // Get readable country name - prioritize human-readable names over codes
              const rawCountryName = geo.properties.NAME || geo.properties.NAME_EN || geo.properties.ADMIN || geo.properties.NAME_LONG
              const countryName = isoToCountryName[countryCode] || rawCountryName || countryCode
              
              // Get flag - either from our mapping or generate from country name
              const flag = countryFlags[countryName] || getCountryFlag(countryName) || getCountryFlag(rawCountryName)
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    if (countryName) {
                      setHoveredCountry(countryName)
                      onCountryHover?.(countryName)
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredCountry(null)
                    onCountryHover?.(null)
                  }}
                  style={{
                    default: {
                      fill: isEbbCountry ? "#8B5CF680" : "#37415160",
                      stroke: "#1F2937",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: isEbbCountry ? "#8B5CF6" : "#4B5563",
                      stroke: "#1F2937",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: isEbbCountry ? "#7C3AED" : "#374151",
                      stroke: "#1F2937",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                  }}
                />
              )
            })
          }}
        </Geographies>
      </ComposableMap>
    </div>
  )
} 