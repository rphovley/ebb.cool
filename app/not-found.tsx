import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/Header'
import { FooterSection } from '@/components/home/FooterSection'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center bg-background p-6 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/">
            <Button variant="outline">Go back home</Button>
          </Link>
        </div>
      </main>
      <FooterSection />
    </>
  )
} 