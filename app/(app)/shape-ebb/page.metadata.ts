import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Shape the Future of Ebb',
  description: 'Help us make Ebb better by sharing your feedback and ideas. Your input directly shapes the future of our platform.',
  openGraph: {
    title: 'Shape the Future of Ebb',
    description: 'Share your feedback and help make Ebb the best productivity app out there!',
    type: 'website',
    images: ['/app/(app)/opengraph-image.png'], 
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shape the Future of Ebb',
    description: 'Share your feedback and help make Ebb the best productivity app out there!',
  }
}

export default metadata