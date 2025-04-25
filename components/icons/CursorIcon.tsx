import React from 'react'

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {}

export function CursorIcon({ className, width = 24, height = 24, ...props }: SvgIconProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 250 250" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect 
        width="250" 
        height="250" 
        rx="48" 
        fill="currentColor" // Use currentColor for easy styling
      />
    </svg>
  )
} 