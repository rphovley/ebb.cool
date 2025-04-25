import React from 'react'

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {}

export function MessagesIcon({ className, width = 24, height = 24, ...props }: SvgIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66.145836 66.145836"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="messages-grad-a">
          <stop style={{ stopColor: '#0cbd2a' }} offset="0" />
          <stop style={{ stopColor: '#5bf675' }} offset="1" />
        </linearGradient>
        <linearGradient 
          id="messages-grad-b" 
          xlinkHref="#messages-grad-a" 
          x1="-25.272568"
          y1="207.52057"
          x2="-25.272568"
          y2="152.9982"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.98209275,0,0,0.98209275,-1.0651782,3.7961838)" 
        />
      </defs>
      <g transform="translate(59.483067,-145.8456)">
        <rect
          ry="14.567832"
          rx="14.567832"
          y="145.8456"
          x="-59.483067"
          height="66.145836"
          width="66.145836"
          fill="url(#messages-grad-b)"
        />
        <path
          d="m -26.410149,157.29606 a 24.278298,20.222157 0 0 0 -24.278105,20.22202 24.278298,20.222157 0 0 0 11.79463,17.31574 27.365264,20.222157 0 0 1 -4.245218,5.94228 23.85735,20.222157 0 0 0 9.86038,-3.87367 24.278298,20.222157 0 0 0 6.868313,0.83768 24.278298,20.222157 0 0 0 24.2781059,-20.22203 24.278298,20.222157 0 0 0 -24.2781059,-20.22202 z"
          fill="#ffffff"
        />
      </g>
    </svg>
  )
} 