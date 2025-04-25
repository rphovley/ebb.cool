import React from 'react'

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {}

export function FigmaIcon({ className, width = 20, height = 30, ...props }: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 300"
      width={width}
      height={height}
      className={className}
      {...props}
    >
      {/* SVG content adapted */}
      <path fill="#0ACF83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" />
      <path fill="#A259FF" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" />
      <path fill="#F24E1E" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" />
      <path fill="#FF7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" />
      <path fill="#1ABCFE" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" />
    </svg>
  )
} 