import React from 'react'

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {}

export function XIcon({ className, width = 24, height = 24, ...props }: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" // Simple viewBox for text
      width={width}
      height={height}
      className={className}
      fill="currentColor" // Apply color to the text
      {...props}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central" // Use central for better vertical alignment
        fontSize="20" // Adjust font size as needed
        fontWeight="bold" // Make it bold like the typical X logo
      >
        𝕏
      </text>
    </svg>
  )
}
