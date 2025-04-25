import React from 'react'

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {}

export function CursorIcon({ className, width = 24, height = 24, ...props }: SvgIconProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 1500 1500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="1500" height="1500" rx="300" fill="black"/>
      <g clipPath="url(#clip0_109_30_cursor)">
        <path d="M746.45 1297L1239.9 1023.5L746.45 750L253 1023.5L746.45 1297Z" fill="url(#paint0_linear_109_30_cursor)"/>
        <path d="M1239.89 1023.5V476.5L746.441 203V750L1239.89 1023.5Z" fill="url(#paint1_linear_109_30_cursor)"/>
        <path d="M746.45 203L253 476.5V1023.5L746.45 750V203Z" fill="url(#paint2_linear_109_30_cursor)"/>
        <path d="M1239.89 476.5L746.441 1297V750L1239.89 476.5Z" fill="#E4E4E4"/>
        <path d="M1239.9 476.5L746.45 750L253 476.5H1239.9Z" fill="white"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_109_30_cursor" x1="746.45" y1="750" x2="746.45" y2="1297" gradientUnits="userSpaceOnUse">
          <stop offset="0.16" stopColor="#F8F8F8" stopOpacity="0.4"/>
          <stop offset="0.658" stopColor="#FBFBFB" stopOpacity="0.8"/>
        </linearGradient>
        <linearGradient id="paint1_linear_109_30_cursor" x1="1240.16" y1="501.683" x2="783.7" y2="747.061" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.4"/>
          <stop offset="1" stopColor="#878787" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="paint2_linear_109_30_cursor" x1="746.45" y1="203" x2="280.315" y2="1038.74" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7F7F7" stopOpacity="0.6"/>
          <stop offset="0.667" stopColor="#EFEFEF" stopOpacity="0.3"/>
        </linearGradient>
        <clipPath id="clip0_109_30_cursor">
          <rect width="1136" height="1094" fill="white" transform="translate(182 203)"/>
        </clipPath>
      </defs>
    </svg>
  )
} 